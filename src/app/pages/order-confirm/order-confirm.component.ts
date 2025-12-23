import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-order-confirm',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './order-confirm.component.html',
  styleUrls: ['./order-confirm.component.scss']
})
export class OrderConfirmComponent {

  address = {
    name: '',
    phone: '',
    street: '',
    city: '',
    pin: ''
  };

  constructor(public cart: CartService, private router: Router) {}

  proceedToPayment() {
    if (!this.address.name || !this.address.phone || !this.address.street) {
      alert("Please fill all required fields.");
      return;
    }

    this.router.navigate(['/payment'], {
      state: { address: this.address }
    });
  }

  get subTotal(): number {
  return this.cart.total(); // existing subtotal
}

get taxAmount(): number {
  return Math.round(this.subTotal * 0.05); // 5% tax
}

get deliveryCharge(): number {
  return this.subTotal > 0 ? 40 : 0;
}

get grandTotal(): number {
  return this.subTotal + this.taxAmount + this.deliveryCharge;
}
}
