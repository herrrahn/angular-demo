import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PhotoListResolver} from './photo-list/photo-list.resolver';
import {PhotoFormModule} from './photo-form/photo-form.module';
import {PhotoModule} from './photo/photo.module';
import {PhotoListModule} from './photo-list/photo-list.module';
import {ReactiveFormsModule} from '@angular/forms';
import {VMessageModule} from '../shared/components/vmessage/vmessage.module';
import { PhotoDetailsComponent } from './photo-details/photo-details.component';
import { PhotoCommentsComponent } from './photo-details/photo-comments/photo-comments.component';

@NgModule({
 // exports: [PhotoComponent],
  imports: [
    PhotoModule,
    PhotoFormModule,
    PhotoListModule,
    ReactiveFormsModule,
    CommonModule,
    VMessageModule
  ],
  providers: [PhotoListResolver]
})
export class PhotosModule {}
