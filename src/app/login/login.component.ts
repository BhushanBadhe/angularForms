import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  val = {
    email : 'bhushan.pcccs@gmail.com',
    password: ''
  };



  constructor() {


  }

  login(loginForm:NgForm){
    console.log(loginForm.value);
    console.log(loginForm.valid);
    console.log(this.val.email);
    
    
    
  }


  ngOnInit() {

  }

}
