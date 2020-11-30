import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { error } from 'protractor';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Dating app';
  users: any;
  constructor(private http: HttpClient, private accountService: AccountService){}
  setCurrentUser(): void{
    const user: User = JSON.parse(localStorage.getItem('user')as any);
    this.accountService.setCurrentUser(user);
  }
  getUsers(): void{
    this.http.get('https://localhost:5001/api/users').subscribe(response => {
      this.users = response;
    }, err => {
      console.log(err);
    });
  }
  ngOnInit(): void {
    this.getUsers();
    this.setCurrentUser();
  }
}

