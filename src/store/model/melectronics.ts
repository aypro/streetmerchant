import {Store} from './store';

export const Melectronics: Store = {
	currency: 'CHF',
	labels: {
		outOfStock:	{
            container: '#app > div > div > main > div > div:nth-child(1) > div > div.p-product-detail--item__aside.col-sm-4 > div.p-product-detail--row__buybox > div > div > div.buybox--order.buybox--order__is-disabled > div.buybox--annotation > span',
            text: ['Actuellement non disponible dans la boutique en ligne']
        }   
	},
	links: [
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
			brand: 'gainward',
			model: 'phoenix gs',
			series: '3080',
            url: 'https://www.melectronics.ch/fr/p/785300155935/gainward-geforce-rtx3080-phoenix-gs-10gb'
		},    
		{
			brand: 'asus',
			model: 'tuf',
			series: '3080',
            url: 'https://www.melectronics.ch/fr/p/785300155939/asus-tuf-geforce-rtx-3080-10g-gaming'
        },  		    
		{
			brand: 'gainward',
			model: 'phoenix',
			series: '3080',
            url: 'https://www.melectronics.ch/fr/p/785300155933/gainward-geforce-rtx3080-phoenix-10gb'
        },      
		{
			brand: 'palit',
			model: 'gaming pro oc',
			series: '3080',
            url: 'https://www.melectronics.ch/fr/p/785300155934/palit-geforce-rtx3080-gaming-pro-oc-10gb'
        },   
		{
			brand: 'palit',
			model: 'gaming pro',
			series: '3080',
            url: 'https://www.melectronics.ch/fr/p/785300155932/palit-geforce-rtx3080-gaming-pro-10gb'
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
