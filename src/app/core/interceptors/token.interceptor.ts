import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { AuthFacade } from '../../facades';
import { inject } from '@angular/core';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const authFacade: AuthFacade = inject(AuthFacade);

  return next(req).pipe(
    catchError((err: any) => {
      if (err.status === 400) {
        console.log('400 error');

        if (err.error.error.message === 'INVALID_ID_TOKEN') {
          authFacade.logout();
          return throwError(() => err);
        }
      }
      return throwError(() => err);
    })
  );
};
