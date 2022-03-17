import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItemList: any = [];
  productList = new BehaviorSubject<any>([]);

  constructor() { }

  getProducts() {
    return this.productList.asObservable();
  }

  setProducts(product: any) {
    this.cartItemList.push({...product});
    this.productList.next(product)
  }

  addToCart(product: any) {
    this.cartItemList.push({...product})
    this.productList.next(this.cartItemList);
    
    this.getTotalPrice();
  }

  getTotalPrice(): number {
    let totalAmount = 0;

    this.cartItemList.map((item: any)=> {
      totalAmount += item.price;
    })

    return totalAmount;
  }

  removeCartItem(index: any) {
    console.log(index);
    this.cartItemList.splice(index, 1);
    this.productList.next(this.cartItemList)
  }

  removeAllCarts() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList)
  }
}
