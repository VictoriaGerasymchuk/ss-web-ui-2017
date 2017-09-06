import { Component, OnInit } from '@angular/core';
import { Dish } from '../dish';
import { Router } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css'],
  providers: [DataService]
})
export class MenuListComponent implements OnInit {

	constructor(private data: DataService) {
	}

	ngOnInit() {
	}

	deleteDish(id: number): void {
		// Call metod deleteDish() from DataService
		this.data.deleteDish(id);

		alert("Deleted!");
	}

}
