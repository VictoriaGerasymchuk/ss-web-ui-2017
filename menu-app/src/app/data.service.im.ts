import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Dish } from './dish';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataServiceIM {
	private headers = new Headers({ 'Content-Type': 'application/json' });
	private dishesUrl = 'api/dishes';  // URL to web api

	menu: Dish[];

	constructor(private http: Http) {
		this.getMenuFromIM();
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}

	getMenuFromIM() {
		this.http.get(this.dishesUrl)
			.toPromise()
			.then(response => this.menu = response.json().data as Dish[])
			.catch(this.handleError);
	}

	deleteDish(id: number): Promise<void> {
		const url = `${this.dishesUrl}/${id}`;
		return this.http.delete(url, { headers: this.headers })
			.toPromise()
			.then(() => this.getMenuFromIM()) // reload data from IM after deleting
			.catch(this.handleError);

	}

	addDish(dish: Dish): Promise<void> {
		return this.http
			.post(this.dishesUrl, JSON.stringify(dish), { headers: this.headers })
			.toPromise()
			//.then(res => res.json().data as Dish)
			.catch(this.handleError);
	}

	getDish(id: number): Promise<Dish> {
		const url = `${this.dishesUrl}/${id}`;
		return this.http.get(url)
			.toPromise()
			.then(response => response.json().data as Dish)
			.catch(this.handleError);
	}


	editDish(dish: Dish): Promise<void> {
		const url = `${this.dishesUrl}/${dish.id}`;
		return this.http
			.put(url, JSON.stringify(dish), { headers: this.headers })
			.toPromise()
			.catch(this.handleError);

	}

	saveChanges(): void {

	}
}