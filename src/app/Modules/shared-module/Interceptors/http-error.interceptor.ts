import {Injectable} from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import {catchError, map, Observable, throwError} from 'rxjs';
import {Router} from "@angular/router";
import {AuthService} from "../Services/auth.service";
import {SharedToastrService} from "../Services/sharedToastr.service";


@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private route:Router , private auth:AuthService , private toaster:SharedToastrService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
      return next.handle(request).pipe(
        catchError((error:HttpErrorResponse)=>{
          if(error instanceof HttpErrorResponse){
            if(error.status == 401){
              this.toaster.errorToaster('You are not authorized')
              localStorage.removeItem('token');
              this.route.navigate(['login'])
            }
          }
          return throwError(error)
        })
      )
  }

}
