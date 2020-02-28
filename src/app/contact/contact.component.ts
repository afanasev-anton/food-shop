import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
	info = new FormGroup({
		fullName: new FormControl('',Validators.required),
		drLicense: new FormControl('',Validators.required),
		email:new FormControl('',Validators.required),
    meinung:new FormControl('',Validators.required),
		agryCheck: new FormControl('',Validators.required)
	});

  textName :string;

  constructor() {}

  ngOnInit(): void {
  }

  onSubmit(){
  	if(this.info.valid){
  		var a = this.info.value;
  		this.textName = "Thanks " + a.fullName;
  	}
    this.info.reset();
  }

}
