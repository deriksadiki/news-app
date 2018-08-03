import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewsProvider } from '../../providers/news/news';
import {DisplayPage } from '../display/display';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  newsArray = [];
  newsARR = [];
  img;
  text;
  date;
  fullstory;

  constructor(public navCtrl: NavController,  private news: NewsProvider) {
    news.getNews('').then((data:any) =>
    {    var x = 2;
  
      this.newsArray.push(data.articles);
  
    this.newsArray.forEach(a => {
      this.img =  a[1].urlToImage;
      transferdata[0] =   this.img;
      this.text =  a[1].title;
      transferdata[1] =   this.text;
      this.date = a[1].publishedAt.substr(0,10);
      transferdata[2] =     this.date;
      this.fullstory = a[1].description;
      transferdata[3] =      this.fullstory ;
      transferdata[4] = a[1].author;
      transferdata[5] =  a[1].url;
      for (var i =0; i < 1000; i++){
        if (a[x] != null ){
          this.newsARR.push(a[x]);
          this.newsARR[i].publishedAt = this.newsARR[i].publishedAt.substr(0,10)
          x++;
      }     
      }
      });
     
    })
    
  }


  more(i){
    this.navCtrl.push(DisplayPage,{obj:i} )
  }

  mainStory(){
    this.navCtrl.push(DisplayPage)
  }

}

 var transferdata = [];
 export default transferdata;

