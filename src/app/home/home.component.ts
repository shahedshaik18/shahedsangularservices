import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { User } from '../user';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  document:any;
  name:undefined;

  constructor(@Inject(DOCUMENT) document:Document,private testser:TestService) { 
    this.document=document
  }
  

  ngOnInit(): void {
    alert(this.testser.gettodaydate());
  
  }
  
  a='hello' 
  status=false
  c='1234'


printdata(event:any
  ){
alert(this.name )
alert(this.document.getElementmyId('name').value='');
}

mobiles=['vivo','iphone','samsung']

user:User[]=[];
name1='shahed';
todaydate=new Date();

getdata(){
  alert(this.testser.getmyname());
}


getalluserinformation(){
  this.testser.getallusers().subscribe(user=>{
    this.user=user;
  });

}




}
