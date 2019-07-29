import { Component, Input } from '@angular/core';
import { AuthService, Provider, SignInType } from '../../services/fire-auth.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent {

  @Input() provider: Provider;
  @Input() redirectTo: string;

  constructor(
    private authService: AuthService,
    private spinner: NgxSpinnerService,
  ) {}

  signIn(signInType: SignInType) {
    // show spinner
    this.spinner.show();

    this.authService.signInWith(this.provider, signInType, this.redirectTo)
      .then((result) => {
        this.spinner.hide();
        console.log(result);
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
