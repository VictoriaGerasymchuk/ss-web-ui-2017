import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {

  menu = [];

  constructor() {
	var m = localStorage.getItem("DISH_MENU");
	if (m != null) {
		this.menu = JSON.parse(m);
	}
  }

  ngOnInit() {
  }

}
