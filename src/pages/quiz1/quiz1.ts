import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuestionsProvider } from '../../providers/questions/questions';
import {TotalPage} from '../total/total';
/**
 * Generated class for the Quiz1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quiz1',
  templateUrl: 'quiz1.html',
})
export class Quiz1Page {
box =[];
sho:any = {};
val1;
message;
message2;
wrong ;
  constructor(public navCtrl: NavController, public navParams: NavParams,public q1:QuestionsProvider) {
    this.box = this.q1.list();
    console.log(500) 
  }

  ionViewDidLoad() {
  
  }


  v1(i,v)
  {
  if(i == 0 && v == 1)
  {
    this.q1.val +=1;
    
  }
  else if(i == 1 && v == 1)
  {
    this.q1.val +=0;
    this.wrong = "The Correct answer was Genesis" ;
  }
  else if(i == 2 && v == 1)
  {
    this.q1.val +=0;
    console.log(i,v)
  }
  else if(i == 3 && v == 1)
  {
    this.q1.val +=0;
    console.log(i,v)
  }
  else if(i == 4 && v == 1)
  {
    this.q1.val +=0;
    console.log(i,v)
  }
  else 
  {
    this.q1.val +=0;  
  }
  console.log(i,v)
  }

  v2(i,v)
  {
  
  
  if(i == 0 && v == 2)
  {
    this.q1.val +=0;
    console.log(i,v)
  }
  else if(i == 1 && v == 2)
  {
    this.q1.val +=0;
    console.log(i,v)
  }
  else if(i == 2 && v == 2)
  {
    this.q1.val +=1;
    console.log(i,v)
  }
  else if(i == 3 && v == 2)
  {
    this.q1.val +=1;
    console.log(i,v)
  }
  else if(i == 4 && v == 2)
  {
    this.q1.val +=0;
    console.log(i,v)
  }
  else 
  {
    this.q1.val +=0;  
  }
  console.log(i,v)
  }

  v3(i,v)
  {
    if(i == 0 && v == 3)
    {
      this.q1.val +=0;
      console.log(i,v)
    }
    else if(i == 1 && v == 3)
    {
      this.q1.val +=1;
      console.log(i,v)
    }
    else if(i == 2 && v == 3)
    {
      this.q1.val +=0;
      console.log(i,v)
    }
    else if(i == 3 && v == 3)
    {
      this.q1.val +=0;
      console.log(i,v)
    }
    else if(i == 4 && v == 3)
    {
      this.q1.val +=1;
      console.log(i,v)
    }
  
  }



totall()
{

 this.val1 =this.q1.val/5*100;
 this.message = "You got :" ;
this.message2 = "%";
this.navCtrl.push(TotalPage); 
}



  }


  



