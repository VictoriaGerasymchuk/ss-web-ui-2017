export class Dish {
	id: number;
	name: string;
	description: string;
	price: number;
	image: string;
	dateFrom: string;
	dateTo: string;

	constructor() {
		// getting ticks for id
		var d = new Date();
		this.id = d.getTime();

		this.name = '',
		this.description = '',
		this.price = 0,
		this.image = '',
		this.dateFrom = '',
		this.dateTo = ''
	}

	//constructor (name: string = '', description: string, price: number, image: string, dateFrom: string, dateTo: string) {}
}
