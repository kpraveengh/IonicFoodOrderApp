
import { IonicPageModule } from 'ionic-angular';
import { StoremenuPage } from './storemenu';
import { ErrorHandler, NgModule ,CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    StoremenuPage,
  ],
  imports: [
    IonicPageModule.forChild(StoremenuPage),ComponentsModule,PipesModule
  ],
  schemas:[
    ErrorHandler, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
  ]
})
export class StoremenuPageModule {}
