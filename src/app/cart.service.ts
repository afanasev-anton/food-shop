import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
	cartItems = [];

  constructor() { }

  addToCart(prdct){
  	if (!this.cartItems.includes(prdct)) {
      this.cartItems.push(prdct);
      console.log(this.cartItems);
    } else {prdct.amount++;}
    
  }

  getItems(){
  	return this.cartItems;
  }

  clearCart(){ this.cartItems = []; console.log('cart clear');}


}
