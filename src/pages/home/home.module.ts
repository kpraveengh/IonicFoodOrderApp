import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
// import { SearchbarComponent } from '../../components/searchbar/searchbar';
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  declarations: [
    HomePage,
    // SearchbarComponent,    
  ],
  imports: [
    IonicPageModule.forChild(HomePage),ComponentsModule
  ],
})
export class HomePageModule {}