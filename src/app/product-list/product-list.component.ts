import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

import { products } from '../products';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
	items = products;
	listItem;

  constructor(private route: ActivatedRoute , private crtSrv: CartService) {
    
  }

  ngOnInit(): void {
  	this.route.paramMap.subscribe(params => {
  		this.listItem = products[+params.get('itemId')];
  	});
  }

  addToCart(item){
  	this.crtSrv.addToCart(item);
    document.getElementById(item.iD).style.display = "block";
    window.setTimeout(function(){
      document.getElementById(item.iD).style.display = "none";
    },1200);
  }
  notInCart(obj){
  	window.alert(`Sorry, ${obj.name} not in store! Come later...`);
  }

}