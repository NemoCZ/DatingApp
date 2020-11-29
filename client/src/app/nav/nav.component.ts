import { Component, OnInit } from '@angular/core';
import { error } from 'protractor';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  loggedIn: boolean;
  constructor(private accountService: AccountService) {
    this.loggedIn = false;
  }

  ngOnInit(): void {
  }
  login(): void{
    this.accountService.login(this.model).subscribe((response: any ) => {
      console.log(response);
      this.loggedIn = true;
    }, (err: any) => {console.log(err); });
  }
  logout(): void{
    this.loggedIn = false;
  }

}
