import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConnexionPage } from '../connexion/connexion';

/**
 * Generated class for the EnregistrementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-enregistrement',
  templateUrl: 'enregistrement.html',
})
export class EnregistrementPage {
  
  connexionPage = ConnexionPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnregistrementPage');
  }

}
