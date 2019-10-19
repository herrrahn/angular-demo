import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {PhotoComponent} from './photo/photo.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';

@NgModule({
  declarations: [PhotoComponent,
    PhotoListComponent,
    PhotoFormComponent],
 // exports: [PhotoComponent],
  imports: [HttpClientModule, CommonModule]
})
export class PhotosModule {}
