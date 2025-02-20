import {Store} from './store';

export const Digitec: Store = {
	minPageSleep: 60000,
	maxPageSleep: 300000,	
	currency: 'CHF',
	labels: {
		inStock:	[
			{
	            container: '#secondHand',
            	text: ['Buy secondhand']
        	}/*,
			{
	            container: '.availabilityText',
            	text: ['Delivered']
        	}	*/		
		]
	},
	links: [
		{
			brand: 'sony',
			model: 'ps5 digital',
			series: 'sonyps5de',
      url: 'https://www.digitec.ch/en/s1/product/13329224'
		},
		{
			brand: 'sony',
			model: 'ps5 console',
			series: 'sonyps5c',
      url: 'https://www.digitec.ch/en/s1/product/12664145'
    },	
/*		
		{
			brand: 'amd',
			model: '3200g',
			series: 'ryzen3200g',
            url: 'https://www.digitec.ch/en/s1/product/11239815'
        },
		{
			brand: 'amd',
			model: '3400g',
			series: 'ryzen3400g',
            url: 'https://www.digitec.ch/en/s1/product/11239818'
        }, 		
		{
			brand: 'asus',
			model: 'dual',
			series: '3060',
            url: 'https://www.digitec.ch/en/s1/product/14889206'
        },		
		{
			brand: 'evga',
			model: 'xc gaming',
			series: '3060',
            url: 'https://www.digitec.ch/en/s1/product/14985153'
        },		
		{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3060',
            url: 'https://www.digitec.ch/en/s1/product/14788295'
        },
		{
			brand: 'gigabyte',
			model: 'vision oc',
			series: '3060',
            url: 'https://www.digitec.ch/en/s1/product/14908651'
        },
		{
			brand: 'kfa2',
			model: 'sg oc',
			series: '3060',
            url: 'https://www.digitec.ch/en/s1/product/14888803'
        },
		{
			brand: 'msi',
			model: 'ventus 3x',
			series: '3060',
            url: 'https://www.digitec.ch/en/s1/product/14884787'
        },
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3060',
            url: 'https://www.digitec.ch/en/s1/product/14788294'
        },
		{
			brand: 'asus',
			model: 'tuf',
			series: '3060',
            url: 'https://www.digitec.ch/en/s1/product/14850250'
        },
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3060',
            url: 'https://www.digitec.ch/en/s1/product/14884626'
        },
		{
			brand: 'msi',
			model: 'gaming x',
			series: '3060',
            url: 'https://www.digitec.ch/en/s1/product/14884786'
        },
		{
			brand: 'asus',
			model: 'strix',
			series: '3060',
            url: 'https://www.digitec.ch/en/s1/product/14784186'
        },
		{
			brand: 'zotac',
			model: 'twin edge oc',
			series: '3060',
            url: 'https://www.digitec.ch/en/s1/product/14884788'
        },		
		{
			brand: 'kfa2',
			model: 'sg oc',
			series: '3070',
            url: 'https://www.digitec.ch/en/s1/product/14594374'
        },
		{
			brand: 'asus',
			model: 'dual',
			series: '3070',
            url: 'https://www.digitec.ch/en/s1/product/13798669'
        },
		{
			brand: 'asus',
			model: 'dual oc',
			series: '3070',
            url: 'https://www.digitec.ch/en/s1/product/13689612'
        }, 			
		{
			brand: 'asus',
			model: 'strix oc',
			series: '3070',
            url: 'https://www.digitec.ch/en/s1/product/13870737'
        }, 			
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3070',
            url: 'https://www.digitec.ch/en/s1/product/13894685'
        }, 			
		{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3070',
            url: 'https://www.digitec.ch/en/s1/product/13894686'
        }, 			
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3070',
            url: 'https://www.digitec.ch/en/s1/product/13799104'
        }, 			
		{
			brand: 'msi',
			model: 'ventus 3x',
			series: '3070',
            url: 'https://www.digitec.ch/en/s1/product/13799193'
        }, 			
		{
			brand: 'msi',
			model: 'ventus 2x',
			series: '3070',
            url: 'https://www.digitec.ch/en/s1/product/13799260'
        }, 					
		{
			brand: 'palit',
			model: 'gaming pro',
			series: '3070',
            url: 'https://www.digitec.ch/en/s1/product/14036311'
        }, 			
		{
			brand: 'zotac',
			model: 'twin edge',
			series: '3070',
            url: 'https://www.digitec.ch/en/s1/product/13752196'
        }, 			
		{
			brand: 'zotac',
			model: 'twin edge oc',
			series: '3070',
            url: 'https://www.digitec.ch/en/s1/product/13913888'
        }, 			
		{
			brand: 'kfa2',
			model: 'sg oc',
			series: '3070',
            url: 'https://www.digitec.ch/en/s1/product/14079527'
        }, 			
		{
			brand: 'asus',
			model: 'strix',
			series: '3070',
            url: 'https://www.digitec.ch/en/s1/product/13870827'
        }, 			
		{
			brand: 'asus',
			model: 'tuf',
			series: '3070',
            url: 'https://www.digitec.ch/en/s1/product/13881950'
        }, 		
		{
			brand: 'evga',
			model: 'xc3 ultra',
			series: '3070',
            url: 'https://www.digitec.ch/en/s1/product/14036617'
        }, 			
		{
			brand: 'evga',
			model: 'ftw3',
			series: '3070',
            url: 'https://www.digitec.ch/en/s1/product/14036624'
        }, 			
		{
			brand: 'evga',
			model: 'ftw3 ultra',
			series: '3070',
            url: 'https://www.digitec.ch/en/s1/product/14036650'
        }, 			
		{
			brand: 'evga',
			model: 'xc3',
			series: '3070',
            url: 'https://www.digitec.ch/en/s1/product/13798659'
        }, 			
		{
			brand: 'evga',
			model: 'xc3',
			series: '3070',
            url: 'https://www.digitec.ch/en/s1/product/13798661'
        }, 			
		{
			brand: 'gainward',
			model: 'phoenix gs',
			series: '3070',
            url: 'https://www.digitec.ch/en/s1/product/14079610'
        }, 			
		{
			brand: 'gainward',
			model: 'phoenix',
			series: '3070',
            url: 'https://www.digitec.ch/en/s1/product/14079611'
        }, 			
		{
			brand: 'gigabyte',
			model: 'vision oc',
			series: '3070',
            url: 'https://www.digitec.ch/en/s1/product/14100150'
        }, 			
		{
			brand: 'gigabyte',
			model: 'aorus master',
			series: '3070',
            url: 'https://www.digitec.ch/en/s1/product/14100200'
        }, 			
		{
			brand: 'gigabyte',
			model: 'eagle',
			series: '3070',
            url: 'https://www.digitec.ch/en/s1/product/13894876'
        },		 			
		{
			brand: 'msi',
			model: 'gaming trio',
			series: '3070',
            url: 'https://www.digitec.ch/en/s1/product/13799116'
        }, 	
		{
			brand: 'msi',
			model: 'suprim x',
			series: '3070',
            url: 'https://www.digitec.ch/en/s1/product/14370973'
        }, 		
		{
			brand: 'kfa2',
			model: 'sg oc',
			series: '3070',
            url: 'https://www.digitec.ch/en/s1/product/14594373'
        }, 		
		{
			brand: 'asus',
			model: 'tuf',
			series: '3070',
            url: 'https://www.digitec.ch/en/s1/product/14518026'
        }, 		
		{
			brand: 'amd',
			model: '5900x',
			series: 'ryzen5900',
			url: 'https://www.digitec.ch/en/s1/product/13987917'
        }, 		
		{
			brand: 'amd',
			model: '5600x',
			series: 'ryzen5600',
      url: 'https://www.digitec.ch/en/s1/product/13987919'
		}, 	         
 		{
			brand: 'gigabyte',
			model: 'eagle',
			series: '3080',
            url: 'https://www.digitec.ch/en/s1/product/14178869'
        },        
		{
			brand: 'msi',
			model: 'ventus 3x',
			series: '3080',
            url: 'https://www.digitec.ch/en/s1/product/13689638'
        },       
		{
			brand: 'asus',
			model: 'tuf',
			series: '3080',
            url: 'https://www.digitec.ch/en/s1/product/13689607'
		},    
		{
			brand: 'asus',
			model: 'tuf oc',
			series: '3080',
            url: 'https://www.digitec.ch/en/s1/product/13689633'
        },  		    
		{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3080',
            url: 'https://www.digitec.ch/en/s1/product/13689627'
        },        
		{
			brand: 'inno3d',
			model: 'twin x2 oc',
			series: '3080',
            url: 'https://www.digitec.ch/en/s1/product/13833976'
        },    
		{
			brand: 'zotac',
			model: 'trinity',
			series: '3080',
            url: 'https://www.digitec.ch/en/s1/product/13752167'
        },     
		{
			brand: 'palit',
			model: 'gaming pro',
			series: '3080',
            url: 'https://www.digitec.ch/en/s1/product/13785876'
        },    
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3080',
            url: 'https://www.digitec.ch/en/s1/product/13689639'
        },   
		{
			brand: 'zotac',
			model: 'trinity oc',
			series: '3080',
            url: 'https://www.digitec.ch/en/s1/product/13874271'
        },      
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3080',
            url: 'https://www.digitec.ch/en/s1/product/13689626'
        },      
		{
			brand: 'msi',
			model: 'suprim x',
			series: '3080',
            url: 'https://www.digitec.ch/en/s1/product/14370977'
        },      
		{
			brand: 'gigabyte',
			model: 'vision oc',
			series: '3080',
            url: 'https://www.digitec.ch/en/s1/product/13870881'
        },      
		{
			brand: 'zotac',
			model: 'amp holo',
			series: '3080',
            url: 'https://www.digitec.ch/en/s1/product/14117979'
        },      
		{
			brand: 'asus',
			model: 'strix',
			series: '3080',
            url: 'https://www.digitec.ch/en/s1/product/13751736'
        },      
		{
			brand: 'asus',
			model: 'strix oc',
			series: '3080',
            url: 'https://www.digitec.ch/en/s1/product/13751783'
        },      
		{
			brand: 'evga',
			model: 'xc3 black',
			series: '3080',
            url: 'https://www.digitec.ch/en/s1/product/13689643'
        },      
		{
			brand: 'evga',
			model: 'xc3',
			series: '3080',
            url: 'https://www.digitec.ch/en/s1/product/13689644'
        },      
		{
			brand: 'inno3d',
			model: 'ichill x3',
			series: '3080',
            url: 'https://www.digitec.ch/en/s1/product/13833972'
        },      
		{
			brand: 'palit',
			model: 'gaming pro oc',
			series: '3080',
            url: 'https://www.digitec.ch/en/s1/product/13785875'
        },      
		{
			brand: 'evga',
			model: 'ftw3',
			series: '3080',
            url: 'https://www.digitec.ch/en/s1/product/13689642'
        },      
		{
			brand: 'inno3d',
			model: 'ichill x4',
			series: '3080',
            url: 'https://www.digitec.ch/en/s1/product/13833814'
        },      
		{
			brand: 'gigabyte',
			model: 'aorus xtreme',
			series: '3080',
            url: 'https://www.digitec.ch/en/s1/product/13689618'
        },      
		{
			brand: 'kfa2',
			model: 'sg oc',
			series: '3080',
            url: 'https://www.digitec.ch/en/s1/product/13821524'
        },      
		{
			brand: 'evga',
			model: 'ftw3 ultra',
			series: '3080',
            url: 'https://www.digitec.ch/en/s1/product/13752263'
		}, 
		{
			brand: 'pny',
			model: 'xlr8 revel',
			series: '3080',
            url: 'https://www.digitec.ch/en/s1/product/15969325'
		}, 		
		{
			brand: 'asus',
			model: 'tuf',
			series: '3090',
            url: 'https://www.digitec.ch/en/s1/product/13689186'
		},      
		{
			brand: 'asus',
			model: 'tuf oc',
			series: '3090',
            url: 'https://www.digitec.ch/en/s1/product/13751303'
		},      
		{
			brand: 'asus',
			model: 'strix',
			series: '3090',
            url: 'https://www.digitec.ch/en/s1/product/13689634'
		},      
		{
			brand: 'asus',
			model: 'strix',
			series: '3090',
            url: 'https://www.digitec.ch/en/s1/product/13751920'
		},      
		{
			brand: 'evga',
			model: 'xc3 black',
			series: '3090',
            url: 'https://www.digitec.ch/en/s1/product/13689630'
		},      
		{
			brand: 'evga',
			model: 'xc3 ultra',
			series: '3090',
            url: 'https://www.digitec.ch/en/s1/product/13689636'
		},      
		{
			brand: 'evga',
			model: 'xc3',
			series: '3090',
            url: 'https://www.digitec.ch/en/s1/product/13689631'
		},    
		{
			brand: 'msi',
			model: 'suprim x',
			series: '3090',
            url: 'https://www.digitec.ch/en/s1/product/14370978'
		}, 		
		{
			brand: 'gainward',
			model: 'phantom gaming',
			series: '3090',
            url: 'https://www.digitec.ch/en/s1/product/14174533'
		},   		 
		{
			brand: 'evga',
			model: 'xc3 ultra',
			series: '3090',
            url: 'https://www.digitec.ch/en/s1/product/13689641'
		},  		 
		{
			brand: 'gainward',
			model: 'phoenix gs',
			series: '3090',
            url: 'https://www.digitec.ch/en/s1/product/13785877'
		},      
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3090',
            url: 'https://www.digitec.ch/en/s1/product/13689616'
		},      
		{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3090',
            url: 'https://www.digitec.ch/en/s1/product/13689617'
		},      
		{
			brand: 'gigabyte',
			model: 'aorus xtreme',
			series: '3090',
            url: 'https://www.digitec.ch/en/s1/product/13689614'
		},      
		{
			brand: 'gigabyte',
			model: 'aorus master',
			series: '3090',
            url: 'https://www.digitec.ch/en/s1/product/13689615'
		},      
		{
			brand: 'msi',
			model: 'ventus 3x',
			series: '3090',
            url: 'https://www.digitec.ch/en/s1/product/13689635'
		},      
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3090',
            url: 'https://www.digitec.ch/en/s1/product/13689637'
		},      
		{
			brand: 'palit',
			model: 'gaming pro',
			series: '3090',
            url: 'https://www.digitec.ch/en/s1/product/13785873'
		},      
		{
			brand: 'palit',
			model: 'gaming pro oc',
			series: '3090',
            url: 'https://www.digitec.ch/en/s1/product/13788119'
		},      
		{
			brand: 'asus',
			model: 'ekwb',
			series: '3090',
            url: 'https://www.digitec.ch/en/s1/product/14132494'
		},    		
		{
			brand: 'zotac',
			model: 'trinity',
			series: '3090',
            url: 'https://www.digitec.ch/en/s1/product/13752152'
		}, 
 		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3060ti',
            url: 'https://www.digitec.ch/en/s1/product/14365531'
		},   
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3060ti',
            url: 'https://www.digitec.ch/en/s1/product/14365529'
		},
		{
			brand: 'gigabyte',
			model: 'gaming pro oc',
			series: '3060ti',
            url: 'https://www.digitec.ch/en/s1/product/14159266'
		},
		{
			brand: 'msi',
			model: 'ventus 2x oc',
			series: '3060ti',
            url: 'https://www.digitec.ch/en/s1/product/14365532'
		},
		{
			brand: 'zotac',
			model: 'twin edge',
			series: '3060ti',
            url: 'https://www.digitec.ch/en/s1/product/14351303'
		},
		{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3060ti',
            url: 'https://www.digitec.ch/en/s1/product/14159290'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3060ti',
            url: 'https://www.digitec.ch/en/s1/product/14159285'
		},
		{
			brand: 'gigabyte',
			model: 'aorus master',
			series: '3060ti',
            url: 'https://www.digitec.ch/en/s1/product/14159176'
		},
		{
			brand: 'asus',
			model: 'dual',
			series: '3060ti',
            url: 'https://www.digitec.ch/en/s1/product/14131791'
		},
		{
			brand: 'gigabyte',
			model: 'eagle',
			series: '3060ti',
            url: 'https://www.digitec.ch/en/s1/product/14159322'
		},
		{
			brand: 'asus',
			model: 'tuf',
			series: '3060ti',
            url: 'https://www.digitec.ch/en/s1/product/14131773'
		},
		{
			brand: 'asus',
			model: 'strix',
			series: '3060ti',
            url: 'https://www.digitec.ch/en/s1/product/14131786'
		},
		{
			brand: 'kfa2',
			model: 'gaming',
			series: '3060ti',
            url: 'https://www.digitec.ch/en/s1/product/14396890'
		},
		{
			brand: 'asus',
			model: 'tuf',
			series: '3060ti',
            url: 'https://www.digitec.ch/en/s1/product/14131769'
		},
		{
			brand: 'asus',
			model: 'amd reference',
			series: 'rx6700xt',
            url: 'https://www.digitec.ch/en/s1/product/15300602'
		},	
		{
			brand: 'gigabyte',
			model: 'amd reference',
			series: 'rx6700xt',
            url: 'https://www.digitec.ch/en/s1/product/15301189'
		},	
		{
			brand: 'sapphire',
			model: 'gaming',
			series: 'rx6700xt',
            url: 'https://www.digitec.ch/en/s1/product/15059559'
		},	
		{
			brand: 'asus',
			model: 'strix',
			series: 'rx6700xt',
            url: 'https://www.digitec.ch/en/s1/product/15300518'
		},	
		{
			brand: 'asus',
			model: 'dual',
			series: 'rx6700xt',
            url: 'https://www.digitec.ch/en/s1/product/15300540'
		},	
		{
			brand: 'asus',
			model: 'tuf',
			series: 'rx6700xt',
            url: 'https://www.digitec.ch/en/s1/product/15300561'
		},	
		{
			brand: 'gigabyte',
			model: 'aorus',
			series: 'rx6700xt',
            url: 'https://www.digitec.ch/en/s1/product/15301182'
		},	
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: 'rx6700xt',
            url: 'https://www.digitec.ch/en/s1/product/15301187'
		},	
		{
			brand: 'gigabyte',
			model: 'eagle',
			series: 'rx6700xt',
            url: 'https://www.digitec.ch/en/s1/product/15301188'
		},	
		{
			brand: 'sapphire',
			model: 'nitro oc',
			series: 'rx6700xt',
            url: 'https://www.digitec.ch/en/s1/product/15059558'
		},			
		{
			brand: 'sapphire',
			model: 'nitro+',
			series: 'rx6800xt',
            url: 'https://www.digitec.ch/en/s1/product/14195675'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: 'rx6800xt',
            url: 'https://www.digitec.ch/en/s1/product/14367227'
		},
		{
			brand: 'sapphire',
			model: 'nitro+',
			series: 'rx6800xt',
            url: 'https://www.digitec.ch/en/s1/product/14195666'
		},
		{
			brand: 'asus',
			model: 'tuf',
			series: 'rx6800xt',
            url: 'https://www.digitec.ch/en/s1/product/14370347'
		},
		{
			brand: 'asus',
			model: 'strix lc',
			series: 'rx6800xt',
            url: 'https://www.digitec.ch/en/s1/product/14370346'
		},
		{
			brand: 'sapphire',
			model: 'nitro+',
			series: 'rx6800',
            url: 'https://www.digitec.ch/en/s1/product/14195702'
		},
		{
			brand: 'asus',
			model: 'strix',
			series: 'rx6800',
            url: 'https://www.digitec.ch/en/s1/product/14370360'
		},
		{
			brand: 'asus',
			model: 'tuf',
			series: 'rx6800',
            url: 'https://www.digitec.ch/en/s1/product/14370361'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: 'rx6800',
            url: 'https://www.digitec.ch/en/s1/product/14367226'
		},
		{
			brand: 'asus',
			model: 'gaming',
			series: 'rx6900xt',
            url: 'https://www.digitec.ch/en/s1/product/14406423'
		},	
		{
			brand: 'evga',
			model: 'ftw3 ultra',
			series: '3080ti',
            url: 'https://www.digitec.ch/en/s1/product/15950007'
		},	
		{
			brand: 'evga',
			model: 'ftw3',
			series: '3080ti',
            url: 'https://www.digitec.ch/en/s1/product/15950246'
		},
		{
			brand: 'evga',
			model: 'xc3 ultra',
			series: '3080ti',
            url: 'https://www.digitec.ch/en/s1/product/15950261'
		},	
		{
			brand: 'evga',
			model: 'ftw3 ultra',
			series: '3080ti',
            url: 'https://www.digitec.ch/en/s1/product/15950300'
		},
		{
			brand: 'evga',
			model: 'xc3 black',
			series: '3080ti',
            url: 'https://www.digitec.ch/en/s1/product/15950301'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3080ti',
            url: 'https://www.digitec.ch/en/s1/product/15950524'
		},
		{
			brand: 'msi',
			model: 'suprim x',
			series: '3080ti',
            url: 'https://www.digitec.ch/en/s1/product/15950523'
		},
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3080ti',
            url: 'https://www.digitec.ch/en/s1/product/15950525'
		},
		{
			brand: 'asus',
			model: 'strix oc',
			series: '3080ti',
            url: 'https://www.digitec.ch/en/s1/product/15950304'
		},
		{
			brand: 'asus',
			model: 'strix',
			series: '3080ti',
            url: 'https://www.digitec.ch/en/s1/product/15950453'
		},
		{
			brand: 'asus',
			model: 'gaming oc',
			series: '3080ti',
            url: 'https://www.digitec.ch/en/s1/product/15950454'
		},
		{
			brand: 'asus',
			model: 'tuf',
			series: '3080ti',
            url: 'https://www.digitec.ch/en/s1/product/15950455'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3070ti',
            url: 'https://www.digitec.ch/en/s1/product/16006611'
		},
		{
			brand: 'asus',
			model: 'strix oc',
			series: '3070ti',
            url: 'https://www.digitec.ch/en/s1/product/16001074'
		},	
		{
			brand: 'msi',
			model: 'suprim x',
			series: '3070ti',
            url: 'https://www.digitec.ch/en/s1/product/16006610'
		},	*/						
	],
	name: 'digitec'
};
