import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PhotoService} from './photos/photo/photo.service';
import {Photo} from './photos/photo/photo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'alurapic';

  constructor() {}

}
