import { Directive, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../services/fire-auth.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Directive({
  selector: '[appLogout]'
})
export class LogoutDirective {

  @Input() redirectTo: string;

  constructor(
    private authService: AuthService,
    public router: Router,
    private spinner: NgxSpinnerService,
  ) {}

  @HostListener('click') onClick() {
    this.logout();
  }

  private logout() {
    // show spinner
    this.spinner.show();

    this.authService.signOut(this.redirectTo)
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
