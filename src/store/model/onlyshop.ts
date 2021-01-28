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
            url: 'https://www.onlyshop.ch/en/products/1057363-100-100000065box-amd-cpu-ryzen-5-5600x-37-ghz'
        }, 			
		{
			brand: 'amd',
			model: '5600x',
			series: 'ryzen5600',
            url: 'https://www.onlyshop.ch/en/products/1077971-100-000000065-amd-ryzen-5-5600x-without-cooler'
        },  		
		{
			brand: 'palit',
			model: 'gaming pro oc',
            series: '3080',
            url: 'https://www.onlyshop.ch/en/products/1009659-ned3080s19ia-132aa-palit-grafikkarte-geforce'
        },
		{
			brand: 'asus',
			model: 'tuf',
            series: '3080',
            url: 'https://www.onlyshop.ch/en/products/1009301-90yv0fb1-m0nm00-asus-grafikkarte-tuf-geforce'
        },
		{
			brand: 'asus',
			model: 'tuf',
            series: '3080',
            url: 'https://www.onlyshop.ch/en/products/1009299-90yv0fb0-m0nm00-asus-grafikkarte-tuf-geforce'
        },
		{
			brand: 'gigabyte',
			model: 'eagle oc',
            series: '3080',
            url: 'https://www.onlyshop.ch/en/products/1010209-0000000neu2288-neu'
        },
		{
			brand: 'msi',
			model: 'gaming x trio',
            series: '3080',
            url: 'https://www.onlyshop.ch/en/products/1010213-0000000neu8096-neu'
        },
		{
			brand: 'msi',
			model: 'ventus 3x oc',
            series: '3080',
            url: 'https://www.onlyshop.ch/en/products/1010215-0000000neu3222-neu'
        }                                                                                                                                                                                                                                                                                                                                                                                                                    
	],
	name: 'onlyshop'
};
