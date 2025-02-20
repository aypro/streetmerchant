import {Store} from './store';

export const Melectronics: Store = {
	currency: 'CHF',
	labels: {
		outOfStock:[
			{
				container: '#app > div > div > main > div > div:nth-child(1) > div > div.p-product-detail--item__aside.col-sm-4 > div.p-product-detail--row__buybox > div > div > div.buybox--order.buybox--order__is-disabled > div.buybox--annotation > span',
				text: ['Actuellement non disponible dans la boutique en ligne']
			},
			{
				container: '.errormessagebar--tx',
				text: ['Ce produit']
			}
		]				
	},
	links: [
		//PS5
		{
			brand: 'sony',
			model: 'ps5 digital',
			series: 'sonyps5de',
            url: 'https://www.melectronics.ch/fr/p/785445800000/sony-playstation-5-digital-edition'
		},
		{
			brand: 'sony',
			model: 'ps5 console',
			series: 'sonyps5c',
            url: 'https://www.melectronics.ch/fr/p/785445700000/sony-playstation-5'
        },				
        //3080
		{
			brand: 'asus',
			model: 'tuf',
			series: '3080',
            url: 'https://www.melectronics.ch/fr/p/785300155940/asus-tuf-geforce-rtx-3080-o10g-gaming'
        },        
		{
			brand: 'asus',
			model: 'strix',
			series: '3080',
            url: 'https://www.melectronics.ch/fr/p/785300155941/asus-rog-strix-rtx3080-o10g-gaming'
        },         
		{
			brand: 'asus',
			model: 'tuf',
			series: '3080',
            url: 'https://www.melectronics.ch/fr/p/785300155939/asus-tuf-geforce-rtx-3080-10g-gaming'
        },  		    
		{
			brand: 'asus',
			model: 'strix',
			series: '3080',
            url: 'https://www.melectronics.ch/fr/p/785300155734/asus-asus-rog-strix-geforce-rtx-3080-10gb-gdd'
        }                          	  
	],
	name: 'melectronics'
};
