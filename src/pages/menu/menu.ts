import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { VenderPage } from'../vender/vender';
import { ArrendarPage }from'../arrendar/arrendar';
import{ ComprarPage }from'../comprar/comprar';
import{ BuscarPage }from'../buscar/buscar';
import { HomePage } from '../home/home';
import { MapaPage } from '../mapa/mapa';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  tab1Root = BuscarPage;
  tab2Root = VenderPage;
  tab3Root = ComprarPage;
  tab4Root = ArrendarPage;
  tab5Root = MapaPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}

// -------------- desde  aqui va el nuevo codigo






