import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { MusicPage } from '../pages/music/music';
import { NewsPage } from '../pages/news/news';
import { AccueilPage } from '../pages/accueil/accueil';
import { TabsPage } from '../pages/tabs/tabs';
import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
import { ConnexionPage } from '../pages/connexion/connexion';
import { EnregistrementPage } from '../pages/enregistrement/enregistrement';
import { PrincipalPage } from '../pages/principal/principal';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    MusicPage,
    NewsPage,
    AccueilPage,
    TabsPage,
    WelcomePage,
    LoginPage,
    ConnexionPage,
    EnregistrementPage,
    PrincipalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MusicPage,
    NewsPage,
    AccueilPage,
    TabsPage,
    WelcomePage,
    LoginPage,
    ConnexionPage,
    EnregistrementPage,
    PrincipalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
