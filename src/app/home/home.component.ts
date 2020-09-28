import { Component, OnInit } from '@angular/core';
// import { environment } from 'environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: 'app/home/home.component.html',
  styleUrls: ['app/home/home.component.css']
})
export class HomeComponent implements OnInit {
  
  name = 'angular-starter';
  angular = 'Angular 10.0.14';
  bootstrap = 'Bootstrap 4.5.2';

  constructor() { }

  ngOnInit() {
  }

}