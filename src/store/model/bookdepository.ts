import {Store} from './store';

export const Bookdepository: Store = {
  backoffStatusCodes: [403, 429, 503],
  currency: 'CHF',
  labels: {
    inStock: {
      container: '.add-to-basket',
      //container: '#desktop_buybox',
      text: ['Add to basket'],
    },
    // maxPrice: {
    //   container: '.a-text-price',
    //   euroFormat: true,
    // },
    outOfStock: [
      {
        container: '.red-text',
        text: ['Currently unavailable'],
      },
    ],
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.bookdepository.com/Mushoku-Tensei-Jobless-Reincarnation-Light-Novel-Vol-1-Rifujin-Na-Magonote/9781642751383',
    },
    // {
    //   brand: 'mushoku_tensei',
    //   model: '1',
    //   series: 'novel',
    //   url: 'https://www.amazon.fr/dp/1642751383',
    // },    
    // {
    //   brand: 'mushoku_tensei',
    //   model: '2',
    //   series: 'novel',
    //   url: 'https://www.amazon.fr/dp/1642751405',
    // }, 
    // {
    //   brand: 'mushoku_tensei',
    //   model: '3',
    //   series: 'novel',
    //   url: 'https://www.amazon.fr/dp/B07S5ZC1KS',
    // }, 
    // {
    //   brand: 'mushoku_tensei',
    //   model: '4',
    //   series: 'novel',
    //   url: 'https://www.amazon.fr/dp/B07W4FZWDL',
    // }, 
    // {
    //   brand: 'mushoku_tensei',
    //   model: '5',
    //   series: 'novel',
    //   url: 'https://www.amazon.fr/dp/1645052281',
    // }, 
    // {
    //   brand: 'mushoku_tensei',
    //   model: '6',
    //   series: 'novel',
    //   url: 'https://www.amazon.fr/dp/1645054888',
    // }, 
    // {
    //   brand: 'mushoku_tensei',
    //   model: '7',
    //   series: 'novel',
    //   url: 'https://www.amazon.fr/dp/1645057534',
    // }, 
    {
      brand: 'mushoku_tensei',
      model: '8',
      series: 'novel',
      url: 'https://www.bookdepository.com/Mushoku-Tensei-Jobless-Reincarnation-Light-Novel-Vol-8-Rifujin-Na-Magonote/9781645057932',
    }, 
    {
      brand: 'mushoku_tensei',
      model: '9',
      series: 'novel',
      url: 'https://www.bookdepository.com/Mushoku-Tensei-Jobless-Reincarnation-Light-Novel-Vol-9-Rifujin-Na-Magonote/9781645059523',
    }, 
    {
      brand: 'mushoku_tensei',
      model: '10',
      series: 'novel',
      url: 'https://www.bookdepository.com/Mushoku-Tensei-Jobless-Reincarnation-Light-Novel-Vol-10-Rifujin-Na-Magonote/9781648270871',
    }, 
    // {
    //   brand: 'mushoku_tensei',
    //   model: '11',
    //   series: 'novel',
    //   url: 'https://www.amazon.fr/dp/1648272223',
    // }, 
    // {
    //   brand: 'mushoku_tensei',
    //   model: '12',
    //   series: 'novel',
    //   url: 'https://www.amazon.fr/dp/1648272606',
    // }, 
    {
      brand: 'mushoku_tensei',
      model: '13',
      series: 'novel',
      url: 'https://www.bookdepository.com/Mushoku-Tensei-Jobless-Reincarnation-Light-Novel-Vol-13-Rifujin-na-Magonote/9781648273223',
    }, 
    // {
    //   brand: 'mushoku_tensei',
    //   model: '14',
    //   series: 'novel',
    //   url: 'https://www.amazon.fr/dp/B09JS163FH',
    // }, 
    // {
    //   brand: 'mushoku_tensei',
    //   model: '15',
    //   series: 'novel',
    //   url: 'https://www.amazon.fr/dp/1638581282',
    // }, 
    // {
    //   brand: 'mushoku_tensei',
    //   model: '16',
    //   series: 'novel',
    //   url: 'https://www.amazon.fr/dp/1638581940',
    // }, 
    // {
    //   brand: 'mushoku_tensei',
    //   model: '17',
    //   series: 'novel',
    //   url: 'https://www.amazon.fr/dp/1638582416',
    // }                                                         
  ],
  name: 'bookdepository',
};
