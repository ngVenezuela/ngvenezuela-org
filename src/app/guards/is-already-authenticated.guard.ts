import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router, RouterStateSnapshot, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IsAlreadyAuthenticatedGuard implements CanActivate {

  constructor(
    private afAuth: AngularFireAuth,
    public router: Router
  ) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.afAuth.authState
      .pipe(map( user => {
        if ( user !== null) {
          // authenticated
          this.router.navigate(['/dashboard']);
          return false;
        } else {
          // not authenticated
          return true;
        }
      }));
  }
}
