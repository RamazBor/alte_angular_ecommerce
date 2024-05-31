import { Injectable, inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AuthPayload, AuthResponce } from '../core/interfaces/auth-payload';
import { Observable, map, tap } from 'rxjs';
import { StorageService } from '../core/services';
import { Router } from '@angular/router';
import { User } from '../core/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthFacade {
  authService: AuthService = inject(AuthService);
  storageService: StorageService = inject(StorageService);

  router: Router = inject(Router);

  get isAuthenticated() {
    // Two '!' sign means return value is string
    return !!this.storageService.getItem('token');
  }

  get token(): string {
    return this.storageService.getItem('token');
  }

  get refreshToken() {
    return this.storageService.getItem('refreshToken');
  }

  get user() {
    return this.storageService.getItem('user');
  }

  register(payload: AuthPayload): Observable<AuthResponce> {
    return this.authService.register(payload).pipe(
      tap((res) => {
        this.storageService.setItem('token', res.idToken);
        this.storageService.setItem('refreshToken', res.refreshToken);
        this.storageService.setItem('user', {
          email: res.email,
          id: res.localId,
        });
      })
    );
  }

  login(payload: AuthPayload) {
    return this.authService.login(payload).pipe(
      tap((res) => {
        this.storageService.setItem('token', res.idToken);
        this.storageService.setItem('refreshToken', res.refreshToken);
        this.storageService.setItem('user', {
          email: res.email,
          id: res.localId,
        });
      })
    );
  }

  sendOobCode(email: string) {
    return this.authService.sendOobCode(email);
  }

  resetPassword(oobCode: string, newPassword: string) {
    return this.authService.resetPassword(oobCode, newPassword);
  }

  logout(): void {
    this.storageService.clear();
    this.router.navigate(['/']);
  }

  getUser(): Observable<User> {
    return this.authService.lookup(this.token).pipe(
      map((res: { users: User[] }) => {
        if (res.users.length) {
          return res.users[0];
        }
        return {} as User;
      })
    );
  }

  changePassword(password: string) {
    return this.authService.changePassword(this.token, password).pipe(
      tap((res) => {
        this.storageService.setItem('token', res.idToken);
        this.storageService.setItem('refreshToken', res.refreshToken);
        this.storageService.setItem('user', {
          email: res.email,
          id: res.localId,
        });
      })
    );
  }
}
