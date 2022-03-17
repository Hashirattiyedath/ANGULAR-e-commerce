import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  totalItem: number = 0;
  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((resp)=> {
      this.totalItem = resp.length;
    })
  }



}
