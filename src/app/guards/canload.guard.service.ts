import { Injectable } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CanloadGuard implements CanLoad {
  constructor(private router: Router) {}

  canLoad(route: Route): boolean {
    //console.log('route',route);
    if (localStorage.getItem('userData')) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
