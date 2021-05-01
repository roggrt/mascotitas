import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registerForm= new FormGroup({
  name: new FormControl(''),
  email: new FormControl(''),
  password: new FormControl(''),
  
})

  user = {
    name:'',
    email:'',
    password:'',
  }
  constructor(private authService: AuthService,
    private router: Router)
   { }

  ngOnInit(): void {
  }
  onRegister(){
    console.log('Form', this.registerForm.value)
  }

  signUp(){
    this.authService.signUp(this.user)
    .subscribe(
      res=>{
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/home']);
      },
      err=>{
        console.log(err)
      }
    )
  }

}
