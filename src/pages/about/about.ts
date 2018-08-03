import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CatDisplayPage} from '../cat-display/cat-display';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }
  more(cat, nr){
    this.navCtrl.push(CatDisplayPage, {ctgry:cat, num:nr})
}
}
