import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PhotoListComponent} from './photos/photo-list/photo-list.component';
import {PhotoFormComponent} from './photos/photo-form/photo-form.component';
import {NotFoundComponent} from './errors/not-found/not-found.component';
import {PhotoListResolver} from './photos/photo-list/photo-list.resolver';
import {AuthGuard} from './core/auth/auth.guard';
import {PhotoDetailsComponent} from './photos/photo-details/photo-details.component';
import {GlobalErrorComponent} from './errors/global-error/global-error.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'user/:userName',
    component: PhotoListComponent,
    resolve: {photos: PhotoListResolver},
    data: {
      title: 'Timeline'
    }
  },
  {
    path: 'p/add',
    component: PhotoFormComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Photo upaload'
    }
  },
  {
    path: 'p/:photoId',
    component: PhotoDetailsComponent,
    data: {
      title: 'Photo details'
    }
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: 'error',
    component: GlobalErrorComponent,
    data: {
      title: 'Error'
    }
  },
  {
    path: '**',
    redirectTo: 'not-found',
    data: {
      title: 'Not found'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
