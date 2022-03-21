import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productList: any;
  searchKey: any;

  constructor(
    public _api: ApiService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this._api.getProducts().subscribe((resp) => {
      this.productList = resp;

      this.productList.forEach((a: any) => {
        Object.assign(a, {quantity: 1, total: a.price})
      });
    }) 

    this.cartService.search.subscribe((resp: any) => {
      this.searchKey = resp;
    })
  }

  addToCart(item: any) {
    this.cartService.addToCart(item);
  }
  
}
