import {NgModule} from '@angular/core';
import {AlertComponent} from './alert.component';
import {CommonModule} from '@angular/common';
import {AlertService} from './alert.service';

@NgModule({
  declarations: [AlertComponent],
  exports: [AlertComponent],
  imports: [CommonModule],
 // providers: [AlertService]
})
export class AlertModule {}
