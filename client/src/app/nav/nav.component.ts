import { Component, OnInit } from '@angular/core';
import { error } from 'protractor';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  currentUser$!: Observable<User>;
  constructor(private accountService: AccountService) {
  }

  ngOnInit(): void {
    this.currentUser$ = this.accountService.currentUser$;
  }
  login(): void{
    this.accountService.login(this.model).subscribe((response: any ) => {
      console.log(response);
    }, (err: any) => {console.log(err); });
  }
  logout(): void{
    this.accountService.logout();
  }


}
