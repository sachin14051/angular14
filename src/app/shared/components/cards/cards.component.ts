import { Component, OnInit } from '@angular/core';
import { FinanceService } from '../../service/finance.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
 cardsArray :any
  constructor(private _cardsService:FinanceService) { }

  ngOnInit(): void {
    this._cardsService.getCardData()
    .subscribe((res)=>  this.cardsArray = res)
  }
  onClick(eve:any){
    eve.target.style.backgroundColor ='blue'
  }

}
