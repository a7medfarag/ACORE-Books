import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import { ViewBooks} from "../shared-module/Constnats/app-routes-constants";
import {authenticateGuard} from "../shared-module/Guards/authenticate.guard";
import { MainBooksComponent } from "./components/main-books/main-books.component";

const routes: Routes = [
  {path: '', component: MainBooksComponent},
  {
    path: ViewBooks,
    canActivate: [authenticateGuard],
    loadComponent: () => import('./components/view-books/view-books.component').then(c => c.ViewBooksComponent)
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class BooksRoutingModule {
}
