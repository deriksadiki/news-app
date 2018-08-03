import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the NewsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NewsProvider {

  constructor(public http: HttpClient) {
  }
  getNews(cat){
    const API:string = "https://newsapi.org/v2/top-headlines?country=za&category=" + cat +  "&apiKey=64681d686f9d48f19114467a83d5c668";
 return new Promise (resolve =>{
   this.http.get(API).subscribe(data =>{
     resolve(data);
   }, err =>{
     console.log(err);
   });
 });
  }
}