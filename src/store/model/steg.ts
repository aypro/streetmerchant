import {Store} from './store';

export const Steg: Store = {
	currency: 'CHF',
	labels: {
		maxPrice: {
			container: '.generalPrice .sm-flex-item',
			euroFormat: false
        },
		outOfStock:[
			{
				container: '.availabilityInfo',
				text: ['Expédition en 4 à 6 semaines']
			},
			{
				container: '#notification > h3',
				text: ['Nous ne pouvons']
			}		   
		]
	},
	links: [
		{
			brand: 'amd',
			model: '5600x',
			series: 'ryzen5600',
            url: 'https://www.steg-electronics.ch/fr/product/amd-ryzen-5-5600x-3-70ghz-32-mb-boxed-27756484'
        },     
		{
			brand: 'zotac',
			model: 'trinity',
			series: '3080',
            url: 'https://www.steg-electronics.ch/fr/product/zotac-geforce-rtx-3080-trinity-10g-27559623'
        }              
		,{
			brand: 'evga',
			model: 'xc3',
			series: '3080',
            url: 'https://www.steg-electronics.ch/fr/product/evga-geforce-rtx-3080-xc3-gaming-27580882'
        }    
		,{
			brand: 'inno3d',
			model: 'ichill x4',
			series: '3080',
            url: 'https://www.steg-electronics.ch/fr/product/inno3d-geforce-rtx-3080-ichill-x4-10g-27576087'
        }    
		,{
			brand: 'gigabyte',
			model: 'eagle',
			series: '3080',
            url: 'https://www.steg-electronics.ch/fr/product/gigabyte-geforce-rtx-3080-eagle-10g-27814374'
        }                                                                                                                                                                                                
		,{
			brand: 'zotac',
			model: 'amp holo',
			series: '3080',
            url: 'https://www.steg-electronics.ch/fr/product/zotac-geforce-rtx-3080-amp-holo-10gb-27691132'
        }                                                                                                                                                                                                
		,{
			brand: 'evga',
			model: 'xc3 black',
			series: '3080',
            url: 'https://www.steg-electronics.ch/fr/product/evga-geforce-rtx-3080-xc3-black-gaming-10gb-27580763'
        }                                                                                                                                                                                                
		,{
			brand: 'zotac',
			model: 'trinity oc',
			series: '3080',
            url: 'https://www.steg-electronics.ch/fr/product/zotac-gaming-geforce-rtx-3080-trinity-oc-10gb-27691125'
        }                                                                                                                                                                                                
		,{
			brand: 'inno3d',
			model: 'ichill x3',
			series: '3080',
            url: 'https://www.steg-electronics.ch/fr/product/inno3d-geforce-rtx-3080-ichill-x3-10g-27575989'
        }                                                                                                                                                                                                
		,{
			brand: 'inno3d',
			model: 'twin x2 oc',
			series: '3080',
            url: 'https://www.steg-electronics.ch/fr/product/inno3d-geforce-rtx-3080-twin-x2-oc-10g-27575884'
        }                                                                                                                                                                                                
		,{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3080',
            url: 'https://www.steg-electronics.ch/fr/product/msi-geforce-rtx-3080-ventus-3x-oc-10g-27554443'
        }                                                                                                                                                                                                
		,{
			brand: 'asus',
			model: 'tuf',
			series: '3080',
            url: 'https://www.steg-electronics.ch/fr/product/asus-geforce-tuf-rtx-3080-gaming-10g-27567491'
        }                                                                                                                                                                                                
		,{
			brand: 'pny',
			model: 'xlr8 epic x',
			series: '3080',
            url: 'https://www.steg-electronics.ch/fr/product/pny-geforce-rtx-3080-xlr8-gaming-epic-x-rgb-triple-fan-edition-10gb-27576171'
        }                                                                                                                                                                                                
		,{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3080',
            url: 'https://www.steg-electronics.ch/fr/product/msi-geforce-rtx-3080-gaming-x-trio-10g-27554394'
        }                                                                                                                                                                                                
		,{
			brand: 'pny',
			model: 'xlr8 epic x',
			series: '3080',
            url: 'https://www.steg-electronics.ch/fr/product/pny-geforce-rtx-3080-xlr8-gaming-epic-x-rgb-triple-fan-edition-10gb-27576206'
        }                                                                                                                                                                                                
		,{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3080',
            url: 'https://www.steg-electronics.ch/fr/product/gigabyte-geforce-rtx-3080-gaming-oc-10g-27559133'
        }                                                                                                                                                                                                
		,{
			brand: 'gigabyte',
			model: 'vision oc',
			series: '3080',
            url: 'https://www.steg-electronics.ch/fr/product/gigabyte-geforce-rtx-3080-vision-oc-10gb-27685357'
        }                                                                                                                                                                                                
		,{
			brand: 'inno3d',
			model: 'ichill frostbite',
			series: '3080',
            url: 'https://www.steg-electronics.ch/fr/product/inno3d-geforce-rtx-3080-ichill-frostbite-10gb-27878473'
        }                                                                                                                                                                                                
		,{
			brand: 'evga',
			model: 'ftw3',
			series: '3080',
            url: 'https://www.steg-electronics.ch/fr/product/evga-geforce-rtx-3080-ftw3-gaming-27580854'
        }                                                                                                                                                                                                
		,{
			brand: 'evga',
			model: 'xc3 ultra',
			series: '3080',
            url: 'https://www.steg-electronics.ch/fr/product/evga-geforce-rtx-3080-xc3-ultra-gaming-10gb-27580777'
        }                                                                                                                                                                                                
		,{
			brand: 'msi',
			model: 'suprim x',
			series: '3080',
            url: 'https://www.steg-electronics.ch/fr/product/msi-geforce-rtx-3080-suprim-x-10gb-27856955'
        }                                                                                                                                                                                                
		,{
			brand: 'asus',
			model: 'tuf oc',
			series: '3080',
            url: 'https://www.steg-electronics.ch/fr/product/asus-geforce-tuf-rtx-3080-oc-gaming-10g-27567568'
        }                                                                                                                                                                                                
		,{
			brand: 'gainward',
			model: 'phantom gaming',
			series: '3080',
            url: 'https://www.steg-electronics.ch/fr/product/gainward-geforce-rtx-3080-phantom-10gb-27740153'
        }                                                                                                                                                                                                
		,{
			brand: 'palit',
			model: 'gaming pro',
			series: '3080',
            url: 'https://www.steg-electronics.ch/fr/product/palit-geforce-rtx-3080-gamingpro-10gb-27581911'
        }                                                                                                                                                                                                
		,{
			brand: 'palit',
			model: 'gaming pro oc',
			series: '3080',
            url: 'https://www.steg-electronics.ch/fr/product/palit-geforce-rtx-3080-gamingpro-oc-10gb-27590535'
        }                                                                                                                                                                                                
		,{
			brand: 'asus',
			model: 'strix',
			series: '3080',
            url: 'https://www.steg-electronics.ch/fr/product/asus-geforce-rog-strix-rtx-3080-gaming-10g-27554289'
        }                                                                                                                                                                                                
		,{
			brand: 'gainward',
			model: 'phoenix gs',
			series: '3080',
            url: 'https://www.steg-electronics.ch/fr/product/gainward-geforce-rtx-3080-phoenix-gs-27593615'
        }    
		,{
			brand: 'gainward',
			model: 'phoenix',
			series: '3080',
            url: 'https://www.steg-electronics.ch/fr/product/gainward-geforce-rtx-3080-phoenix-27594112'
        }                                                                                                                                                                                                
		,{
			brand: 'asus',
			model: 'strix oc',
			series: '3080',
            url: 'https://www.steg-electronics.ch/fr/product/asus-geforce-rog-strix-rtx-3080-gaming-oc-10g-27567813'
        }                                                                                                                                                                                                
		,{
			brand: 'gigabyte',
			model: 'aorus xtreme',
			series: '3080',
            url: 'https://www.steg-electronics.ch/fr/product/gigabyte-aorus-geforce-rtx-3080-xtreme-10g-27707722'
        }                                                                                                                                                                                                
		,{
			brand: 'gainward',
			model: 'phantom gs',
			series: '3080',
            url: 'https://www.steg-electronics.ch/fr/product/gainward-geforce-rtx-3080-phantom-gs-10gb-27740181'
        }                                                                                                                                                                                                
		,{
			brand: 'gigabyte',
			model: 'aorus master',
			series: '3080',
            url: 'https://www.steg-electronics.ch/fr/product/gigabyte-aorus-geforce-rtx-3080-master-10g-27559126'
        }                                                                                                                                                                                                
		,{
			brand: 'asus',
			model: 'ekwb',
			series: '3080',
            url: 'https://www.steg-electronics.ch/fr/product/asus-eforce-rtx-3080-ek-10gb-27878690'
        }                                                                                                                                                                                                
		,{
			brand: 'gigabyte',
			model: 'aorus xtreme waterforce',
			series: '3080',
            url: 'https://www.steg-electronics.ch/fr/product/gigabyte-aorus-geforce-rtx-3080-xtreme-waterforce-10g-27814339'
        }                                                                                                                                                                                         
		,{
			brand: 'evga',
			model: 'ftw3 ultra',
			series: '3080',
            url: 'https://www.steg-electronics.ch/fr/product/evga-geforce-rtx-3080-ftw3-ultra-gaming-10gb-27580756'
        }                                                                                                                                                                                                
		,{
			brand: 'gigabyte',
			model: 'aorus xtreme waterforce wb',
			series: '3080',
            url: 'https://www.steg-electronics.ch/fr/product/gigabyte-aorus-geforce-rtx-3080-xtreme-waterforce-wb-10g-27814346'
        }                                                                                                                                                                                                                                                                                                                                                                                                
	],
	name: 'steg'
};
