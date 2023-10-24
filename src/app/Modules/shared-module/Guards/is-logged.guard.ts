import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { inject } from '@angular/core';
import { Books, ViewBooks } from '../Constnats/app-routes-constants';

export const isLoggedGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const router = inject(Router);

  if (localStorage.getItem('token')) {
    router.navigate([`/${Books}/${ViewBooks}`]);
    return false;
  } else {
    // router.navigate(['/login'])
    return true;
  }
};
