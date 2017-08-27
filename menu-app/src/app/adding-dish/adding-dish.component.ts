import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adding-dish',
  templateUrl: './adding-dish.component.html',
  styleUrls: ['./adding-dish.component.css']
})
export class AddingDishComponent implements OnInit {

	dish = {
		name: '',
		description: '',
		price: 0,
		image: '',
		dateFrom: '',
		dateTo: ''
	}

  constructor() { }

  ngOnInit() {
  }

}
