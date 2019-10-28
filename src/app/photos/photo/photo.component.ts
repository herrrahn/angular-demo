import {Component, Input, OnInit} from '@angular/core';
import {environment} from '../../../environments/environment';

// const CLOUD = 'http://localhost:3000/imgs/';
const CLOUD = environment.apiUrl + '/imgs/';

@Component({
  selector: 'ap-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {

  private _url = '';

  @Input() set url(url: string) {
    if (!url.startsWith('data')) {
      this._url = CLOUD + url;
    } else {
      this._url = url;
    }
  }

  get url() {
    return this._url;
  }

  @Input() description: string;

  constructor() {
  }

  ngOnInit() {
  }

}
