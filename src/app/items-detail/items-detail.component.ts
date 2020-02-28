import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

import { products } from '../products';

@Component({
  selector: 'items-detail',
  templateUrl: './items-detail.component.html',
  styleUrls: ['./items-detail.component.css']
})
export class ItemsDetailComponent implements OnInit {
	item;

  constructor(private route: ActivatedRoute, private crtSrv: CartService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.item = products[+params.get('itemId')];
    });
  }
  
  addToCart(item) {
    this.crtSrv.addToCart(item);
  }

}
