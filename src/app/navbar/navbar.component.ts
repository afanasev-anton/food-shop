import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
	companyName:string;
	donateSum:number = 0;

  constructor() {
  	this.companyName = "HappyShop";
  }
  countDonate(){
  	this.donateSum+=10;
  }

  ngOnInit(): void {
  }

}
