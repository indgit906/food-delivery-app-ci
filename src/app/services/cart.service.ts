import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';
import { FoodItem } from '../models/food-item';

@Injectable({ providedIn: 'root' })
export class CartService {

  cart: CartItem[] = [];

  add(food: FoodItem) {
    console.log(this.cart);
console.log(food.id);
    const existing = this.cart.find(c => c.food.id === food.id);
    
    if (existing) existing.qty++;
    else this.cart.push({ food, qty: 1 });
  }

  updateQty(id: number, qty: number) {
    const item = this.cart.find(c => c.food.id === id);
    if (item) item.qty = qty;
  }

  remove(id: number) {
    this.cart = this.cart.filter(c => c.food.id !== id);
  }

  clear() {
    this.cart = [];
  }

  total() {
    return this.cart.reduce((sum, c) => sum + c.qty * c.food.price, 0);
  }
}

