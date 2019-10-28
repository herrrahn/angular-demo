import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PhotoService} from '../photo/photo.service';
import {Photo} from '../photo/photo';
import {Observable} from 'rxjs';
import {PhotoComment} from '../photo/photo-comment';
import {AlertService} from '../../shared/components/alert/alert.service';
import {UserService} from '../../core/user/user.service';

@Component({
  selector: 'ap-photo-detail',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.scss']
})
export class PhotoDetailsComponent implements OnInit {
  private photo$: Observable<Photo>;
  photoId: number;
  comments$: Observable<PhotoComment[]>;

  constructor(private route: ActivatedRoute,
              private photoService: PhotoService,
              private router: Router,
              private alertService: AlertService,
              private userService: UserService) {
  }

  ngOnInit() {
    this.photoId = this.route.snapshot.params.photoId;
    this.photo$ = this.photoService.findById(this.photoId);
    this.comments$ = this.photoService.getComments(this.photoId);
    this.photo$.subscribe(() => {
    }, error => {
      console.log(error);
      this.router.navigate(['not-found']);
    });
  }

  remove() {
    this.photoService
      .removePhoto(this.photoId)
      .subscribe(() => {
        this.alertService.success('Photo removed!', true);
        this.router.navigate(['/user', this.userService.getUserName()]);
      }, error => {
        console.log(error);
        this.alertService.danger('Could not delete the photo!');
      });
  }

  like(photo: Photo) {
    this.photoService.like(photo.id)
      .subscribe(liked => {
        if (liked) {
          this.photo$ = this.photoService.findById(photo.id);
        }
      });
  }
}

