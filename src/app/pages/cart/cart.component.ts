import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  constructor(public cart: CartService, private router: Router) {
    console.log(this.cart);
  }
  checkout() {
    //alert('Total: ' + this.cart.total()); this.cart.clear();
    this.router.navigate(['/order-confirm']);
  }
}
