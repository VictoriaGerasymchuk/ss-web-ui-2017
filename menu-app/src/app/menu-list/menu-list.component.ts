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

}
