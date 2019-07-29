import { Injectable } from '@angular/core';
import { auth, User } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';


export type Provider =
| 'facebook'
| 'google'
| 'twitter'
| 'github';

export type SignInType =
| 'redirect'
| 'popup';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    // private storage: Storage
  ) { }

  private getProviderInstance( providerName: string ): auth.AuthProvider {
    let providerInstance: any;

    switch (providerName) {
        case 'facebook':
          providerInstance = new auth.FacebookAuthProvider();
          providerInstance.addScope('email');
          break;
        case 'google':
          providerInstance = new auth.GoogleAuthProvider();
          break;
        case 'twitter':
          providerInstance = new auth.TwitterAuthProvider();
          providerInstance.setCustomParameters({
            lang: 'es'
          });
          break;
        case 'github':
          providerInstance = new auth.GithubAuthProvider();
          break;
    }

    return providerInstance;
  }

  /**
   * Web sign-in with [popup]
   * @param redirectTo string -> After success login redirect to. e.g: /dashboard
   * @param providerName string -> facebook|google|twitter|github
   */
  async signInWithPopup(redirectTo: string, providerName: string ): Promise<boolean | auth.Error> {
    return await this.afAuth.auth.signInWithPopup(this.getProviderInstance(providerName))
      .then(( userCredential: auth.UserCredential ) => {
        // >>> isLogged
        // return this.attemptLinkCredential( userCredential.user );
      })
      .then(() => {
        if (typeof redirectTo !== 'undefined') {
          return this.router.navigateByUrl(redirectTo);
        }
      })
      .catch((error: auth.Error) => {
        if (error.code === 'auth/account-exists-with-different-credential') {
          // TODO: attemptSaveCredential
        }
        return error;
      });
  }

  /**
   * Web sign-in with [redirect]
   * @param providerName string facebook|google|twitter|github
   */
  async signInWithRedirect(providerName: string): Promise<void> {
    return await this.afAuth.auth.signInWithRedirect(this.getProviderInstance(providerName));
  }

  /**
   * Web logout
   * @param redirectTo string -> After success logout redirect to. e.g: /dashboard
   */
  async signOut(redirectTo?: string ): Promise<void> {
    return await this.afAuth.auth.signOut()
      .then(() => {
        if (typeof redirectTo !== 'undefined') {
          return this.router.navigateByUrl(redirectTo);
        }
      })
      .catch((error) => error);
  }

  /**
   * signIn
   * @param provider string [google|facebook]
   * @param type string [redirect|popup]
   * @param redirectTo string -> After success login redirect to. e.g: /dashboard
   */
  async signInWith(provider: string, type: string, redirectTo?: string) {
    if (type === 'redirect') {
      return await this.signInWithRedirect(provider);
    } else {
      return await this.signInWithPopup(redirectTo, provider);
    }
  }

}

