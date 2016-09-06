import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
declare var ocpu;
declare var $;

@Component({

  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

  public mycallback:Function;


  constructor(private navCtrl: NavController) {
    //bind this to callback so can update dom
    var callback = function(output){
      this.result=output;
      console.log(output);
      console.log(this)
    }.bind(this);

    ocpu.seturl("//public.opencpu.org/ocpu/library/stats/R");
    var mydata = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    var req = ocpu.rpc("sd",{
      x : mydata
    }, callback);

//optional
    req.fail(function(){
      alert("R returned an error: " + req.responseText);
    });




  }
}


