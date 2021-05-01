import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
    private router: Router) { }
  loginForm= new FormGroup({
    email: new FormControl(''),
    password:new FormControl(''),
  })
  ngOnInit(): void {
  }
  signIn(){
   //console.log('Inicio de sesion ',this.loginForm.value)
 this.authService.signIn(this.user)
 .subscribe(
   res=>{
    console.log(res);
    localStorage.setItem('token', res.token);
        this.router.navigate(['/home']);
    
   },
   err=>{
    console.log(err);
   }
 )
 
  }

  user = {   
    email:'',
    password:'',
  }

}
