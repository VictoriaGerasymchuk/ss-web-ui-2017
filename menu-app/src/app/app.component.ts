import { Component } from '@angular/core';
import { AddingDishComponent } from './adding-dish/adding-dish.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { DataServiceLS } from './data.service.ls';
import { DataServiceIM } from './data.service.im';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
