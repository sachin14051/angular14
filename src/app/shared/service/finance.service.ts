import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, filter, flatMap, from, map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FinanceService {
   baseUrl : string = `${environment.apiUrl}`;

  constructor(private _http:HttpClient ) { }

  getUsersData(){
    return this._http.get<any>(this.baseUrl)
  }

  getSingleUser(id:string){
    // return this._http.get<any>(this.baseUrl).pipe(
    //   map(res => {
    //     for (const key in res) {
    //       if(key === 'recent_orders'){
    //         res[key].forEach((element:any) => {
    //           if(element.id ===id){
    //             console.log(element)
    //             return element;
    //           }
    //         });
    //       }
    //     }
    //   })
    // )
    return this._http.get<any>(this.baseUrl).pipe(
      map(res => {
        for (const key in res) {
          if(key === 'recent_orders'){
            return res[key]
          }
        }
      }),
      
    )
  }

  getCardData():Observable<any>{
  
    return this._http.get<any>(this.baseUrl).pipe(
     map((res)=>{
      for (const key in res) { 
        return res[key]
      }
     })
      
    )
  }
}
