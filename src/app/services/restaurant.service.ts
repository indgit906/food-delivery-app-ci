import { Injectable } from '@angular/core';
import { Restaurant } from '../models/restaurant';
import { FoodItem } from '../models/food-item';

@Injectable({ providedIn: 'root' })
export class RestaurantService {

  restaurants: Restaurant[] = [
    { id: 1, name: 'Pizza House', image: 'assets/images/pizzahouse.jpg', rating: 4.5 },
    { id: 2, name: 'Burger Town', image: 'assets/images/burgertown.jpg', rating: 4.2 },
    { id: 3, name: 'Healthy Bowl', image: 'assets/images/healthybowl.jpg', rating: 4.8 },
    { id: 4, name: 'Biryani House', image: 'assets/images/biryanihouse.jpg', rating: 4.8 }
  ];

  foods: FoodItem[] = [
    { id: 101, restaurantId: 1, name: 'Margherita Pizza', price: 299, description: 'Classic cheese', image: 'assets/images/margherita.jpg' },
    { id: 102, restaurantId: 1, name: 'Veggie Pizza', price: 349, description: 'Loaded with veggies', image: 'assets/images/veggie.jpg' },

    { id: 201, restaurantId: 2, name: 'Cheese Burger', price: 199, description: 'Cheesy delight', image: 'assets/images/cheeseburger.jpg' },
    { id: 202, restaurantId: 2, name: 'Chicken Burger', price: 229, description: 'Crispy chicken', image: 'assets/images/chickenburger.jpg' },

    { id: 301, restaurantId: 3, name: 'Healthy Salad', price: 249, description: 'Fresh greens', image: 'assets/images/salad.jpg' },
    { id: 302, restaurantId: 3, name: 'Fruit Bowl', price: 199, description: 'Seasonal fruits', image: 'assets/images/fruitbowl.jpg' },

    { id: 401, restaurantId: 4, name: 'Mutton Biryani', price: 299, description: 'With traditional spice', image: 'assets/images/margherita.jpg' },
    { id: 402, restaurantId: 4, name: 'Mandi Rice', price: 349, description: 'Combined with mutton', image: 'assets/images/veggie.jpg' },

  ];

  getRestaurants() {
    return this.restaurants;
  }

  getFoodsByRestaurant(id: number) {
    return this.foods.filter(f => f.restaurantId === id);
  }
}

