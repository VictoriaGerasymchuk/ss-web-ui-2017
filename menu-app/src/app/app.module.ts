import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import {Routes, RouterModule} from '@angular/router';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { AddingDishComponent } from './adding-dish/adding-dish.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { EditingDishComponent } from './editing-dish/editing-dish.component';

import { DataServiceIM } from './data.service.im';

// определение маршрутов
const appRoutes: Routes = [
    { path: '', component: MenuListComponent },
    { path: 'add', component: AddingDishComponent },
    { path: 'edit/:id', component: EditingDishComponent }
];

@NgModule({
	declarations: [
		AppComponent,
		AddingDishComponent,
		MenuListComponent,
		EditingDishComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		InMemoryWebApiModule.forRoot(InMemoryDataService),
		RouterModule.forRoot(appRoutes)
	],
	providers: [DataServiceIM],
	bootstrap: [AppComponent]
})
export class AppModule { }
