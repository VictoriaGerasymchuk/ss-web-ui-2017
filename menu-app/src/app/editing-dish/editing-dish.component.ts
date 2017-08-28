import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-editing-dish',
    templateUrl: './editing-dish.component.html',
    styleUrls: ['./editing-dish.component.css']
})
export class EditingDishComponent implements OnInit {

    dish = {
        name: '',
        description: '',
        price: 0,
        image: '',
        dateFrom: '',
        dateTo: ''
    }
    constructor() {
		if (localStorage.getItem("DISH_MENU") != null) {
			this.dish = JSON.parse(localStorage.getItem("DISH_MENU"))[0];
		}
	}

    ngOnInit() {
    }

    saveChanges(i) {
        var menu = [];
        // Get menu from Local Storage
        var m = localStorage.getItem("DISH_MENU");

        // Menu should be not null. If it doesn't than crate array else parse json string
        if (m != null) {
            menu = JSON.parse(m);
        }

        // Saving current dish to menu
        menu[i] = this.dish;

        // Save changed menu to Local Storage
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


