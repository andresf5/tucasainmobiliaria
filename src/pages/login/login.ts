import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage }from '../home/home';
import{ MenuPage } from '../menu/menu';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    this.navCtrl.setRoot(HomePage);
  }
}
