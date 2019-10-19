import {Component, OnInit} from '@angular/core';
import {PhotoService} from '../photo/photo.service';
import {Photo} from '../photo/photo';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];

  constructor(private photoService: PhotoService) {
  }

  ngOnInit(): void {
    this.photoService.listFromUser('flavio')
      .subscribe(photos => this.photos = photos);
  }

}
