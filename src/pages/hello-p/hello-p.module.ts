import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HelloPPage } from './hello-p';

@NgModule({
  declarations: [
    HelloPPage,
  ],
  imports: [
    IonicPageModule.forChild(HelloPPage),
  ],
})
export class HelloPPageModule {}
