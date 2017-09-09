import { Component, OnInit } from '@angular/core';
import { Dish } from '../dish';
import { DataServiceLS } from '../data.service.ls';
import { DataServiceIM } from '../data.service.im';


@Component({
  selector: 'app-adding-dish',
  templateUrl: './adding-dish.component.html',
  styleUrls: ['./adding-dish.component.css'],
  providers: [DataServiceLS, DataServiceIM]
})
export class AddingDishComponent implements OnInit {
	dish: Dish;

	minDate: string;
	maxDate: string;

	constructor(private data: DataServiceIM) {
		this.dish = new Dish();

		this.minDate = this.dish.dateFrom;
	}

	ngOnInit() {
	}

	addDish() {
		this.data
			.addDish(this.dish)
			.then(() => {
				alert("Saved!");
				window.location.href = '/';
			});
	}
}
