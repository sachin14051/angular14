import { Component, OnInit } from '@angular/core';
import { FinanceService } from '../../service/finance.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  
  usersArray !: Array<any>
  constructor(private _financeService:FinanceService) { }

  ngOnInit(): void {
    this._financeService.getUsersData()
    
    .subscribe((res)=>
    this.usersArray =res.new_users)

  }

}
