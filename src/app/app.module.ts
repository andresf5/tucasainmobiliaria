import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { MenuPage }from '../pages/menu/menu';
import { MapaPage } from '../pages/mapa/mapa';
import { VenderPage } from'../pages/vender/vender';
import { ArrendarPage }from'../pages/arrendar/arrendar';
import{ ComprarPage }from'../pages/comprar/comprar';
import{ BuscarPage }from'../pages/buscar/buscar';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    MenuPage,
    ComprarPage,
    VenderPage,
    ArrendarPage,
    BuscarPage,
    MapaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    MenuPage,
    ComprarPage,
    VenderPage,
    ArrendarPage,
    BuscarPage,
    MapaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
