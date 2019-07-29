import { Injectable } from '@angular/core';
import { Router, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MinimumGuard implements CanActivate {

  constructor(
    private afAuth: AngularFireAuth,
    public router: Router
  ) {}

  canActivate(
    _: any,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      return this.afAuth.authState
        .pipe(map( user => {
          if ( user !== null) {
            // authenticated
            return true;
          } else {
            this.router.navigate(['/auth/login'], { queryParams: { 'redirect-to': state.url } });
            return false;
          }
        }));
  }
}
