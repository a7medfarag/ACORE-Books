import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {RequestInterceptor} from './request.interceptor';
import {HttpErrorInterceptor} from './http-error.interceptor';

export const httpInterceptorProviders = [
  {provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true},
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptor,
    multi: true,
  },
];
