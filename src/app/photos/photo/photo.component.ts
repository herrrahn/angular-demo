import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ap-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {
  @Input()
  url: string;

  @Input()
  description: string;

  constructor() { }

  ngOnInit() {
  }

}
