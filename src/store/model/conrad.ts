import {Store} from './store';

export const Conrad: Store = {
	currency: '$',
	labels: { 
		maxPrice: {
			container: '#productPriceUnitPrice',
			euroFormat: false
        },            
		outOfStock:	{
            container: '#availabilityStatus-currentOfferAvailability',
            text: ['ccp.availability.soldOut']
        }   
	},
	links: [  
		{
			brand: 'asus',
			model: 'gaming oc',
            series: '3080',
//            url: 'https://www.conrad.ch/de/p/asus-grafikkarte-nvidia-geforce-gt710-2-gb-gddr5-ram-pcie-x16-hdmi-2283846.html'
            url: 'https://www.conrad.ch/de/p/asus-grafikkarte-nvidia-geforce-rtx-3080-gaming-overclocked-10-gb-gddr6x-ram-pcie-x16-hdmi-displayport-2309478.html'
        }                                                                                                                                                                                                                                                                                                                                                                                      
	],
	name: 'conrad'
};
