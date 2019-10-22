import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {PhotoListResolver} from './photo-list/photo-list.resolver';
import {PhotoFormModule} from './photo-form/photo-form.module';
import {PhotoModule} from './photo/photo.module';
import {PhotoListModule} from './photo-list/photo-list.module';

@NgModule({
 // exports: [PhotoComponent],
  imports: [
    PhotoModule,
    PhotoFormModule,
    PhotoListModule],
  providers: [PhotoListResolver]
})
export class PhotosModule {}
