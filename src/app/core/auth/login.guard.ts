import {Injectable} from '@angular/core';
import {UserService} from '../user/user.service';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class LoginGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> |
    Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.userService.isLogged()) {
      this.router.navigate(['user', this.userService.getUserName()]);
      return false;
    }
    return true;
  }
}
