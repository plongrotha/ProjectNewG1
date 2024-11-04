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
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Home } from './home/home.component';
import { Service } from './service/service.component';
import { Payment } from './payment/payment.component';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Admin } from './admin/admin.component';
import { Link } from './link/link.component';
import { Temclose } from './Temclose/temclose.component';
import { Setup } from './setupcampany/setup.component';

@NgModule({
  declarations: [
    AppComponent,
    Card,
    Header,
    Menu,
    Home,
    Service,
    Payment,
    Admin,
    Link,
    Temclose,
    Setup,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    ReactiveFormsModule,
    CommonModule,
    RouterLink,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
