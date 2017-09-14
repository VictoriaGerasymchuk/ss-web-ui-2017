import { Component, OnInit } from '@angular/core';
import { Dish } from '../dish';
import { ActivatedRoute} from '@angular/router';
import { DataServiceLS } from '../data.service.ls';
import { DataServiceIM } from '../data.service.im';


@Component({
    selector: 'app-editing-dish',
    templateUrl: './editing-dish.component.html',
    styleUrls: ['./editing-dish.component.css'],
	providers: [DataServiceLS, DataServiceIM]
})
export class EditingDishComponent implements OnInit {
	dish: Dish;

	id: number;
	user: string;

	get dateTo() {
		return this.dish.dateTo;
	}

	// getting activateRoute for work with url
	constructor(private activateRoute: ActivatedRoute, private data: DataServiceIM) {
		// getting id from url
		this.id = activateRoute.snapshot.params['id'];
		// getting user from url
		this.user = activateRoute.snapshot.params['user'];
		this.dish = new Dish();

		//this.dish = this.data.getDish(this.id);
		this.data
			.getDish(this.id)
			.then(dishFromPromise => this.dish = dishFromPromise);
	}

	ngOnInit() {
	}

	editDish(): void {
		this.data
			.editDish(this.dish)
			.then(() => {
				alert("Saved!");
				window.location.href = '/';
			});
	}
}


