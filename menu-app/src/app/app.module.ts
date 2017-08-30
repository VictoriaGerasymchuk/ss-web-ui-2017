import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { AddingDishComponent } from './adding-dish/adding-dish.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { EditingDishComponent } from './editing-dish/editing-dish.component';

// ����������� ���������
const appRoutes: Routes = [
    { path: '', component: MenuListComponent },
    { path: 'add', component: AddingDishComponent },
    { path: 'edit', component: EditingDishComponent }
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
	RouterModule.forRoot(appRoutes) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
