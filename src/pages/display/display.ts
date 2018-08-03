import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import transferdata from '../home/home';
import { DatabaseProvider } from '../../providers/database/database';

/**
 * Generated class for the DisplayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-display',
  templateUrl: 'display.html',
})
export class DisplayPage {

  obj= this.navParams.get("obj");
  obj2= this.navParams.get("obj2");
  display = [];
  title;
  author;
  date;
  pic;
  des;
  colour;
  answe = 0;
  url;
  constructor(public navCtrl: NavController, public navParams: NavParams, private db:DatabaseProvider) {
  }

  ionViewDidLoad() {
    if (this.obj != null || this.obj != undefined){
    this.title = this.obj.title;
    this.author =  this.obj.author;
    this.date =  this.obj.publishedAt.substr(0,10);
    this.pic = this.obj.urlToImage;
    this.des =  this.obj.description;
    this.url = this.obj.url;
  }
else if (this.obj2 != null || this.obj2 != undefined){
  this.title = this.obj2.title;
    this.author =  this.obj2.author;
    this.date =  this.obj2.date;
    this.pic = this.obj2.image;
    this.des =  this.obj2.desecription;
    this.url = this.obj2.url;
    this.colour =  this.obj2.colour;
    this.answe =  1;
}
  else 
  {
    this.title = transferdata[1];
    this.author =  transferdata[4];
    this.date =  transferdata[2].substr(0,10);
    this.pic = transferdata[0];
    this.des =  transferdata[3]  
    this.url =  transferdata[5];
  }
}

addStudents($event){
  if (this.answe ==  0){
      this.colour = "danger";
      this.answe = 1;
      this.db.storefavourite(this.title,this.des,this.author, this.pic, this.colour,this.url,this.date);
  }
  else if(this.answe ==  1){
    this.colour = "light";
    this.answe = 0;
    this.db.deleteFavourite(this.url);
    this.navCtrl.pop();
  }


}
}
