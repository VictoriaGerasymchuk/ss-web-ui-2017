import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		const dishes = [
			{
				id: 1504253594449,
				name: 'Cake',
				description: 'dhfgbljghfbk;gjfh;kj----',
				price: 5,
				image: 'https://s-media-cache-ak0.pinimg.com/736x/3c/e2/8f/3ce28f8cde5da6c6402ee734547d1d4a--watercolor-cake-watercolor-artwork.jpg',
				dateFrom: '2017-09-01',
				dateTo: '2017-09-03'
			},
			{
				id: 1504698391641,
				name: "Sweet's cake",
				description: 'fhjdjgbfkjhgghkgjgk',
				price: 7, 
				image: 'https://i.pinimg.com/736x/8d/40/dd/8d40ddbba8bd01b44aa883e469f7675b--dessert-illustration-watercolor-illustration.jpg',
				dateFrom: '2017-09-06',
				dateTo: '2017-09-10'
			},
			{
				id: 1504698728811,
				name: 'Caramel cake',
				description: 'nfm.gbfkjgb;kfghnkg;hoirfjg',
				price: 10,
				image: 'http://finedininglovers.cdn.crosscast-system.com/ImageAlbum/16020/original_Olga-Moskaleva-3.jpg',
				dateFrom: '2017-09-11',
				dateTo: '2017-09-17'
			},
			{
				id: 1504698728819,
				name: 'Fig cake',
				description: 'nfm.gbfkjgb;kfghnkg;hoirfjg',
				price: 10,
				image: 'https://s-media-cache-ak0.pinimg.com/736x/9a/8d/ba/9a8dbaa4794ba11e22cb507c3e0e11ff--cake-art-drawing-drawing-food.jpg',
				dateFrom: '2017-09-06',
				dateTo: '2017-09-10'
			},
			{
				id: 1504698728810,
				name: 'Berry cake',
				description: 'nfm.gbfkjgb;kfghnkg;hoirfjg',
				price: 12,
				image: 'https://s-media-cache-ak0.pinimg.com/736x/5f/90/75/5f9075a309cf97ad91c58d1f03578b8a--watercolor-food-watercolor-drawing.jpg',
				dateFrom: '2017-09-11',
				dateTo: '2017-09-17'
			},
			{
				id: 1504698517745,
				name: 'Stawberry cake',
				description: 'jkbh;kjgnkgjhbkgllkjl',
				price: 6,
				image: 'https://i.pinimg.com/736x/19/d3/47/19d34742d82b9d689cc300ff769de310--cake-illustration-food-illustrations.jpg',
				dateFrom: '2017-09-06',
				dateTo: '2017-09-10'
			},
			{
				id: 1504698517746,
				name: 'Raspberry cake',
				description: 'jkbh;kjgnkgjhbkgllkjl',
				price: 7,
				image: 'https://68.media.tumblr.com/42c6a37a17f9d79ec983b7e75ae1424d/tumblr_o1794yUy531sl4os7o1_1280.jpg',
				dateFrom: '2017-09-11',
				dateTo: '2017-09-17'
			},
			


		];
		return { dishes };
	}
}