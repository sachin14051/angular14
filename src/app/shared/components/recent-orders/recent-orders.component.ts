import { Component, OnInit } from '@angular/core';
import { FinanceService } from '../../service/finance.service';

@Component({
  selector: 'app-recent-orders',
  templateUrl: './recent-orders.component.html',
  styleUrls: ['./recent-orders.component.scss']
})
export class RecentOrdersComponent implements OnInit {
 
   orderedArray !: Array<any>


  constructor(private _orderedService:FinanceService) { }

  ngOnInit(): void {
    this._orderedService.getUsersData()
    .subscribe((res)=> this.orderedArray= res.recent_orders)
   
  }

  onOrderedClick(id:string){
    console.log(id)
    this._orderedService.getSingleUser(id).subscribe((res)=>console.log(res))
  }

  
    
  

}
