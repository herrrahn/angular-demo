import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ap-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  isShown = false;
  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.isShown = !this.isShown;
  }

}
