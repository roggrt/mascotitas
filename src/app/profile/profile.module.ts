import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { NavbarModule } from '../shared/navbar/navbar.module';
import { FooterComponent } from '../shared/footer/footer.component';
import { FooterModule } from '../shared/footer/footer.module';


@NgModule({
  declarations: [
    ProfileComponent,
    
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    NavbarModule,
    FooterModule
  ]
})
export class ProfileModule { }
