import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {PhotoComment} from '../../photo/photo-comment';
import {PhotoService} from '../../photo/photo.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {switchMap, tap} from 'rxjs/operators';

@Component({
  selector: 'ap-photo-comments',
  templateUrl: './photo-comments.component.html',
  styleUrls: ['./photo-comments.component.scss']
})
export class PhotoCommentsComponent implements OnInit {

  @Input() photoId: number;
  comments$: Observable<PhotoComment[]>;

  commentForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private photoService: PhotoService) {
  }

  ngOnInit() {
    this.commentForm = this.formBuilder.group({
      comment: ['', Validators.maxLength(300)]
    });
    this.comments$ = this.photoService.getComments(this.photoId);
  }

  save() {
    this.comments$ = this.photoService.addComment(this.photoId, this.commentForm.get('comment').value as string)
      .pipe(switchMap(() => this.photoService.getComments(this.photoId)))
      .pipe(tap( () => this.commentForm.reset()));
  }
}
