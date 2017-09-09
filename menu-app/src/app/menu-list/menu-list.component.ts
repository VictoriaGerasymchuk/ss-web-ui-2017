import { Component, OnInit } from '@angular/core';
import { Dish } from '../dish';
import { Router } from '@angular/router';
import { DataServiceLS } from '../data.service.ls';
import { DataServiceIM } from '../data.service.im';


@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css'],
  providers: [DataServiceLS, DataServiceIM]
})
export class MenuListComponent implements OnInit {

	constructor(private data: DataServiceIM) {
	}

	ngOnInit() {
	}

	deleteDish(id: number): void {
		// Call metod deleteDish() from DataService
		this.data.deleteDish(id)
			.then(() => alert("Deleted!"));
	}

}
