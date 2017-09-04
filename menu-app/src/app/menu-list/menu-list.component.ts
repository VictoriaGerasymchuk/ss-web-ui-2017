import { Component, OnInit } from '@angular/core';
import { Dish } from '../Dish';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {

	menu: Dish[];

	constructor() {
		var m = localStorage.getItem("DISH_MENU");
		if (m != null) {
			this.menu = JSON.parse(m);
		}
	}

	ngOnInit() {
	}

	deleteDish(id: number): void {
		// Find index in array
		let index = this.menu.findIndex(d => d.id === id);
		// Remove element from array
		this.menu.splice(index, 1);

		// Save new menu to Local Storage
		localStorage.setItem("DISH_MENU", JSON.stringify(this.menu));

		alert("Deleted!");
	}

}
