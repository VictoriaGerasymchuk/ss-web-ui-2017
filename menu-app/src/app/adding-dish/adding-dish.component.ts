import { Component, OnInit } from '@angular/core';
import { Dish } from '../Dish';

@Component({
  selector: 'app-adding-dish',
  templateUrl: './adding-dish.component.html',
  styleUrls: ['./adding-dish.component.css']
})
export class AddingDishComponent implements OnInit {

	dish: Dish;

	minDate: string;
	maxDate: string;

	constructor() {
		this.dish = new Dish();

		this.minDate = this.dish.dateFrom;
	}

  ngOnInit() {
  }

  addDish() {
	var menu = [];
	// Get menu from Local Storage
	var m = localStorage.getItem("DISH_MENU");

	// Menu should be not null. If it doesn't than crate array else parse json string
	if (m != null) {
		menu = JSON.parse(m);
	}

	// Add new dish to menu
	menu.push(this.dish);

	// Save new menu to Local Storage
	localStorage.setItem("DISH_MENU", JSON.stringify(menu));

	alert("Saved!");

	// Clear data on form
	this.dish = new Dish();
  }
}
