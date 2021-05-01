import { Component, Input, OnInit } from '@angular/core';
import {AuthService} from '../../auth/services/auth.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() name: string;
  constructor(public authService: AuthService) {
    
   }

  ngOnInit(): void {
  }

}
