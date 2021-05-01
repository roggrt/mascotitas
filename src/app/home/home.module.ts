import {  CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NavbarModule } from '../shared/navbar/navbar.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { FooterModule } from '../shared/footer/footer.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppModule } from '../app.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from "@angular/material/button-toggle";

const material =[
MatTabsModule,
MatButtonToggleModule
]
@NgModule({
  declarations: [
    HomeComponent   
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NavbarModule,
    FooterModule,
    material,   
    
  ],
  exports: [material],
  bootstrap: [HomeComponent],
  
})
export class HomeModule { }
