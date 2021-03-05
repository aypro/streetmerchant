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
		//3060
		{
			brand: 'palit',
			model: 'dual',
			series: '3060',
            url: 'https://www.brack.ch/fr/palit-carte-graphique-geforce-rtx3060-dual-12-gb-1183112'
        },
		{
			brand: 'gainward',
			model: 'dual',
			series: '3060',
            url: 'https://www.brack.ch/fr/gainward-carte-graphique-geforce-rtx3060-ghost-12-gb-1183118'
        },
		{
			brand: 'palit',
			model: 'dual',
			series: '3060ti',
            url: 'https://www.brack.ch/palit-grafikkarte-geforce-rtx3060-ti-dual-8-gb-1137404'
        },							
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
        },	
		{
			brand: 'palit',
			model: 'jetstream',
			series: '3070',
            url: 'https://www.brack.ch/fr/palit-carte-graphique-geforce-rtx3070-jetstream-oc-8-gb-1148111'
        },				
		{
			brand: 'asus',
			model: 'strix oc',
			series: '3070',
            url: 'https://www.brack.ch/fr/asus-rog-carte-graphique-geforce-rtx3070-o8g-gaming-1183634'
        },
		//3090
		{
			brand: 'msi',
			model: 'suprim x',
			series: '3090',
            url: 'https://www.brack.ch/fr/msi-carte-graphique-geforce-rtx3090-suprim-x-24-gb-1145736	'
        }						
	],
	name: 'brack'
};