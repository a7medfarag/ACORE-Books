import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {authenticateGuard} from './Modules/shared-module/Guards/authenticate.guard';
import {Books, Login} from './Modules/shared-module/Constnats/app-routes-constants';
import {isLoggedGuard} from './Modules/shared-module/Guards/is-logged.guard';
import { NotFoundComponent } from './not-found/not-found.component';
// import {adminGuard} from "./modules/shared-module/Guards/admin.guard";

// @ts-ignore
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: Login,
    canActivate:[isLoggedGuard],
    loadChildren: () =>
      import('./Modules/authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
  {
    path: Books,
    canActivate:[authenticateGuard],
    loadChildren: () =>
      import('./Modules/books/books.module').then(
        (m) => m.BooksModule
      ),
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
