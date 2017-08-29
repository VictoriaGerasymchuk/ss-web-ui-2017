export class Dish {
	name: string;
	description: string;
	price: number;
	image: string;
	dateFrom: string;
	dateTo: string;

	constructor() {
		this.name = '',
		this.description = '',
		this.price = 0,
		this.image = '',
		this.dateFrom = '',
		this.dateTo = ''
	}

	//constructor (name: string = '', description: string, price: number, image: string, dateFrom: string, dateTo: string) {}
}
