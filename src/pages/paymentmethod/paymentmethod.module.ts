import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaymentmethodPage } from './paymentmethod';

@NgModule({
  declarations: [
    PaymentmethodPage,
  ],
  imports: [
    IonicPageModule.forChild(PaymentmethodPage),
  ],
})
export class PaymentmethodPageModule {}
