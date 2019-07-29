import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormService } from '../../../shared/services/form.service';

@Component({
  selector: 'app-auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // password visibility
  hide = true;

  formInstance: FormGroup;

  errorKeys: (errors: object|null) => string;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private spinner: NgxSpinnerService,
    private formService: FormService,
    ) {
    this.errorKeys = this.formService.errorKeys;
  }

  ngOnInit() {
    this.formInstance = new FormGroup ({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      rememberMe: new FormControl(false, [])
    });

  }

  private getPersistence(rememberMe: false): Promise<void> {
    // ['local'] An explicit sign out is needed to clear that state.
    // ['session'] Indicates that the state will only persist in the current session or tab.
    return rememberMe ? this.afAuth.auth.setPersistence('local') : this.afAuth.auth.setPersistence('session');
  }

  onSubmit() {
    // show spinner
    this.spinner.show();

    this.getPersistence(this.formInstance.get('rememberMe').value)
      .then(() => {
        // firebase
        return this.afAuth.auth.signInWithEmailAndPassword(
                      this.formInstance.get('email').value,
                      this.formInstance.get('password').value
                   );
      })
      .then(() => this.router.navigateByUrl('/dashboard'))
      .catch((error) => {
        // hide spinner
        this.spinner.hide()
          .then(() => {
            alert(error.message);
          });
      })
      .finally(() => {
        // hide spinner
        this.spinner.hide();
      });

  }

}
