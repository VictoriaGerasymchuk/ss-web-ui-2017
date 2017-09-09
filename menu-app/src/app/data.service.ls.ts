import { Injectable } from '@angular/core';

import { Dish } from './dish';

@Injectable()
export class DataServiceLS {
	menu: Dish[];

	constructor() {
		var m = localStorage.getItem("DISH_MENU");
		if (m != null) {
			this.menu = JSON.parse(m);
		}
	}

	deleteDish(id: number): Promise<void> {
		return new Promise((resolve, reject) => {
			// Find index in array
			let index = this.menu.findIndex(d => d.id === id);
			// Remove element from array
			this.menu.splice(index, 1);
			resolve();
		})
			.then(() => this.saveChanges())
			.catch(this.handleError);
	}

	addDish(dish: Dish): Promise<void> {
		return new Promise((resolve, reject) => {
			// Add new dish to menu
			this.menu.push(dish);
			resolve();
		})
			.then(() => this.saveChanges())
			.catch(this.handleError);
	}

	getDish(id: number): Promise<Dish> {
		return new Promise((resolve, reject) => {
			for (var i in this.menu) {
				if (this.menu[i].id == id) {
					resolve(this.menu[i]);
				}
			}

			reject("Item was not found.");
		}).catch(this.handleError);
	}

	editDish(dish: Dish): Promise<void> {
		return new Promise((resolve, reject) => {
			// Saving current dish to menu
			for (var i in this.menu) {
				if (this.menu[i].id == dish.id) {
					this.menu[i] = dish;
					resolve();
				}
			}
		})
			.then(() => this.saveChanges())
			.catch(this.handleError);
	}

	saveChanges(): void {
		// Save new menu to Local Storage
		localStorage.setItem("DISH_MENU", JSON.stringify(this.menu));
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}
}