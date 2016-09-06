import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';


@Component({

  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

  public mycallback:Function;


  constructor(private navCtrl: NavController) {
    //bind this to callback so can update dom





  }
}


