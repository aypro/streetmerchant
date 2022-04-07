import {Store} from './store';

export const AmazonFr: Store = {
  backoffStatusCodes: [403, 429, 503],
  currency: '€',
  labels: {
    captcha: {
      container: 'body',
      text: ['entrez les caractères que vous voyez ci-dessous'],
    },
    captchaHandler: {
      challenge: '.a-row > img',
      input: '#captchacharacters',
      submit: 'button[type="submit"]',
    },
    inStock: {
      container: '.tabular-buybox-text',
      //container: '#desktop_buybox',
      text: ['Amazon'],
    },
    maxPrice: {
      container: '.a-text-price',
      euroFormat: true,
    },
    outOfStock: [
      {
        container: '#availability',
        text: ['Actuellement indisponible'],
      },
    ],
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.amazon.fr/dp/B07PW9VBK5',
    },
    {
      brand: 'mushoku_tensei',
      model: '1',
      series: 'novel',
      url: 'https://www.amazon.fr/dp/1642751383',
    },    
    {
      brand: 'mushoku_tensei',
      model: '2',
      series: 'novel',
      url: 'https://www.amazon.fr/dp/1642751405',
    }, 
    // {
    //   brand: 'mushoku_tensei',
    //   model: '3',
    //   series: 'novel',
    //   url: 'https://www.amazon.fr/dp/B07S5ZC1KS',
    // }, 
    {
      brand: 'mushoku_tensei',
      model: '4',
      series: 'novel',
      url: 'https://www.amazon.fr/dp/B07W4FZWDL',
    }, 
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
      url: 'https://www.amazon.fr/dp/1645057933',
    }, 
    {
      brand: 'mushoku_tensei',
      model: '9',
      series: 'novel',
      url: 'https://www.amazon.fr/dp/1645059529',
    }, 
    {
      brand: 'mushoku_tensei',
      model: '10',
      series: 'novel',
      url: 'https://www.amazon.fr/dp/1648270875',
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
      url: 'https://www.amazon.fr/dp/164827322X',
    }, 
    {
      brand: 'mushoku_tensei',
      model: '14',
      series: 'novel',
      url: 'https://www.amazon.fr/dp/B09JS163FH',
    }, 
    // {
    //   brand: 'mushoku_tensei',
    //   model: '15',
    //   series: 'novel',
    //   url: 'https://www.amazon.fr/dp/1638581282',
    // }, 
    {
      brand: 'mushoku_tensei',
      model: '16',
      series: 'novel',
      url: 'https://www.amazon.fr/dp/1638581940',
    }, 
    {
      brand: 'mushoku_tensei',
      model: '17',
      series: 'novel',
      url: 'https://www.amazon.fr/dp/1638582416',
    }                                                         
  ],
  name: 'amazon-fr',
};
