import { Component, OnInit } from '@angular/core';
import { MascotasService } from '../../app/auth/services/mascotas.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [MascotasService]
})
export class ProfileComponent implements OnInit {

  constructor(public mascotasService: MascotasService) { }

  ngOnInit(): void {
    this.getMascotas();
  }
  getMascotas(){
  this.mascotasService.getMascotas().subscribe((res) => {
    this.mascotasService.mascotas = res;
  });

}}
