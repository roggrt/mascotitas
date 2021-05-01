import { AngularFireAuth } from '@angular/fire/auth';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import   firebase  from 'firebase/app';
import { from } from 'rxjs';


@Injectable({
  providedIn:'root'
})
export class AuthService {
private URL = 'http://localhost:3000/api'

  constructor(private http: HttpClient, private router: Router) { 
   /* public afAuth: AngularFireAuth
    afAuth.authState.subscribe(user =>{ user =user});*/
   
  }


  signUp(user: any){
    return this.http.post<any>(this.URL + '/signup', user);
  }
  signIn(user: any){
    return this.http.post<any>(this.URL + '/signin', user);
  }

  loggedIn(): Boolean{
   return !!localStorage.getItem('token');
  
  }
  
  getToken(){
    return localStorage.getItem('token');
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

/* intento de hacer algo con firebase xD
  async login(email:string, password: string){
const result = await this.afAuth.signInWithEmailAndPassword(email, password);
return result;
  }
 async register(name: string, email:string, password:string){
const result = await this.afAuth.createUserWithEmailAndPassword(email,password).then((user: auth.UserCredential)=>{
  user.user.updateProfile({
    displayName: name
  });
})
return result;

  }
 async logout(){
await this.afAuth.signOut();

  }
  getCurrentUser(){

  }*/
}
