import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adding-dish',
  templateUrl: './adding-dish.component.html',
  styleUrls: ['./adding-dish.component.css']
})
export class AddingDishComponent implements OnInit {

	dish = {
		name: '',
		description: '',
		price: 0,
		image: '',
		dateFrom: '',
		dateTo: ''
	}

  constructor() { }

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
	this.dish = {
		name: '',
		description: '',
		price: 0,
		image: '',
		dateFrom: '',
		dateTo: ''
	};
  }
}
