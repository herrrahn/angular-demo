import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Photo} from './photo';

const API = 'http://localhost:3000'

@Injectable()
export class PhotoService {

  constructor(private http: HttpClient) {}

  listFromUser(userName: string): Observable<Photo[]> {
    return this.http
      .get<Photo[]>(`${API}/${userName}/photos`);
  }
}
