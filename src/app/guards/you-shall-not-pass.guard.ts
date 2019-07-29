import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YouShallNotPassGuard implements CanActivate {
  constructor(
    public router: Router
  ) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
      this.router.navigate(['/'], { queryParams: { request: 'not-allowed' } });
      return false;
  }
}
