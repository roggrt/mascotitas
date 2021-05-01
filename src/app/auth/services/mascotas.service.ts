import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Mascota } from './mascota'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MascotasService {
  selectedMascota: Mascota;
  mascotas: Mascota[];

  readonly URL = 'http://localhost:3000/api'



  constructor( private http: HttpClient) { 
    this.selectedMascota = new Mascota();
  }

    postMascota(mascota: Mascota){
      return this.http.post(this.URL + '/mascotactrl', mascota);
    }

  getMascotas(){
   return this.http.get<Mascota[]>(this.URL + '/mascotactrl')
  // return this.http.get(this.URL + '/mascotas').pipe(map((response: HttpResponse)=>response.json()));
  }

  putMascota(mascota: Mascota){
    return this.http.put(this.URL + '/mascotactrl'+`/${mascota._id}`, mascota);
  }

  deleteMascota(_id: string){
    return this.http.delete(this.URL+'/mascotactrl'+`/${_id}`)
  }


  getPrivateMascotas(){
    return this.http.get<any>(this.URL + '/private')
   }

}
