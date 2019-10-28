import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShowIfLoggedDirective} from './show-if-logged.directive';

@NgModule({
  declarations: [ShowIfLoggedDirective ],
  exports: [ShowIfLoggedDirective],
  imports: [CommonModule]
})
export class ShowIfLoggedModule {

}
