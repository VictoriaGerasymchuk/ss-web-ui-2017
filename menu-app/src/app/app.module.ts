import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { AddingDishComponent } from './adding-dish/adding-dish.component';
import { MenuListComponent } from './menu-list/menu-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddingDishComponent,
    MenuListComponent
  ],
  imports: [
    BrowserModule,
	FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
