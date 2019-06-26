import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Quiz1Page } from '../quiz1/quiz1';
import { QuestionsProvider } from '../../providers/questions/questions';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
option =[];
  constructor(public navCtrl: NavController,public qq:QuestionsProvider) {
  this.option = this.qq.option();
  }
aas(r)
{
  this.qq.pos =r;
  console.log(this.qq.pos)
  this.qq.val =0;
  this.navCtrl.push(Quiz1Page); 

}

}
