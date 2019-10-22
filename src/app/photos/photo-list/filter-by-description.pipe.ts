import {Pipe, PipeTransform} from '@angular/core';
import {Photo} from '../photo/photo';

@Pipe({name: 'filterByDescription'})
export class FilterByDescriptionPipe implements PipeTransform {

  transform(photos: Photo[], descriptionQuery: string): any {
    if (descriptionQuery) {
      descriptionQuery = descriptionQuery.trim().toLowerCase();
      return photos.filter(
        it => it.description.toLowerCase().includes(descriptionQuery));
    } else {
      return photos;
    }
  }

}
