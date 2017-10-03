import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { MenuPage }from '../menu/menu';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  
  root: any = MenuPage;
  
  // menuOpc: Menu[] = [

  //   { label: 'Inicio', icon: 'home' }
  // ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
