import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {lowerCaseValidator} from '../../shared/validators/lower-case.validator';
import {UserNotTakenValidatorService} from './user-not-taken.validator.service';
import {NewUser} from './new-user';
import {SignupService} from './signup.service';
import {Router} from '@angular/router';
import {PlatformDetectorService} from '../../core/platform-detector/platform-detector.service';
import {usernamePassword} from './username.password.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: [UserNotTakenValidatorService]
})
export class SignupComponent implements OnInit {

  @ViewChild('inputEmail', {static: true}) inputEmail: ElementRef<HTMLInputElement>;
  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private userNotTaken: UserNotTakenValidatorService,
              private signupService: SignupService,
              private router: Router,
              private platform: PlatformDetectorService) {
  }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      email: ['',
        [
          Validators.required,
          Validators.email
        ]
      ],
      fullName: ['',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(40)
        ]
      ],
      userName: ['',
        [
          Validators.required,
          // Validators.pattern(/^[a-z0-9_\-]+$/),
          lowerCaseValidator,
          Validators.minLength(2),
          Validators.maxLength(30)
        ],
        this.userNotTaken.checkUserNameTaken()
      ],
      password: ['',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(14)
        ]
      ]
    }, {
      validator: usernamePassword
    });

    this.platform.autoFocus(this.inputEmail);
  }

  signup() {
    if (this.signupForm.valid && !this.signupForm.pending) {
      const user = this.signupForm.getRawValue() as NewUser;
      this.signupService
        .signup(user)
        .subscribe(() => this.router.navigate(['']),
          error => console.log(error));
    }
  }
}
