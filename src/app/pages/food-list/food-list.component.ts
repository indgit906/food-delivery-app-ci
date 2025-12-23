import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { RestaurantService } from '../../services/restaurant.service';
import { CartService } from '../../services/cart.service';
import { FoodItem } from '../../models/food-item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-food-list',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {
  foods: FoodItem[] = [];
  restaurantId!: number;

  constructor(
    private route: ActivatedRoute,
    private rest: RestaurantService,
    private cart: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.restaurantId = Number(this.route.snapshot.paramMap.get('id'));
    this.foods = this.rest.getFoodsByRestaurant(this.restaurantId);
  }

  addToCart(food: FoodItem) {
    this.cart.add(food);
    alert(food.name + ' added to cart');
  }
}
