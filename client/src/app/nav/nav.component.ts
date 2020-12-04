import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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

  constructor(public accountService: AccountService, private router: Router,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
  }
  login(): void{
    this.accountService.login(this.model).subscribe((response: any ) => {
      this.router.navigateByUrl('/members');
    }, (err: any) => {
      console.log(err);
      this.toastr.error(err.error);
     });
  }
  logout(): void{
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }


}
