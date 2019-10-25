import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../core/auth/auth.service';
import {Router} from '@angular/router';
import {PlatformDetectorService} from '../../core/platform-detector/platform-detector.service';

@Component({
  // tslint:disable-next-line:component-selector
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;
  @ViewChild('userNameInput', {static: true}) userNameInput: ElementRef<HTMLInputElement>;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private platformDetector: PlatformDetectorService) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.platformDetector.autoFocus(this.userNameInput);
  }

  login() {
    const userName = this.loginForm.get('userName').value;
    const password = this.loginForm.get('password').value;
    this.authService.authenticate(userName, password)
      .subscribe(() => {
          console.log('autenticado');
          this.router.navigate(['user', userName]);
        },
        err => {
          console.log(err);
          // alert('invalid user name or password!');
          this.loginForm.reset();
          this.platformDetector.autoFocus(this.userNameInput);
        });
  }
}
