import {Component, OnInit} from '@angular/core';
import {UserService} from '../user/user.service';
import {Observable} from 'rxjs';
import {User} from '../user/user';

@Component({
  selector: 'ap-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user$: Observable<User>;

  constructor(private userService: UserService) {
    this.user$ = this.userService.getUser();
  }

  logout() {
    this.userService.logout();
  }

  ngOnInit() {
  }

}
