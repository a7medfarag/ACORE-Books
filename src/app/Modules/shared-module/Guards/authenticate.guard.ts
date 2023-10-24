import {inject} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot,} from '@angular/router';
import {AuthService} from '../Services/auth.service';
import { map, take } from 'rxjs';
import { Books, ViewBooks } from '../Constnats/app-routes-constants';

export const authenticateGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const router = inject(Router);
  const jwt = inject(AuthService)
  if (localStorage.getItem('token')) {
    jwt.updateData(true)
    console.log(state.url.includes('/Books') && !state.url.includes('/ViewBooks'));
    
    if(state.url.includes('/Books') && !state.url.includes('/ViewBooks')) router.navigate([`/${Books}/${ViewBooks}`]);
    
    return true;
  } else {
    router.navigate(['/login'])
    return false;
  }
};
