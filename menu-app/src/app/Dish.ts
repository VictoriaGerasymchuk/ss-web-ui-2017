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
		var date = new Date();
		this.id = date.getTime();

		this.name = '';
		this.description = '';
		this.price = 1;
		this.image = '';

		var day = date.getDate();
		var month = date.getMonth() + 1; // September == 8
		var year = date.getFullYear();

		var today:string = year + "-";// 2017-
		if (month < 10) today += "0"; // 2017-0
		today += month + "-";         // 2017-09
		if (day < 10) today += "0";   // 2017-09-0
		today += day;                 // 2017-09-04
		this.dateFrom = today;

		date.setDate(date.getDate() + (7 - date.getDay()) % 7 + 0); // Set next sunday

		day = date.getDate();
		month = date.getMonth() + 1; // September == 8
		year = date.getFullYear();

		var sunday: string = year + "-";// 2017-
		if (month < 10) sunday += "0";  // 2017-0
		sunday += month + "-";          // 2017-09
		if (day < 10) sunday += "0";    // 2017-09-0
		sunday += day;                  // 2017-09-04

		this.dateTo = sunday;
	}

	//constructor (name: string = '', description: string, price: number, image: string, dateFrom: string, dateTo: string) {}
}
