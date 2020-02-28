import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
import { products } from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
	itemsInCart;
	checkoutForm;

  constructor(private crtSrv: CartService, private formBldr:FormBuilder) {
  	this.checkoutForm = this.formBldr.group({
  		name:'',
  		address:'',
  		email:'',
  		agryCheck:''
  	});
  }

  ngOnInit(): void {
  	this.itemsInCart = this.crtSrv.getItems();
  }

  onSubmit(cstmData){
  	this.itemsInCart = this.crtSrv.clearCart();
  	this.checkoutForm.reset();
  	console.warn('Your order has been submitted', cstmData);
  }

  getSum(){
    var sum = 0;
    for (var i = 0; i < this.itemsInCart.length; i++) {
      sum +=(Number(this.itemsInCart[i].price))*this.itemsInCart[i].amount;
    }
    return sum.toFixed(2);
  }

  getItemsInCart(ind){
    return this.itemsInCart[ind];
  }

  plusAmount(obj){obj.amount++;}

  minusAmount(obj){
    if (obj.amount == 1) {
      var i = this.itemsInCart.indexOf(obj);
      var arrStart = this.itemsInCart.slice(0,i);
      console.log(arrStart);
      var arrEnd = this.itemsInCart.slice(i+1,this.itemsInCart.length);
      console.log(arrEnd);
      this.itemsInCart = arrStart.concat(arrEnd);
    } else {obj.amount--;}
  }

}
