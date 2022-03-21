import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList: any = [];
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>(""); 

  constructor() { }

  getProducts() {
    return this.productList;
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
