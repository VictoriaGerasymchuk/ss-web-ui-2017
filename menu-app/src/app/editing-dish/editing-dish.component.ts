import { Component, OnInit } from '@angular/core';
import { Dish } from '../dish';
import { ActivatedRoute} from '@angular/router';
import { DataService } from '../data.service';


@Component({
    selector: 'app-editing-dish',
    templateUrl: './editing-dish.component.html',
    styleUrls: ['./editing-dish.component.css'],
	providers: [DataService]
})
export class EditingDishComponent implements OnInit {
    dish: Dish;

	id: number;

	// getting activateRoute for work with url
	constructor(private activateRoute: ActivatedRoute, private data: DataService) {
		// getting id from url
		this.id = activateRoute.snapshot.params['id'];

		this.dish = this.data.getDish(this.id);
	}

    ngOnInit() {
    }

    editDish(): void {
		this.data.editDish(this.dish);
        alert("Saved!");

        window.location.href = '/';
    }
}


