import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemdetailsPage } from './itemdetails';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ItemdetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ItemdetailsPage),ComponentsModule
  ],
})
export class ItemdetailsPageModule {}
