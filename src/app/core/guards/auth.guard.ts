import { CanActivateFn, Router } from '@angular/router';
import { AuthFacade } from '../../facades';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authFacade: AuthFacade = inject(AuthFacade);
  const router: Router = inject(Router);
  if (!authFacade.isAuthenticated) {
    return router.createUrlTree(['/auth']);
  }
  return authFacade.isAuthenticated;
};
