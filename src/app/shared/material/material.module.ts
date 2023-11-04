import { NgModule } from "@angular/core";
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';








export const materials  : Array<any>= [MatButtonModule,MatTableModule]

@NgModule({
   imports:[...materials],
   exports:[...materials]
})
export class MaterialModule{

}