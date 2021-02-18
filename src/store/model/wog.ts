import {Store} from './store';

export const Wog: Store = {
	currency: 'CHF',
	labels: {         
		outOfStock:	{
            container: '#cart-div > div.padding-8.margin-b-6.float-right.position-relative.width-264.border-r.border-b.border-l.round-b.shadow-b > div > span',
            text: ['derzeit nicht bestellbar']
        }   
	},
	links: [  
		{
			brand: 'sony',
			model: 'ps5 digital',
			series: 'sonyps5de',
            url: 'https://www.wog.ch/index.cfm/details/product/110342'
        }, 			
		{
			brand: 'sony',
			model: 'ps5 digital',
			series: 'sonyps5de',
            url: 'https://www.wog.ch/index.cfm/details/product/107285'
        }, 		
		{
			brand: 'sony',
			model: 'ps5 console',
			series: 'sonyps5c',
            url: 'https://www.wog.ch/index.cfm/details/product/107286'
        }
	],
	name: 'wog'
};
