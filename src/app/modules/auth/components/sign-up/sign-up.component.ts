import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormService } from '../../../shared/services/form.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {

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

  onSubmit() {

    // show spinner
    this.spinner.show();

    this.afAuth.auth
      .createUserWithEmailAndPassword(
        this.formInstance.get('email').value,
        this.formInstance.get('password').value
      )
      .then(() => {
        return this.router.navigateByUrl('/dashboard');
      })
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

