import { Routes } from '@angular/router';
import { RestaurantListComponent } from './pages/restaurant-list/restaurant-list.component';
import { FoodListComponent } from './pages/food-list/food-list.component';
import { CartComponent } from './pages/cart/cart.component';
import { OrderConfirmComponent } from './pages/order-confirm/order-confirm.component';
import { PaymentComponent } from './pages/payment/payment.component';

export const routes: Routes = [
  { path: '', component: RestaurantListComponent },
  { path: 'restaurant-list', component: RestaurantListComponent },
  { path: 'foods/:id', component: FoodListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'order-confirm', component: OrderConfirmComponent},
  { path: 'payment', component: PaymentComponent },
];
