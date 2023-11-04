import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { CardsComponent } from './shared/components/cards/cards.component';
import { RegistrationsComponent } from './shared/components/registrations/registrations.component';
import { StatisticComponent } from './shared/components/statistic/statistic.component';
import { OverviewComponent } from './shared/components/overview/overview.component';

import{HttpClientModule} from '@angular/common/http';
import { UsersComponent } from './shared/components/users/users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from './shared/material/material.module';
import { RecentOrdersComponent } from './shared/components/recent-orders/recent-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    CardsComponent,
    RegistrationsComponent,
    StatisticComponent,
    OverviewComponent,
    UsersComponent,
    RecentOrdersComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
