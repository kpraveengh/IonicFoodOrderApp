import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CurrentordersPage } from './currentorders';

@NgModule({
  declarations: [
    CurrentordersPage,
  ],
  imports: [
    IonicPageModule.forChild(CurrentordersPage),
  ],
})
export class CurrentordersPageModule {}
