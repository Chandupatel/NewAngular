import { Component, OnInit } from '@angular/core';
import { DatabsaeService } from '../databsae.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private data:DatabsaeService,private rout:Router) { }
  record;
  ngOnInit() {
    
   this.record = this.data.Mydata;
  }
  
  setitme(){
    var num = '8888888888';
    localStorage.setItem('number',num);
    this.rout.navigate(['/dashboard']);
  }

 
}
