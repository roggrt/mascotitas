import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {NgbConfig} from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  active=1;
  fontStyleControl = new FormControl();
  fontStyle?: string;
  constructor() { }

  ngOnInit(): void {
  }

}
