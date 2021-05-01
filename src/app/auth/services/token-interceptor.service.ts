import { Injectable } from '@angular/core';
import { AuthService } from "../services/auth.service";
import {HttpInterceptor} from '@angular/common/http';
import { BoundText } from '@angular/compiler/src/render3/r3_ast';
import { tokenize } from '@angular/compiler/src/ml_parser/lexer';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{
  
  
  constructor(private authService: AuthService) { }


  intercept(req:any, next:any){
    const tokenizeReq = req.clone({
      setHeaders:{
        Authorization: `Bearer ${this.authService.getToken()}`
      }
    })
    return next.handle(tokenizeReq);}
  }
