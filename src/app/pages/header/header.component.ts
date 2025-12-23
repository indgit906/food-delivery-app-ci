import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  styleUrls: ['./header.component.scss'],
  template: `
    
    <nav class="navbar navbar-dark bg-dark px-3">
      <span class="navbar-brand">
        <a class="navbar-brand" routerLink="/">Food Delivery</a>
      </span>

      <a routerLink="/cart" class="cart-wrapper">
        <img src="assets/images/OIP.png" class="cart-img" />
        <span class="cart-badge">
          {{ cartCount }}
        </span>
      </a>

    </nav>
  `
})
export class HeaderComponent {
  constructor(public cart: CartService) {}

  get cartCount(): number {
    return this.cart.cart.reduce((sum, c) => sum + c.qty, 0);
  }
}
