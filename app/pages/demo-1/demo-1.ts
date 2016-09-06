import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
declare var ocpu;
declare var $;


@Component({
  templateUrl: 'build/pages/demo-1/demo-1.html'
})

export class Demo1 {
  numberList:string;
  statistic:string;
  statMethods:string[];
  output:any;
  constructor() {
    this.numberList="2,3,4,5,6";
    this.statistic='sd';
    this.statMethods=['sd','median'];
    ocpu.seturl("http://public.opencpu.org/ocpu/library/stats/R");
  }
  calculate(){
    this.output='calculating';
    console.log(this.statistic);
    var callback = function(output){
      this.output=output;
    }.bind(this);
    var stat=this.statistic;
    var x = [];
    for(let val of this.numberList.split(',')){
      x.push(parseInt(val))
    }
    console.log(x);
    var req = ocpu.rpc(stat,{
      x : x
    }, callback);

//optional
    req.fail(function(){
      alert("R returned an error: " + req.responseText);
    });
  }



}
