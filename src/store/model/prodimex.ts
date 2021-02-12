import {Store} from './store';

export const Prodimex: Store = {
	currency: 'CHF',
	labels: {
		inStock:	{
            container: 'div.thumb-product-stock > img',
            text: ['Stock']
        }   
	},
	links: [   
		{
			brand: 'amd',
			model: '3200g',
			series: 'ryzen3200g',
			url: 'https://www.prodimex.ch/-113335.html'
		}, 	
		{
			brand: 'amd',
			model: '3400g',
			series: 'ryzen3400g',
			url: 'https://www.prodimex.ch/-113336.html'
		}, 					
		{
			brand: 'amd',
			model: '5600x',
			series: 'ryzen5600',
			url: 'https://www.prodimex.ch/-121628.html'
		}, 		
		{
			brand: 'gigabyte',
			model: 'aorus master',
			series: '3080',
            url: 'https://www.prodimex.ch/-120511.html'
        }              
		,{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3080',
            url: 'https://www.prodimex.ch/-120508.html'
        }    
		,{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3080',
            url: 'https://www.prodimex.ch/-120510.html'
        }    
		,{
			brand: 'gigabyte',
			model: 'vision oc',
			series: '3080',
            url: 'https://www.prodimex.ch/-120509.html'
        }                                                                                                                                                                                                
		,{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3080',
            url: 'https://www.prodimex.ch/-120321.html'
        }                                                                                                                                                                                                
		,{
			brand: 'msi',
			model: 'suprim x',
			series: '3080',
            url: 'https://www.prodimex.ch/-122541.html'
        }                                                                                                                                                                                                
		,{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3080',
            url: 'https://www.prodimex.ch/-120320.html'
        }                                                                                                                                                                                                
		,{
			brand: 'palit',
			model: 'gaming pro oc',
			series: '3080',
            url: 'https://www.prodimex.ch/-120323.html'
        }                                                                                                                                                                                      
	],
	name: 'prodimex'
};
