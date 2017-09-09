import { Component, OnInit } from '@angular/core';
import { Dish } from '../dish';
import { DataService } from '../data.service';


@Component({
  selector: 'app-adding-dish',
  templateUrl: './adding-dish.component.html',
  styleUrls: ['./adding-dish.component.css'],
  providers: [DataService]
})
export class AddingDishComponent implements OnInit {
	dish: Dish;

	minDate: string;
	maxDate: string;

	constructor(private data: DataService) {
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
