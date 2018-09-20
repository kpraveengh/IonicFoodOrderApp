import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderhistoryPage } from './orderhistory';

@NgModule({
  declarations: [
    OrderhistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderhistoryPage),
  ],
})
export class OrderhistoryPageModule {}
