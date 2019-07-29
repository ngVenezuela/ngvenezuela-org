import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormService } from '../../../shared/services/form.service';

@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.scss']
})
export class PasswordRecoveryComponent implements OnInit {

  // Form Instances
  formInstance: FormGroup;

  errorKeys: (errors: object|null) => string;

  constructor(
    private formService: FormService,
    private afAuth: AngularFireAuth,
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute,
  ) {
    this.errorKeys = this.formService.errorKeys;
  }

  ngOnInit() {
    // Keep the email from login view
    const email = this.route.snapshot.queryParams.email || '';

    // Email Recovery FormGroup Configuration
    this.formInstance = new FormGroup ({
      email: new FormControl(email, [
        Validators.required,
        Validators.email,
      ]),
    });

  }

  onSubmit() {
    // Show spinner
    this.spinner.show();

    // Attempt send email
    this.afAuth.auth.sendPasswordResetEmail( this.formInstance.get('email').value )
      .then(() => {
        // hide spinner
        this.spinner.hide()
          .then(() => {
            alert('Listo, Revisa tu correo.');
          });
      })
      .catch((error) => {
        // hide spinner
        this.spinner.hide()
          .then(() => {
            alert(error.message);
          });
      });

  }

}
