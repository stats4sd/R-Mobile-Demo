import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';



@Component({
  templateUrl: 'build/pages/demo-1/demo-1.html'
})

export class Demo1 {
  numberList:string;
  statistic:string;
  statMethods:string[];
  constructor() {
    this.numberList="2,3,4,5,6";
    this.statistic='sd';
    this.statMethods=['sd','median']
  }



}
