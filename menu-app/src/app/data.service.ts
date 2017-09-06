import { Injectable } from '@angular/core';

import { Dish } from './dish';

@Injectable()
export class DataService {
	menu: Dish[];

	constructor() {
		var m = localStorage.getItem("DISH_MENU");
		if (m != null) {
			this.menu = JSON.parse(m);
		}
	}

	deleteDish(id: number): void {
		// Find index in array
		let index = this.menu.findIndex(d => d.id === id);
		// Remove element from array
		this.menu.splice(index, 1);

		this.saveChanges();
	}

	addDish(dish: Dish): void {
		// Add new dish to menu
		this.menu.push(dish);

		// Save new menu to Local Storage
		this.saveChanges();
	}

	getDish(id: number): Dish {
		//find dish with specified id
		for (var i in this.menu) {
			if (this.menu[i].id == id) {
				return this.menu[i];
			}
		}

		return null;
	}

	editDish(dish: Dish): void {
		// Saving current dish to menu
		for (var i in this.menu) {
			if (this.menu[i].id == dish.id) {
				this.menu[i] = dish;
			}
		}
		// Save new menu to Local Storage
		this.saveChanges();
	}

	saveChanges(): void {
		// Save new menu to Local Storage
		localStorage.setItem("DISH_MENU", JSON.stringify(this.menu));
	}
}