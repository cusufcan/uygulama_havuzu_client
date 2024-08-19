import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { StateService } from '../auth/application/state.service';
import { UserService } from '../auth/application/user.service';

@Injectable({
  providedIn: 'root',
})
export class BlockGuard implements CanActivate {
  constructor(
    private userService: UserService,
    private stateService: StateService,
    private router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.stateService.isLoggedIn) {
      return true;
    } else {
      this.router.navigate(['/auth']);
      return false;
    }
  }
}
