import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		const dishes = [
			{
				id: 1504253594449,
				name: 'CakeS',
				description: 'dhfgbljghfbk;gjfh;kj----',
				price: 5,
				image: 'https://s-media-cache-ak0.pinimg.com/736x/3c/e2/8f/3ce28f8cde5da6c6402ee734547d1d4a--watercolor-cake-watercolor-artwork.jpg',
				dateFrom: '2017-09-01',
				dateTo: '2017-09-03'
			},
			{
				id: 1504698391641,
				name: 'Cranberry cupcake',
				description: 'fhjdjgbfkjhgghkgjgk',
				price: 7, 
				image: 'https://s-media-cache-ak0.pinimg.com/originals/a8/b2/bd/a8b2bdf9714a7fab338dfe4ee31c6dec.jpg',
				dateFrom: '2017-09-06',
				dateTo: '2017-09-10'
			},
			{
				id: 1504698517745,
				name: 'Stawberry cake',
				description: 'jkbh;kjgnkgjhbkgllkjl',
				price: 6,
				image: 'https://i.pinimg.com/736x/19/d3/47/19d34742d82b9d689cc300ff769de310--cake-illustration-food-illustrations.jpg',
				dateFrom: '2017-09-06',
				dateTo: '2017-09-10' },
			{
				id: 1504698728819,
				name: 'Fig cake',
				description: 'nfm.gbfkjgb;kfghnkg;hoirfjg',
				price: 10,
				image: 'https://s-media-cache-ak0.pinimg.com/736x/9a/8d/ba/9a8dbaa4794ba11e22cb507c3e0e11ff--cake-art-drawing-drawing-food.jpg',
				dateFrom: '2017-09-06',
				dateTo: '2017-09-10' }
		];
		return { dishes };
	}
}