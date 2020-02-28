import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	donateSum:number = 0;

	cars = [
	{name:"Toyota Supra",
	power:"120 hp",
	transmition: "automatic",
	price: "40",
	pic: "../../assets/img/supra.jpg"},

	{name:"Honda Civic",
	power:"180 hp",
	transmition: "automatic",
	price: "55",
	pic: "../../assets/img/civic.jpg"},

	{name:"Toyota Land Cruiser",
	power:"160 hp",
	transmition: "manual",
	price: "129",
	pic: "../../assets/img/land.jpeg"},

	{name:"Subaru Impreza",
	power:"180 hp",
	transmition: "automatic",
	price: "48",
	pic: "../../assets/img/impreza.jpg"}
	];

	addCar = new FormGroup({
		carName: new FormControl('',Validators.required),
		carTrsm: new FormControl('',Validators.required),
		carPower:new FormControl('',Validators.required)
	});

  constructor() { }

  ngOnInit(): void {
  }

  countDonate(){
  	this.donateSum+=10;
  }
  
  addCarInfo(){
  	if(this.addCar.valid){
	  	var x = this.addCar.value;
	  	this.cars.push({
	  		name: x.carName,
			power: x.carPower,
			transmition: x.carTrsm,
			price: "50",
			pic: "../../assets/img/default.jpg"
	  	});
  	}
  	this.addCar.reset();

  }

}
