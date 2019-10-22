import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {CommonModule} from '@angular/common';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [HeaderComponent, UserComponent],
  exports: [HeaderComponent],
  imports: [CommonModule]
})
export class CoreModule {

}
