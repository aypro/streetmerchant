import {Store} from './store';

export const Steg: Store = {
	currency: 'CHF',
	labels: {
		maxPrice: {
			container: '.generalPrice .sm-flex-item',
			euroFormat: true
        },
		inStock:[
			{
				container: '.avaText',
				text: ['Livraison']
			},
			{
				container: '.avaText',
				text: ['Expédition']
			}			
		]
		,
		outOfStock:[
			{
				container: '.availabilityInfo',
				text: ['Malheureusement']
			},			
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
			model: '3400g',
			series: 'ryzen3400g',
            url: 'https://www.steg-electronics.ch/fr/product/amd-ryzen-5-3400g-4c-3-70ghz-4mb-boxed-25888520'
		},		
		{
			brand: 'amd',
			model: '3200g',
			series: 'ryzen3200g',
            url: 'https://www.steg-electronics.ch/fr/product/amd-ryzen-3-3200g-4c-3-60ghz-4-mb-boxed-25888513'
		},				
		{
			brand: 'sony',
			model: 'ps5 digital',
			series: 'sonyps5de',
            url: 'https://www.steg-electronics.ch/fr/product/sony-playstation-5-digital-edition-blanc-ps5-d-f-i-e-27580952'
		},		
		{
			brand: 'sony',
			model: 'ps5 console',
			series: 'sonyps5c',
            url: 'https://www.steg-electronics.ch/fr/product/sony-playstation-5-weiss-ps5-d-f-i-e-27580931'
        },		
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
/* 		,{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3080',
            url: 'https://www.steg-electronics.ch/fr/product/msi-geforce-rtx-3080-ventus-3x-oc-10g-27554443'
        } */
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
		,{
			brand: 'gigabyte',
			model: 'aorus master',
			series: '3080',
            url: 'https://www.steg-electronics.ch/fr/product/gigabyte-aorus-geforce-rtx-3080-master-10g-rev-2-0-27960562'
		} 	
		,{
			brand: 'asus',
			model: 'strix oc white',
			series: '3080',
            url: 'https://www.steg-electronics.ch/fr/product/asus-geforce-rog-strix-rtx-3080-gaming-oc-white-edition-10gb-27937791'
		} 		
		//3070
		,{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3070',
            url: 'https://www.steg-electronics.ch/fr/product/gigabyte-geforce-rtx-3070-gaming-oc-8gb-27725131'
		} 
		,{
			brand: 'gigabyte',
			model: 'vision oc',
			series: '3070',
            url: 'https://www.steg-electronics.ch/fr/product/gigabyte-geforce-rtx-3070-vision-oc-8g-27791085'
		} 					
		,{
			brand: 'gigabyte',
			model: 'aorus master',
			series: '3070',
            url: 'https://www.steg-electronics.ch/fr/product/gigabyte-aorus-geforce-rtx-3070-master-8g-27791071'
		} 					
		,{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3070',
            url: 'https://www.steg-electronics.ch/fr/product/gigabyte-geforce-rtx-3070-eagle-oc-8gb-27698790'
		} 					
		,{
			brand: 'asus',
			model: 'tuf oc',
			series: '3070',
            url: 'https://www.steg-electronics.ch/fr/product/asus-tuf-rtx-3070-o8g-gaming-27714890'
		} 					
		,{
			brand: 'zotac',
			model: 'twin edge oc',
			series: '3070',
            url: 'https://www.steg-electronics.ch/fr/product/zotac-gaming-geforce-rtx-3070-twin-edge-oc-8gb-27728911'
		} 					
		,{
			brand: 'asus',
			model: 'dual',
			series: '3070',
            url: 'https://www.steg-electronics.ch/fr/product/asus-dual-rtx-3070-o8g-27722975'
		} 					
		,{
			brand: 'zotac',
			model: 'twin edge oc',
			series: '3070',
            url: 'https://www.steg-electronics.ch/fr/product/zotac-geforce-rtx-3070-twin-edge-oc-white-edition-8gb-27863395'
		} 					
		,{
			brand: 'gainward',
			model: 'phoenix gs',
			series: '3070',
            url: 'https://www.steg-electronics.ch/fr/product/gainward-geforce-rtx-3070-phoenix-gs-27759781'
		} 					
		,{
			brand: 'asus',
			model: 'strix oc',
			series: '3070',
            url: 'https://www.steg-electronics.ch/fr/product/asus-rog-strix-rtx-3070-o8g-gaming-27723003'
		} 					
		,{
			brand: 'asus',
			model: 'strix oc white',
			series: '3070',
            url: 'https://www.steg-electronics.ch/fr/product/asus-rog-strix-geforce-rtx-3070-gaming-oc-white-edition-8gb-27952183'
		} 					
		,{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3070',
            url: 'https://www.steg-electronics.ch/fr/product/msi-geforce-rtx-3070-ventus-3x-oc-27730486'
		} 					
		,{
			brand: 'gainward',
			model: 'phoenix',
			series: '3070',
            url: 'https://www.steg-electronics.ch/fr/product/gainward-geforce-rtx-3070-phantom-8gb-27850816'
		} 					
		,{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3070',
            url: 'https://www.steg-electronics.ch/fr/product/msi-geforce-rtx-3070-gaming-x-trio-27554408'
		} 					
		,{
			brand: 'zotac',
			model: 'amp holo',
			series: '3070',
            url: 'https://www.steg-electronics.ch/fr/product/zotac-rtx-3070-amp-holo-27962214'
		} 					
		,{
			brand: 'asus',
			model: 'tuf',
			series: '3070',
            url: 'https://www.steg-electronics.ch/fr/product/asus-geforce-tuf-rtx-3070-8gb-27731963'
		} 					
		,{
			brand: 'msi',
			model: 'ventus 2x',
			series: '3070',
            url: 'https://www.steg-electronics.ch/fr/product/msi-geforce-rtx-3070-ventus-2x-oc-27554436'
		} 					
		,{
			brand: 'inno3d',
			model: 'ichill x3',
			series: '3070',
            url: 'https://www.steg-electronics.ch/fr/product/inno3d-geforce-rtx-3070-ichill-x3-27768300'
		} 					
		,{
			brand: 'zotac',
			model: 'twin edge',
			series: '3070',
            url: 'https://www.steg-electronics.ch/fr/product/zotac-gaming-geforce-rtx-3070-twin-edge-8gb-27559630'
		} 					
		,{
			brand: 'asus',
			model: 'turbo',
			series: '3070',
            url: 'https://www.steg-electronics.ch/fr/product/asus-turbo-geforce-rtx-3070-8gb-27954535'
		} 					
		,{
			brand: 'gigabyte',
			model: 'eagle',
			series: '3070',
            url: 'https://www.steg-electronics.ch/fr/product/gigabyte-geforce-rtx-3070-eagle-8g-27737521'
		} 					
		,{
			brand: 'asus',
			model: 'dual',
			series: '3070',
            url: 'https://www.steg-electronics.ch/fr/product/asus-dual-rtx-3070-8g-27731893'
		} 					
		,{
			brand: 'asus',
			model: 'strix',
			series: '3070',
            url: 'https://www.steg-electronics.ch/fr/product/asus-rog-strix-rtx-3070-8g-gaming-27731746'
		} 					
		,{
			brand: 'msi',
			model: 'suprim',
			series: '3070',
            url: 'https://www.steg-electronics.ch/fr/product/msi-geforce-rtx-3070-suprim-8gb-27902490'
		} 					
		,{
			brand: 'palit',
			model: 'gaming',
			series: '3070',
            url: 'https://www.steg-electronics.ch/fr/product/palit-geforce-rtx-3070-jetstream-8gb-27863402'
		} 					
		,{
			brand: 'pny',
			model: 'uprising',
			series: '3070',
            url: 'https://www.steg-electronics.ch/fr/product/pny-geforce-rtx-3070-uprising-dual-fan-8gb-27863388'
		} 					
		,{
			brand: 'pny',
			model: 'xlr8 revel',
			series: '3070',
            url: 'https://www.steg-electronics.ch/fr/product/pny-geforce-rtx-3070-xlr8-revel-epic-x-rgb-triple-fan-edition-8gb-27863360'
		} 					
		,{
			brand: 'msi',
			model: 'suprim x',
			series: '3070',
            url: 'https://www.steg-electronics.ch/fr/product/msi-geforce-rtx-3070-suprim-x-8gb-27857025'
		} 					
		,{
			brand: 'gainward',
			model: 'phantom gs',
			series: '3070',
            url: 'https://www.steg-electronics.ch/fr/product/gainward-geforce-rtx-3070-phantom-gs-8gb-27850634'
		} 					
		,{
			brand: 'inno3d',
			model: 'twin x2',
			series: '3070',
            url: 'https://www.steg-electronics.ch/fr/product/inno3d-geforce-rtx-3070-twin-x2-8gb-27796972'
		} 					
		,{
			brand: 'inno3d',
			model: 'twin x2 oc',
			series: '3070',
            url: 'https://www.steg-electronics.ch/fr/product/inno3d-geforce-rtx-3070-twin-x2-oc-8gb-27796916'
		} 					
		,{
			brand: 'kfa2',
			model: 'sg oc',
			series: '3070',
            url: 'https://www.steg-electronics.ch/fr/product/kfa2-geforce-rtx-3070-sg-oc-8gb-27796888'
		} 					
		,{
			brand: 'evga',
			model: 'ftw3',
			series: '3070',
            url: 'https://www.steg-electronics.ch/fr/product/evga-geforce-rtx-3070-ftw3-8gb-27791400'
		} 					
		,{
			brand: 'evga',
			model: 'ftw3 ultra',
			series: '3070',
            url: 'https://www.steg-electronics.ch/fr/product/evga-geforce-rtx-3070-ftw3-ultra-gaming-8gb-27791393'
		} 					
		,{
			brand: 'evga',
			model: 'xc3',
			series: '3070',
            url: 'https://www.steg-electronics.ch/fr/product/evga-geforce-rtx-3070-xc3-8gb-27791386'
		} 					
		,{
			brand: 'evga',
			model: 'xc3 ultra',
			series: '3070',
            url: 'https://www.steg-electronics.ch/fr/product/evga-geforce-rtx-3070-xc3-ultra-gaming-8gb-27791134'
		} 					
		,{
			brand: 'evga',
			model: 'xc3 black',
			series: '3070',
            url: 'https://www.steg-electronics.ch/fr/product/evga-geforce-rtx-3070-xc3-black-gaming-8gb-27791120'
		} 					
		,{
			brand: 'inno3d',
			model: 'ichill x4',
			series: '3070',
            url: 'https://www.steg-electronics.ch/fr/product/inno3d-geforce-rtx-3070-ichill-x4-27768363'
		} 					
		,{
			brand: 'palit',
			model: 'gaming pro',
			series: '3070',
            url: 'https://www.steg-electronics.ch/fr/product/palit-geforce-rtx-3070-gamingpro-27768251'
		} 					
		,{
			brand: 'palit',
			model: 'gaming pro oc',
			series: '3070',
            url: 'https://www.steg-electronics.ch/fr/product/palit-geforce-rtx-3070-gamingpro-oc-27768237'
		} 					
		,{
			brand: 'palit',
			model: 'gamerock',
			series: '3070',
            url: 'https://www.steg-electronics.ch/fr/product/palit-geforce-rtx-3070-gamerock-27768223'
		} 					
		,{
			brand: 'palit',
			model: 'gamerock oc',
			series: '3070',
            url: 'https://www.steg-electronics.ch/fr/product/palit-geforce-rtx-3070-gamerock-oc-27768209'
		} 					
		,{
			brand: 'gainward',
			model: 'phoenix',
			series: '3070',
            url: 'https://www.steg-electronics.ch/fr/product/gainward-geforce-rtx-3070-phoenix-8gb-27759788'
		} 	
		,{
			brand: 'gigabyte',
			model: 'gaming oc pro',
			series: '3060ti',
            url: 'https://www.steg-electronics.ch/fr/product/gigabyte-geforce-rtx-3060-ti-gaming-oc-pro-8g-27813891'
		} 					
		,{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3060ti',
            url: 'https://www.steg-electronics.ch/fr/product/gigabyte-geforce-rtx-3060-ti-eagle-oc-8g-27813870'
		} 					
		,{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3060ti',
            url: 'https://www.steg-electronics.ch/fr/product/gigabyte-geforce-rtx-3060-ti-gaming-oc-8g-27813884'
		} 					
		,{
			brand: 'asus',
			model: 'tuf oc',
			series: '3060ti',
            url: 'https://www.steg-electronics.ch/fr/product/asus-tuf-geforce-rtx-3060-ti-gaming-o8g-27816243'
		} 					
		,{
			brand: 'gigabyte',
			model: 'aorus master',
			series: '3060ti',
            url: 'https://www.steg-electronics.ch/fr/product/gigabyte-aorus-geforce-rtx-3060-ti-master-8g-27813863'
		} 					
		,{
			brand: 'msi',
			model: 'ventus 2x oc',
			series: '3060ti',
            url: 'https://www.steg-electronics.ch/fr/product/msi-geforce-rtx-3060-ti-ventus-2x-ocv1-8gb-27931365'
		} 					
		,{
			brand: 'zotac',
			model: 'twin edge oc',
			series: '3060ti',
            url: 'https://www.steg-electronics.ch/fr/product/zotac-geforce-rtx-3060-ti-twin-edge-oc-8gb-27851642'
		} 					
		,{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3060ti',
            url: 'https://www.steg-electronics.ch/fr/product/msi-geforce-rtx-3060-ti-gaming-x-trio-8gb-27883849'
		} 					
		,{
			brand: 'gigabyte',
			model: 'gaming oc pro',
			series: '3060ti',
            url: 'https://www.steg-electronics.ch/fr/product/gigabyte-geforce-rtx-3060-ti-gaming-oc-pro-8g-rev-2-0-27964902'
		} 					
		,{
			brand: 'gigabyte',
			model: 'vision oc',
			series: '3060ti',
            url: 'https://www.steg-electronics.ch/fr/product/gigabyte-geforce-rtx-3060-ti-vision-oc-8g-27964895'
		} 					
		,{
			brand: 'asus',
			model: 'strix',
			series: '3060ti',
            url: 'https://www.steg-electronics.ch/fr/product/asus-rog-strix-geforce-rtx-3060-ti-gaming-o8g-27816236'
		} 					
		,{
			brand: 'asus',
			model: 'dual',
			series: '3060ti',
            url: 'https://www.steg-electronics.ch/fr/product/asus-dual-geforce-rtx-3060-ti-o8g-27816775'
		} 					
		,{
			brand: 'asus',
			model: 'strix',
			series: '3060ti',
            url: 'https://www.steg-electronics.ch/fr/product/asus-rog-strix-geforce-rtx-3060-ti-gaming-8g-27816761'
		} 					
		,{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3060ti',
            url: 'https://www.steg-electronics.ch/fr/product/msi-geforce-rtx-3060-ti-ventus-3x-oc-8gb-27883856'
		} 					
		,{
			brand: 'asus',
			model: 'dual',
			series: '3060ti',
            url: 'https://www.steg-electronics.ch/fr/product/asus-dual-geforce-rtx-3060-ti-8g-27816782'
		} 					
		,{
			brand: 'palit',
			model: 'gaming pro oc',
			series: '3060ti',
            url: 'https://www.steg-electronics.ch/fr/product/palit-geforce-rtx-3060-ti-gaming-pro-oc-8gb-27897548'
		} 					
		,{
			brand: 'gigabyte',
			model: 'eagle',
			series: '3060ti',
            url: 'https://www.steg-electronics.ch/fr/product/gigabyte-geforce-rtx-3060-ti-eagle-8g-27813877'
		} 					
		,{
			brand: 'zotac',
			model: 'twin edge',
			series: '3060ti',
            url: 'https://www.steg-electronics.ch/fr/product/zotac-geforce-rtx-3060-ti-twin-edge-8gb-27851635'
		} 					
		,{
			brand: 'msi',
			model: 'ventus 2x oc',
			series: '3060ti',
            url: 'https://www.steg-electronics.ch/fr/product/msi-geforce-rtx-3060-ti-ventus-2x-oc-8gb-27883870'
		} 					
		,{
			brand: 'msi',
			model: 'gaming x',
			series: '3060ti',
            url: 'https://www.steg-electronics.ch/fr/product/msi-geforce-rtx-3060-ti-gaming-x-8gb-27979896'
		} 					
		,{
			brand: 'palit',
			model: 'dual',
			series: '3060ti',
            url: 'https://www.steg-electronics.ch/fr/product/palit-geforce-rtx-3060-ti-dual-8gb-27897849'
		} 					
		,{
			brand: 'palit',
			model: 'dual oc',
			series: '3060ti',
            url: 'https://www.steg-electronics.ch/fr/product/palit-geforce-rtx-3060-ti-dual-oc-8gb-27897646'
		} 					
		,{
			brand: 'palit',
			model: 'gaming pro',
			series: '3060ti',
            url: 'https://www.steg-electronics.ch/fr/product/palit-geforce-rtx-3060-ti-gaming-pro-8gb-27897604'
		} 					
		,{
			brand: 'evga',
			model: 'ftw3',
			series: '3060ti',
            url: 'https://www.steg-electronics.ch/fr/product/evga-geforce-rtx-3060-ti-ftw3-xc-gaming-8gb-27893166'
		} 					
		,{
			brand: 'evga',
			model: 'ftw3 black',
			series: '3060ti',
            url: 'https://www.steg-electronics.ch/fr/product/evga-geforce-rtx-3060-ti-ftw3-black-gaming-8gb-27893159'
		} 					
		,{
			brand: 'evga',
			model: 'ftw3',
			series: '3060ti',
            url: 'https://www.steg-electronics.ch/fr/product/evga-geforce-rtx-3060-ti-ftw3-gaming-8gb-27893152'
		} 					
		,{
			brand: 'evga',
			model: 'ftw3 ultra',
			series: '3060ti',
            url: 'https://www.steg-electronics.ch/fr/product/evga-geforce-rtx-3060-ti-ftw3-ultra-gaming-8gb-27893145'
		} 					
		,{
			brand: 'asus',
			model: 'tuf',
			series: '3060ti',
            url: 'https://www.steg-electronics.ch/fr/product/asus-tuf-geforce-rtx-3060-ti-gaming-8g-27816747'
		}, 		
		{//rx6800
			brand: 'gigabyte',
			model: 'gaming oc',
			series: 'rx6800',
            url: 'https://www.steg-electronics.ch/fr/product/gigabyte-radeon-rx-6800-gaming-oc-16gb-27860833'
		}, 		
		{
			brand: 'asus',
			model: 'gaming oc',
			series: 'rx6800',
            url: 'https://www.steg-electronics.ch/fr/product/asus-rog-strix-radeon-rx-6800-oc-gaming-16gb-27857193'
		}, 		
		{
			brand: 'sapphire',
			model: 'nitro+',
			series: 'rx6800',
            url: 'https://www.steg-electronics.ch/fr/product/sapphire-nitro-radeon-rx-6800-gaming-16gb-27844936'
		}, 		
		{
			brand: 'sapphire',
			model: 'pulse',
			series: 'rx6800',
            url: 'https://www.steg-electronics.ch/fr/product/sapphire-pulse-amd-radeon-rx-6800-16gb-27916007'
		}, 		
		{
			brand: 'powercolor',
			model: 'red devil',
			series: 'rx6800',
            url: 'https://www.steg-electronics.ch/fr/product/powercolor-radeon-rx-6800-red-devil-oc-16gb-27965434'
		}, 		
		{
			brand: 'gigabyte',
			model: 'amd reference',
			series: 'rx6800',
            url: 'https://www.steg-electronics.ch/fr/product/gigabyte-radeon-rx-6800-16gb-27849794'
		}, 		
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: 'rx6800',
            url: 'https://www.steg-electronics.ch/fr/product/msi-radeon-rx-6800-gaming-x-trio-16g-27931344'
		}, 		
		{
			brand: 'gigabyte',
			model: 'aorus master',
			series: 'rx6800',
            url: 'https://www.steg-electronics.ch/fr/product/gigabyte-aorus-radeon-rx-6800-master-16gb-27921103'
		}, 		
		{
			brand: 'asus',
			model: 'tuf',
			series: 'rx6800',
            url: 'https://www.steg-electronics.ch/fr/product/asus-tuf-gaming-radeon-rx-6800-oc-gaming-16gb-27857214'
		}, 		
		{//6800xt
			brand: 'gigabyte',
			model: 'gaming oc',
			series: 'rx6800xt',
            url: 'https://www.steg-electronics.ch/fr/product/gigabyte-radeon-rx-6800-xt-gaming-oc-16gb-27860826'
		}, 		
		{
			brand: 'gigabyte',
			model: 'aorus master',
			series: 'rx6800xt',
            url: 'https://www.steg-electronics.ch/fr/product/gigabyte-aorus-radeon-rx-6800-xt-master-16gb-27921327'
		}, 		
		{
			brand: 'gigabyte',
			model: 'amd reference',
			series: 'rx6800xt',
            url: 'https://www.steg-electronics.ch/fr/product/gigabyte-radeon-rx-6800-xt-16gb-27849787'
		}, 		
		{
			brand: 'asus',
			model: 'tuf oc',
			series: 'rx6800xt',
            url: 'https://www.steg-electronics.ch/fr/product/asus-tuf-gaming-radeon-rx-6800-xt-oc-gaming-16gb-27857207'
		}, 		
		{
			brand: 'sapphire',
			model: 'nitro+',
			series: 'rx6800xt',
            url: 'https://www.steg-electronics.ch/fr/product/sapphire-nitro-radeon-rx-6800-xt-gaming-16gb-27844915'
		}, 		
		{
			brand: 'xfx',
			model: 'merc',
			series: 'rx6800xt',
            url: 'https://www.steg-electronics.ch/fr/product/xfx-speedster-merc-319-amd-radeon-rx-6800-xt-black-gaming-16gb-27956803'
		}, 		
		{
			brand: 'sapphire',
			model: 'nitro+ se',
			series: 'rx6800xt',
            url: 'https://www.steg-electronics.ch/fr/product/sapphire-nitro-radeon-rx-6800-xt-se-gaming-16gb-27844929'
		}, 		
		{
			brand: 'msi',
			model: 'gaming trio',
			series: 'rx6800xt',
            url: 'https://www.steg-electronics.ch/fr/product/msi-radeon-rx-6800-xt-gaming-x-trio-16g-vga-16gb-gdrr6-hdmi-2xdp-tri-frozr-fan-27931337'
		}, 		
		{
			brand: 'powercolor',
			model: 'red devil',
			series: 'rx6800xt',
            url: 'https://www.steg-electronics.ch/fr/product/powercolor-radeon-rx-6800xt-red-devil-oc-16gb-27965455'
		}, 		
		{
			brand: 'asus',
			model: 'strix lc',
			series: 'rx6800xt',
            url: 'https://www.steg-electronics.ch/fr/product/asus-rog-strix-lc-radeon-rx-6800-xt-oc-gaming-16gb-27857186'
		}, 		
		{
			brand: 'gigabyte',
			model: 'aorus master',
			series: 'rx6800xt',
            url: 'https://www.steg-electronics.ch/fr/product/gigabyte-aorus-radeon-rx-6800-xt-master-16gb-28054460'
		}					
	],
	name: 'steg'
};
