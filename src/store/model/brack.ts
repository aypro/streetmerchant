import {Store} from './store';

export const Brack: Store = {
	currency: 'CHF',
	labels: {
		inStock:
			{
	            container: '.productStage__addToCartSubmit',
            	text: ['Dans le panier']
        	},		
		outOfStock:	[
			{
	            container: '.productStage__soldOut',
            	text: ['Article épuisé']
        	}		
		]
	},
	links: [
		//3070
		{
			brand: 'palit',
			model: 'gaming pro',
			series: '3070',
            url: 'https://www.brack.ch/fr/palit-carte-graphique-geforce-rtx3070-gaming-pro-8-gb-1124733'
        },
		{
			brand: 'palit',
			model: 'jetstream',
			series: '3070',
            url: 'https://www.brack.ch/fr/palit-carte-graphique-geforce-rtx3070-jetstream-8-gb-1143428'
        }		
	
	],
	name: 'brack'
};