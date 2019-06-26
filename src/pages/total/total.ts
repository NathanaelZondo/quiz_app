import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {QuestionsProvider} from '../../providers/questions/questions'
import {HomePage} from '../home/home';

@IonicPage()
@Component({
  selector: 'page-total',
  templateUrl: 'total.html',
})
export class TotalPage {
message;
message2;
val1;
  constructor(public navCtrl: NavController, public navParams: NavParams ,public q1:QuestionsProvider) {
    this.message = "You got : " ;
  this.message2 = "%";
this.val1= this.q1.val/5*100;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TotalPage');
  }
  home()
  {
   this.navCtrl.push(HomePage) 
  }
}
  
