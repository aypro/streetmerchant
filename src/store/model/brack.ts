import {Store} from './store';

export const Brack: Store = {
	minPageSleep: 30000,
	maxPageSleep: 60000,
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
			brand: 'palit',
			model: 'dual oc',
			series: '3060',
            url: 'https://www.brack.ch/fr/palit-carte-graphique-geforce-rtx3060-dual-oc-12-gb-1183101'
        },		
		{
			brand: 'gainward',
			model: 'ghost',
			series: '3060',
            url: 'https://www.brack.ch/fr/gainward-carte-graphique-geforce-rtx3060-ghost-12-gb-1183118'
        },
		{
			brand: 'gainward',
			model: 'ghost oc',
			series: '3060',
            url: 'https://www.brack.ch/fr/gainward-carte-graphique-geforce-rtx3060-ghost-oc-12-gb-1183116'
        },			
		{
			brand: 'asus',
			model: 'dual oc',
			series: '3060',
            url: 'https://www.brack.ch/fr/asus-carte-graphique-dual-geforce-rtx3060-o12g-1171851'
        },	
		{
			brand: 'asus',
			model: 'dual',
			series: '3060',
            url: 'https://www.brack.ch/fr/asus-carte-graphique-dual-geforce-rtx3060-12g-1171850'
        },	
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3060',
            url: 'https://www.brack.ch/fr/msi-carte-graphique-geforce-rtx3060-gaming-x-trio-12-gb-1186346'
        },	
		{
			brand: 'msi',
			model: 'gaming x',
			series: '3060',
            url: 'https://www.brack.ch/fr/msi-carte-graphique-geforce-rtx3060-gaming-x-12-gb-1186348'
        },	
		{
			brand: 'asus',
			model: 'tuf oc',
			series: '3060',
            url: 'https://www.brack.ch/fr/asus-carte-graphique-tuf-geforce-rtx3060-o12g-gaming-1164248'
        },		
		{
			brand: 'msi',
			model: 'ventus 3x',
			series: '3060',
            url: 'https://www.brack.ch/fr/msi-carte-graphique-geforce-rtx3060-ventus-3x-12-gb-1186350'
        },	
		{
			brand: 'gigabyte',
			model: 'vision oc',
			series: '3060',
            url: 'https://www.brack.ch/fr/gigabyte-carte-graphique-geforce-rtx3060-vision-oc-12-gb-1186539'
        },			
		//3060ti
		{
			brand: 'palit',
			model: 'dual',
			series: '3060ti',
            url: 'https://www.brack.ch/fr/palit-grafikkarte-geforce-rtx3060-ti-dual-8-gb-1137404'
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
		{
			brand: 'asus',
			model: 'tuf oc',
			series: '3070',
            url: 'https://www.brack.ch/fr/asus-carte-graphique-tuf-geforce-rtx-3070-o8g-1121537'
        },	
		{
			brand: 'asus',
			model: 'dual oc',
			series: '3070',
            url: 'https://www.brack.ch/fr/asus-carte-graphique-geforce-rtx3070-o8g-1121538'
        },	
		{
			brand: 'asus',
			model: 'strix oc',
			series: '3070',
            url: 'https://www.brack.ch/fr/asus-rog-carte-graphique-geforce-rtx3070-o8g-gaming-1121536'
        },	
		{
			brand: 'gainward',
			model: 'phoenix gs',
			series: '3070',
            url: 'https://www.brack.ch/fr/gainward-carte-graphique-geforce-rtx3070-phoenix-gs-8-gb-1127721'
        },	
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3070',
            url: 'https://www.brack.ch/fr/msi-carte-graphique-geforce-rtx3070-ventus-3x-oc-1127695'
        },
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3070',
            url: 'https://www.brack.ch/fr/msi-carte-graphique-geforce-rtx3070-gaming-x-trio-8-gb-1127694'
        },
		{
			brand: 'msi',
			model: 'suprim x',
			series: '3070',
            url: 'https://www.brack.ch/fr/msi-carte-graphique-geforce-rtx3070-suprime-x-8-gb-1145740'
        },	
		{
			brand: 'asus',
			model: 'strix',
			series: '3070',
            url: 'https://www.brack.ch/fr/asus-rog-carte-graphique-rog-strix-geforce-rtx3070-8g-gaming-1140759'
        },			
		{//3080
			brand: 'asus',
			model: 'strix',
			series: '3080',
            url: 'https://www.brack.ch/fr/asus-rog-grafikkarte-geforce-rtx3080-10g-gaming-1113386'
        },
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3080',
            url: 'https://www.brack.ch/fr/msi-carte-graphique-geforce-rtx3080-ventus-3x-oc-1118832'
        },
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3080',
            url: 'https://www.brack.ch/fr/gigabyte-carte-graphique-geforce-rtx3080-gaming-oc-10gb-1118842'
        },	
		{
			brand: 'palit',
			model: 'gaming pro',
			series: '3080',
            url: 'https://www.brack.ch/fr/palit-carte-graphique-geforce-rtx3080-gaming-pro-10gb-1112208'
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