import { Component, OnInit } from '@angular/core';
import { MascotasService } from '../auth/services/mascotas.service';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Mascota } from '../auth/services/mascota'

@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.css'],
  providers: [MascotasService],
})
export class MascotasComponent implements OnInit {
/*
  mascotaForm=new FormGroup({
  name: new FormControl(''),
  url: new FormControl(''),
  tipo: new FormControl(''),
  sector: new FormControl(''),
  contacto: new FormControl(''),
  descripcion: new FormControl(''),

})

  mascotas:any = [];

  mascota = {
    name:'',
    url:'',
    tipo:'',
    sector:'',
    contacto:'',
    descripcion:''
  }
*/
  constructor(public mascotasService: MascotasService) { }

  ngOnInit(): void {
    this.getMascotas();
  }

  getMascotas(){
  /*  this.mascotasService.getMascotas()
    .subscribe(
      res=>{
        //console.log(res),
        this.mascotas = res;
      },err=>{
        console.log(err);
        
      }
    )*/
    this.mascotasService.getMascotas().subscribe((res) => {
      this.mascotasService.mascotas = res;
    });

  }

  editMascota(mascota: Mascota) {
    this.mascotasService.selectedMascota = mascota;
  }


  addMascota(form: NgForm){
    if(form.value._id){
      this.mascotasService.putMascota(form.value).subscribe((res)=>{
        this.resetForm(form);
        this.getMascotas();
      });
    } else {
      this.mascotasService.postMascota(form.value).subscribe((res) => {
        this.getMascotas();
        this.resetForm(form);
    });

  }}

  deleteMascota(_id: string, form: NgForm) {
    if (confirm("Confirma la eliminacion")) {
      this.mascotasService.deleteMascota(_id).subscribe((res) => {
        this.getMascotas();
        this.resetForm(form);
      });
    }
  }



  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.mascotasService.selectedMascota = new Mascota();
    }
  }

}
