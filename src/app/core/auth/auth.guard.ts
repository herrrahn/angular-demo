import {Injectable} from '@angular/core';
import {UserService} from '../user/user.service';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthGuard {
  constructor(private userService: UserService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> |
    Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.userService.isLogged()) {
      this.router.navigate(
        [''], {
          queryParams: {
            fromUrl: state.url
          }
        });
      return false;
    }
    return true;
  }
}
