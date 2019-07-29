import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { DefaultLayoutComponent } from './components/default-layout/default-layout.component';
import { LogoutDirective } from './directives/logout/logout.directive';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { PasswordRecoveryComponent  } from './components/password-recovery/password-recovery.component';
import { SocialComponent } from './components/social/social.component';
import { SharedModule } from '../shared/shared.module';
import { environment } from '../../../environments/environment';
import { IsAlreadyAuthenticatedGuard } from '../../guards/is-already-authenticated.guard';

const routes: Routes = [
  {
      path: 'auth',
      component: DefaultLayoutComponent,
      children: [
          {
            path: '',
            component: LoginComponent,
            canActivate: [
              IsAlreadyAuthenticatedGuard
            ],
          },
          {
            path: 'login',
            component: LoginComponent,
            canActivate: [
              IsAlreadyAuthenticatedGuard
            ],
          },
          {
            path: 'sign-up',
            component: SignUpComponent,
            canActivate: [
              IsAlreadyAuthenticatedGuard
            ],
          },
          {
            path: 'password-recovery',
            component: PasswordRecoveryComponent,
            canActivate: [
              IsAlreadyAuthenticatedGuard
            ],
          },
      ]
  }
];

@NgModule({
  declarations: [
    LogoutDirective,
    DefaultLayoutComponent,
    LoginComponent,
    SignUpComponent,
    PasswordRecoveryComponent,
    SocialComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild( routes ),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
  ],
  exports: [
    LogoutDirective,
    RouterModule,
  ],
})
export class AuthModule { }
