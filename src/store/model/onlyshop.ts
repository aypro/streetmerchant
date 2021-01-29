import {Store} from './store';

export const Onlyshop: Store = {
	currency: 'CHF',
	labels: { 
		maxPrice: {
			container: '#product-price > span > span > span > span.first_price > span.price',
			euroFormat: false
        },            
		inStock:	{
            container: '#product-availability > div.media-body',
            text: ['stock']
        }   
	},
	links: [  
		{
			brand: 'amd',
			model: '5600x',
			series: 'ryzen5600',
            url: 'https://www.onlyshop.ch/en/products/1057363'
        }, 			
		{
			brand: 'amd',
			model: '5600x',
			series: 'ryzen5600',
            url: 'https://www.onlyshop.ch/en/products/1077971'
        },  		
		{
			brand: 'palit',
			model: 'gaming pro oc',
            series: '3080',
            url: 'https://www.onlyshop.ch/en/products/1009659'
        },
		{
			brand: 'asus',
			model: 'tuf',
            series: '3080',
            url: 'https://www.onlyshop.ch/en/products/1009301'
        },
		{
			brand: 'asus',
			model: 'tuf',
            series: '3080',
            url: 'https://www.onlyshop.ch/en/products/1009299'
        },
		{
			brand: 'gigabyte',
			model: 'eagle oc',
            series: '3080',
            url: 'https://www.onlyshop.ch/en/products/1010209'
        },
		{
			brand: 'msi',
			model: 'gaming x trio',
            series: '3080',
            url: 'https://www.onlyshop.ch/en/products/1010213'
        },
		{
			brand: 'msi',
			model: 'ventus 3x oc',
            series: '3080',
            url: 'https://www.onlyshop.ch/en/products/1010215'
        }                                                                                                                                                                                                                                                                                                                                                                                                                    
	],
	name: 'onlyshop'
};
