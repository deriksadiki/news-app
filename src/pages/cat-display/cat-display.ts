import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewsProvider } from '../../providers/news/news';
import {DisplayPage } from '../display/display';
/**
 * Generated class for the CatDisplayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cat-display',
  templateUrl: 'cat-display.html',
})
export class CatDisplayPage {
  newsArray = [];
  newsARR = [];
  text =this.navParams.get("ctgry") ;
  img = ["assets/imgs/business.jpg", "assets/imgs/tech.jpg", "assets/imgs/gen.jpg", "assets/imgs/health.jpg", "assets/imgs/en.jpg", "assets/imgs/sports.jpg"];
  img2 = this.img[this.navParams.get("num")];
  constructor(public navCtrl: NavController, public navParams: NavParams, private apinews: NewsProvider) {
    apinews.getNews(this.navParams.get("ctgry")).then((data:any) =>
    {    var x = 0;
      this.newsArray.push(data.articles);
       this.newsArray.forEach(a => {
      for (var i =0; i < 1000; i++){
      
        if (a[x] != null && a[x].publishedAt != null){
          this.newsARR.push(a[x]);
          this.newsARR[i].publishedAt = this.newsARR[i].publishedAt.substr(0,10)
          x++;
        }
     
      }
     
      });
     
    })
  }

  more(i){
    this.navCtrl.push(DisplayPage, {obj:i});
}


}
