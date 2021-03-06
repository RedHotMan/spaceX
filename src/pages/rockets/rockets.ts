import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { SpaceXProvider } from '../../providers/space-x/space-x';

/**
 * Generated class for the RocketsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  templateUrl: 'rocket-details.html',
})
export class RocketDetailsPage {
  rocket;

  constructor(params: NavParams) {
    this.rocket = params.data;
  }
}

@IonicPage()
@Component({
  selector: 'page-rockets',
  templateUrl: 'rockets.html',
})
export class RocketsPage {

  rocketList: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private spaceXProvider: SpaceXProvider, private loadingCtrl: LoadingController) {
    this.getAllRockets();
  }

  getAllRockets(){
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
    });
    loader.present();
    this.spaceXProvider.getAllRockets().then(data => {
      console.log(data);
      this.rocketList = data;
      loader.dismiss();
    })
  }

  goToRocketDetails(rocket){
    this.navCtrl.push(RocketDetailsPage, rocket );
  }

}
