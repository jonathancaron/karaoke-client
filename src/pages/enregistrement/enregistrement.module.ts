import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnregistrementPage } from './enregistrement';

@NgModule({
  declarations: [
    EnregistrementPage,
  ],
  imports: [
    IonicPageModule.forChild(EnregistrementPage),
  ],
})
export class EnregistrementPageModule {}
