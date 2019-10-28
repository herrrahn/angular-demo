import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NewUser} from './new-user';
import {environment} from '../../../environments/environment';

const API = environment.apiUrl;

@Injectable()
export class SignupService {

  constructor(private httpClient: HttpClient) { }

  checkUserNameTaken(userName: string) {
    return this.httpClient.get(`${API}/user/exists/${userName}`);
  }

  signup(newUser: NewUser) {
    return this.httpClient.post(`${API}/user/signup`, newUser);
  }
}
