import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
declare var ocpu;
declare var $;

@Component({
  templateUrl: 'build/pages/demo-2/demo-2.html'
})
export class Demo2 {
  numberList:string;
  statistic:string;
  statMethods:string[];
  output:any;
  dataLoading:boolean;
  data:any;
  showPlot:boolean;
  constructor() {
    this.numberList="2,3,4,5,6";
    this.statistic='sd';
    this.statMethods=['sd','median'];
  }

  getData(){
    var callback=function(data){
      this.data=data;
      this.dataLoading=false;
    }.bind(this);

    console.log('getting data');
    this.dataLoading=true;
    ocpu.seturl("http://public.opencpu.org/ocpu/library/stats/R");
    var req = ocpu.call("rnorm", {n: 100}, function(session){
      //read the session properties (just for fun)
      //$("#key").text(session.getKey());
      //$("#location").text(session.getLoc());
      //retrieve session console (stdout) async
      session.getConsole(function(outtxt){
        $("#output2").text(outtxt);
      });
      //retrieve the returned object async
      session.getObject(callback);
    })
  }

  makePlot(){
    this.showPlot=true;
    var x = this.data
    console.log(x)
    ocpu.seturl("http://public.opencpu.org/ocpu/library/ggplot2/R");

    var req = $('#plot').rplot('qplot',{
      x : x,
    });

//optional
    req.fail(function(){
      alert("R returned an error: " + req.responseText);
    });
  }
}
