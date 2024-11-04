import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Card } from './card/card.component';
import { Header } from './header/header.component';
import { Menu } from './header/menu/menu.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Home } from './home/home.component';
import { Serivce } from './service/service.component';
import { Payment } from './payment/payment.component';
import { EmployeeModel } from './model/Employee';
import { FirstForm } from './firstform/firstform.component';

@NgModule({
  declarations: [
    AppComponent,
    Card,
    Header,
    Menu,
    Home,
    Serivce,
    Payment,
    EmployeeModel,
    FirstForm,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterLink, RouterLinkActive],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
