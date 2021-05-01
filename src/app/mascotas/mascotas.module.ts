import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MascotasRoutingModule } from './mascotas-routing.module';
import { NavbarModule } from '../shared/navbar/navbar.module';
import { FooterModule } from '../shared/footer/footer.module';
import { MascotasComponent } from './mascotas.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { FormsModule } from '@angular/forms'
const material =[
MatTabsModule,
MatButtonToggleModule
]



@NgModule({
  declarations: [MascotasComponent],
  imports: [
    CommonModule,
    MascotasRoutingModule,
    NavbarModule,
    FooterModule, material, FormsModule
  ],
  exports:[material]
})
export class MascotasModule { }
