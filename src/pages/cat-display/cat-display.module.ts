import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CatDisplayPage } from './cat-display';

@NgModule({
  declarations: [
    CatDisplayPage,
  ],
  imports: [
    IonicPageModule.forChild(CatDisplayPage),
  ],
})
export class CatDisplayPageModule {}
