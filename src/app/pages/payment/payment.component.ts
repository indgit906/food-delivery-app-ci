import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { PaymentService } from '../../services/payment.service';

declare global {
  interface Window {
    Razorpay: any;
  }
}

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent {
  address: any = history.state.address;
  showQrPopup = false;
  showCodPopup = false;
  amt = 0;

  constructor(
    private paymentService: PaymentService,
    private cart: CartService, 
    private router: Router
  ) {}

  pay(method: string) {
   // alert('Payment Successful via ' + method + '!');
    const amount = this.cart.total(); // ₹ amount
    if (method==='SCAN-UPI') {
      alert('Payment Successful via ' + method + '!');
      this.amt = amount;
      this.showQrPopup = true;
      return;
    }
    if (method==='COD') {
      alert('Payment Successful via ' + method + '!');
      this.showCodPopup = true;
      return;
    }

    else {
      this.paymentService.createOrder(amount).subscribe(order => {

        const options = {
          key: 'rzp_test_RrqyU3RMIzdc97',
          amount: order.amount,
          currency: order.currency,
          order_id: order.id,
          name: 'Food Delivery App',
          handler: (response: any) => {

            this.paymentService.verifyPayment(
              response.razorpay_order_id,
              response.razorpay_payment_id,
              response.razorpay_signature
            )
          }
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
      });
    }
  }

  closePopup() {
    this.showQrPopup = false;
  }

  openCodPopup() {
  this.amt = this.cart.total();
  this.showCodPopup = true;
}

closeCodPopup() {
  this.showCodPopup = false;
}

confirmCod() {
  alert('Order placed successfully with Cash on Delivery!');
  this.cart.clear();
  this.showCodPopup = false;
  this.router.navigate(['/restaurant-list']);
}
}
