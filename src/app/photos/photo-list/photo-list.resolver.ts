import {PhotoService} from '../photo/photo.service';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Photo} from '../photo/photo';

@Injectable()
export class PhotoListResolver implements Resolve<Observable<Photo[]>> {
  constructor(private photoService: PhotoService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Photo[]> {
    const userName = route.paramMap.get('userName');
    return this.photoService.listFromUserPaginated(userName, 0);
  }
}
