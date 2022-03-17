import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  products: any;
  grandTotal: number = 0;

  constructor(
    private cartService: CartService,
  ) { }



  ngOnInit(): void {
    this.cartService.getProducts().subscribe((resp)=> {
      this.products = resp;
      this.grandTotal = this.cartService.getTotalPrice()
    })
  }

  removeItem(index: any) {
    this.cartService.removeCartItem(index)
  }

  emptyCart() {
    this.cartService.removeAllCarts();
  }

}
