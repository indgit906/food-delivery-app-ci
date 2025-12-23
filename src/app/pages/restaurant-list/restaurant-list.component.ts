import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../services/restaurant.service';
import { Restaurant } from '../../models/restaurant';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-restaurant-list',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss']
})
export class RestaurantListComponent implements OnInit {
  restaurants: Restaurant[] = [];
  constructor(private service: RestaurantService) {}
  ngOnInit(): void { this.restaurants = this.service.getRestaurants(); }
}
