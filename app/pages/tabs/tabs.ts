import {Component} from '@angular/core';
import {HomePage} from '../home/home';
import {Demo1} from '../demo-1/demo-1';
import {Demo2} from '../demo-2/demo-2';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  private tab1Root: any;
  private tab2Root: any;
  private tab3Root: any;

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = HomePage;
    this.tab2Root = Demo1;
    this.tab3Root = Demo2;
  }
}
