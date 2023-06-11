import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const accessToken = localStorage.getItem('accessToken');
    const parsedAccessToken = accessToken ? JSON.parse(accessToken) : null;
    if (parsedAccessToken === null) return next.handle(request);
    const modifyRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ${parsedAccessToken}`,
      },
    });
    return next.handle(modifyRequest);
  }
}
