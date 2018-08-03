import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DisplayPage} from '../display/display'
import { DatabaseProvider } from '../../providers/database/database';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  newsArray = [];
  newsARR = [];

  constructor(public navCtrl: NavController, private db : DatabaseProvider) {
    this.db.GetAllFavourite().then((data:any) =>{
      this.newsARR = data;
    }, (error) => {
    });
  }
  ionViewDidEnter() {
    this.db.GetAllFavourite().then((data: any) => {
      this.newsARR = data;
    }, (error) => {
    });
  
  }

  more(i){
    this.navCtrl.push(DisplayPage, {obj2:i});
  }
  

}
