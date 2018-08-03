import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule} from '@angular/common/http'
import { HttpModule } from '@angular/http';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { DisplayPage} from '../pages/display/display';
import { TabsPage } from '../pages/tabs/tabs';
import {CatDisplayPage} from '../pages/cat-display/cat-display'
import { StatusBar } from '@ionic-native/status-bar';
import { SQLite } from '../../node_modules/@ionic-native/sqlite';

import { SplashScreen } from '@ionic-native/splash-screen';
import { NewsProvider } from '../providers/news/news';
import { DatabaseProvider } from '../providers/database/database';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    DisplayPage,
    CatDisplayPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule ,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    DisplayPage,
    CatDisplayPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NewsProvider,
    DatabaseProvider,
    SQLite
  ]
})
export class AppModule {}
