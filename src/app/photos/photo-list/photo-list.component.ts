import {Component, OnDestroy, OnInit} from '@angular/core';
import {Photo} from '../photo/photo';
import {ActivatedRoute} from '@angular/router';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import {PhotoService} from '../photo/photo.service';
import {LoadingService} from '../../shared/components/loading/loading.service';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];
  filter: '';
  hasMode = true;
  currentPage = 1;
  userName = '';

  constructor(private route: ActivatedRoute,
              private photoService: PhotoService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userName = params.userName;
      this.photos = this.route.snapshot.data['photos'];
    });

    /*   this.userName = this.route.snapshot.paramMap.get('userName');
       this.photos = this.route.snapshot.data.photos;*/
  }

  load() {
    this.photoService.listFromUserPaginated(this.userName, ++this.currentPage)
      .subscribe(it => {
        this.filter = '';
        this.photos = this.photos.concat(it);
        if (!it.length || it.length < 12) {
          this.hasMode = false;
        }
      });
  }
}
