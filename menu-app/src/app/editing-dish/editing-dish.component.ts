import { Component, OnInit } from '@angular/core';
import { Dish } from '../Dish';
import { ActivatedRoute} from '@angular/router';


@Component({
    selector: 'app-editing-dish',
    templateUrl: './editing-dish.component.html',
    styleUrls: ['./editing-dish.component.css']
})
export class EditingDishComponent implements OnInit {

    dish: Dish;

	id: number;

	// getting activateRoute for work with url
	constructor(private activateRoute: ActivatedRoute) {
		// getting id from url
		this.id = activateRoute.snapshot.params['id'];

		this.dish = new Dish();

		if (localStorage.getItem("DISH_MENU") != null) {
			var menuArray = JSON.parse(localStorage.getItem("DISH_MENU"));
			//find dish with specified id
			for (var i in menuArray) {
				if (menuArray[i].id == this.id) {
					this.dish = menuArray[i];
					break;
				}
			}
		}
	}

    ngOnInit() {
    }

    saveChanges() {
        var menu = [];
        // Get menu from Local Storage
        var m = localStorage.getItem("DISH_MENU");

        // Menu should be not null. If it doesn't than crate array else parse json string
        if (m != null) {
            menu = JSON.parse(m);
        }

        // Saving current dish to menu
		for (var i in menu) {
			if (menu[i].id == this.id) {
				menu[i] = this.dish;
			}
		}

        // Save changed menu to Local Storage
        localStorage.setItem("DISH_MENU", JSON.stringify(menu));

        alert("Saved!");

        window.location.href = '/';
    }
}


