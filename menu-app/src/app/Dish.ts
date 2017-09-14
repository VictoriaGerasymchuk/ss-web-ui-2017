export class Dish {
	id: number;
	name: string;
	description: string;
	price: number;
	image: string;
	dateFrom: string;

	//dateTo: string;
	get dateTo() {
		var spl = this.dateFrom.split("-");
		var y = parseInt(spl[0]);
		var m = parseInt(spl[1]);
		var d = parseInt(spl[2]);

		var date = new Date(y, m - 1, d);

		date.setDate(date.getDate() + (7 - date.getDay()) % 7); // Set next sunday

		var day = date.getDate();
		var month = date.getMonth() + 1; // September == 8
		var year = date.getFullYear();

		var sunday = year + "-";        // 2017-
		if (month < 10) sunday += "0";  // 2017-0
		sunday += month + "-";          // 2017-09
		if (day < 10) sunday += "0";    // 2017-09-0
		sunday += day;                  // 2017-09-10

		return sunday;
	}

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

		/*date.setDate(date.getDate() + (7 - date.getDay()) % 7 + 0); // Set next sunday

		day = date.getDate();
		month = date.getMonth() + 1; // September == 8
		year = date.getFullYear();

		var sunday: string = year + "-";// 2017-
		if (month < 10) sunday += "0";  // 2017-0
		sunday += month + "-";          // 2017-09
		if (day < 10) sunday += "0";    // 2017-09-0
		sunday += day;                  // 2017-09-10

		this.dateTo = sunday;*/
	}
}
