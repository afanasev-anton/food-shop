import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BtnPpService {
	pp;

  constructor() {
  	this.pp = '';
  }
}
