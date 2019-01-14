import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ActionSheetController} from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { ToastController } from 'ionic-angular';
/*
  Generated class for the DatabaseProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {

  private db: SQLiteObject;
  private isOpen: boolean;

  constructor(
    public http: Http,
    public storage: SQLite,
    private ac: ActionSheetController,
    public toastCtrl: ToastController
  ) {
    if (!this.isOpen) {
      this.storage = new SQLite();
      this.storage.create({ name: "data.db", location: "default" }).then((db: SQLiteObject) => {
        this.db = db;
        db.executeSql("CREATE TABLE IF NOT EXISTS favourites (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, desecription TEXT, author TEXT, image TEXT, colour TEXT, url TEXT, date TEXT) ", []);
        this.isOpen = true;
      }).catch((error) => {
        console.log(error);
      })
    }
  }

  storefavourite( title:string, des:string, author:string, image:string, colour:string, url:string, date:string){

    return new Promise ((resolve, reject) => {
      let sql = "INSERT INTO favourites (title, desecription, author, image, colour, url, date) VALUES (?, ?, ?, ?, ?, ?, ?)";
      this.db.executeSql(sql, [title, des, author, image, colour, url, date ]).then((data) =>{
        resolve(data);
        const toast = this.toastCtrl.create({
          message: 'Story added to Favourites',
          duration: 1000
        });
        toast.present();
      }, (error) => {
        reject(error);
      });
    });
  }

  GetAllFavourite(){
    return new Promise ((resolve, reject) => {
      this.db.executeSql("SELECT * FROM favourites", []).then((data) => {
        let arrayUsers = [];
        if (data.rows.length > 0) {
          for (var i = 0; i < data.rows.length; i++) {
            arrayUsers.push({
              id: data.rows.item(i).id,
              title: data.rows.item(i).title,
              desecription: data.rows.item(i).desecription,
              author: data.rows.item(i).author,
              image: data.rows.item(i).image,
              colour: data.rows.item(i).colour,
              url: data.rows.item(i).url,
              date: data.rows.item(i).date
            });       
          }          
        }   
        resolve(arrayUsers);
      }, (error) => {
        reject(error);
      })
    })
  }


  getColourState(url){
    return new Promise ((resolve, reject) => {
      this.db.executeSql("SELECT * FROM favourites WHERE url = ?", [url]).then((data) => {
        let arrayUsers = [];
        if (data.rows.length > 0) {
          for (var i = 0; i < data.rows.length; i++) {
            arrayUsers.push({
              colour: data.rows.item(i).colour,
            });       
          }          
        }   
        resolve(arrayUsers);
      }, (error) => {
        reject(error);
      })
    })
  }

  deleteFavourite(url){
    return new Promise ((resolve, reject) => {
      let sql = "DELETE FROM favourites WHERE url IN (?)";
      this.db.executeSql(sql,[url]).then((data) =>{
        resolve(data);
        const toast = this.toastCtrl.create({
          message: 'Story Removed from Favourites',
          duration: 1000
        });
        toast.present();
      }, (error) => {
        reject(error);
      });
    });
  }


}