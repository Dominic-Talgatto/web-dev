
export interface Product {
  id: number;
  image:string[];
  name: string;
  rating: number;
  reference:string;
  like: number;
  category:string;
  i:number;
}


export const products:Product[] = [
  {
    id: 1,
    image:['../assets/images/air13.png', "../assets/images/air13(1).png", '../assets/images/air13(3).png'],
    name:'MacBook Air 13" Apple M1',
    rating:4.9,
    reference:"https://kaspi.kz/shop/p/apple-macbook-air-13-mgn93-serebristyi-100798912/?c=511010000&sr=1&qid=dca2d2a8acf4f7b2e03e984fb7fde2bd&ref=shared_link",
    like: 21,
    category:'Laptop',
    i:0
  },
  {
    id: 2,
    image:['https://resources.cdn-kaspi.kz/img/m/p/h32/h76/64133486903326.jpg?format=gallery-medium'],
    name:'Lenovo V14-ADA',
    rating: 4.8,
    reference: 'https://kaspi.kz/shop/p/lenovo-v14-ada-82c6s03900-seryi-101128764/?c=750000000',
    like: 19,
    category:'Laptop',
    i:0
  },
  {
    id: 3,
    image:['https://resources.cdn-kaspi.kz/img/m/p/hc8/h11/64377753796638.jpg?format=gallery-medium'],
    name:'Acer Nitro 5 AN515-57',
    rating: 4.9,
    reference: 'https://kaspi.kz/shop/p/acer-nitro-5-an515-57-nh-qeler-008-chernyi-102710820/?c=750000000',
    like: 34,
    category:'Laptop',
    i:0
  },
  {
    id: 4,
    image:['../assets/images/pro162(1).png', '../assets/images/pro162(2).png', '../assets/images/pro162(3).png'],
    name:'MacBook Pro 16.2" Apple M1 Pro',
    rating: 4.6,
    reference: 'https://kaspi.kz/shop/p/apple-macbook-pro-16-mk183-seryi-102892102/?c=511010000&sr=1&qid=b936e882798135b0de0b751c32ad4dda&ref=shared_link',
    like: 23,
    category:'Laptop',
    i:0
  },
  {
    id: 21,
    image: ['../assets/images/21_1.png', '../assets/images/21_2.png', '../assets/images/21_3.png'],
    name: 'Apple MacBook Pro 14 M2',
    rating: 4.8,
    reference: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-mrx33-chernyi-114861358/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNbaMPzMyIPc2XrZi3BMaRWs7FHb34LH3OvhyP5Phr3v35xmq1ijqyhoCHGkQAvD_BwE',
    like: 29,
    category: 'Laptop',
    i: 0
  },
  {
    id: 23,
    image:['../assets/images/air153(1).png', '../assets/images/air153(2).png', '../assets/images/air153(3).png'],
    name:'MacBook Air 15.3" Apple M2',
    rating: 4.2,
    reference: 'https://kaspi.kz/shop/p/apple-macbook-air-15-2023-mqkw3-sinii-111217728/?c=511010000&sr=2&qid=cf1e8f4ec9b6d72586de343c413e1a40&ref=shared_link',
    like: 22,
    category:'Laptop',
    i:0
  },
  {
    id: 5,
    image: ['https://resources.cdn-kaspi.kz/img/m/p/h22/hbc/63754987274270.jpg?format=gallery-medium'],
    name:'Xiaomi Redmi 9A',
    rating: 4.7,
    reference: 'https://kaspi.kz/shop/p/xiaomi-redmi-9a-2-gb-32-gb-sinii-100399568/?c=750000000',
    like: 16,
    category:'Phone',
    i:0
  },
  {
    id: 6,
    image: ['../assets/images/iphone15pro-1.webp', '../assets/images/iphone15pro-2.jpg', '../assets/images/iphone15pro-3.webp'],
    name:'Apple Iphone 15pro max',
    rating: 4.9,
    reference: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000',
    like: 10,
    category:'Phone',
    i:0
  },
  {
    id: 7,
    image: ['../assets/images/iphone14promax-1.png', '../assets/images/iphone14promax-2.jpeg', '../assets/images/iphone14promax-3.jpg'],
    name:'Apple Iphone 14 pro max',
    rating: 4.7,
    reference: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000',
    like: 51,
    category:'Phone',
    i:0
  },
  {
    id: 8,
    image: ['https://resources.cdn-kaspi.kz/img/m/p/h22/hbf/64100908007454.jpg?format=gallery-medium'],
    name:'Samsung Galaxy A02',
    rating: 4.2,
    reference: 'https://kaspi.kz/shop/p/samsung-galaxy-a02-2-32gb-chernyi-101040270/?c=750000000',
    like: 70,
    category:'Phone',
    i:0
  },
  {
    id: 9,
    image: ['../assets/images/iphone13promax-1.jpeg', '../assets/images/iphone13promax-2.jpeg', '../assets/images/iphone13promax-3.jpeg'],
    name:'Apple Iphone 13 pro max',
    rating: 4.5,
    reference: 'https://kaspi.kz/shop/p/apple-iphone-13-pro-max-128gb-goluboi-102298789/?c=750000000',
    like: 31,
    category:'Phone',
    i:0
  },
  {
    id: 10,
    image: ['https://resources.cdn-kaspi.kz/img/m/p/h0e/hea/80671773818910.jpg?format=gallery-medium'],
    name:'Poco F5',
    rating: 4.5,
    reference: 'https://kaspi.kz/shop/p/poco-f5-12-gb-256-gb-chernyi-110270652/?c=750000000',
    like: 14,
    category:'Phone',
    i:0
  },
  {
    id: 11,
    image: ['https://resources.cdn-kaspi.kz/img/m/p/h25/h27/64376206032926.jpg?format=gallery-medium'],
    name: 'Футболка Tespe АТК0173 черный 48',
    rating: 4.8,
    reference: 'https://kaspi.kz/shop/p/futbolka-tespe-atk0173-chernyi-48-103962769/?c=750000000',
    like: 38,
    category: 'Clothes',
    i: 0
  },
  {
    id: 12,
    image: ['https://resources.cdn-kaspi.kz/img/m/p/h9d/h46/64546446213150.jpg?format=gallery-medium'],
    name: 'Комплект ALPIKA Universal 5в1 102492502 черный 42',
    rating: 4.9,
    reference: 'https://kaspi.kz/shop/p/komplekt-alpika-universal-5v1-102492502-chernyi-42-108382478/?c=750000000',
    like: 45,
    category: 'Clothes',
    i: 0
  },
  {
    id: 13,
    image: ['https://resources.cdn-kaspi.kz/img/m/p/hae/h02/68246431891486.jpg?format=gallery-medium'],
    name: 'Madame Chantal CHMD CH6736 белый 41-46',
    rating: 4.7,
    reference: 'https://kaspi.kz/shop/p/madame-chantal-chmd-ch6736-belyi-41-46-108590954/?c=750000000',
    like: 52,
    category: 'Clothes',
    i: 0
  },
  {
    id: 14,
    image: ['https://resources.cdn-kaspi.kz/img/m/p/h59/h22/84937623666718.jpg?format=gallery-medium'],
    name: '184498 зеленый 46',
    rating: 4.5,
    reference: 'https://kaspi.kz/shop/p/184498-zelenyi-46-115954805/?c=750000000',
    like: 29,
    category: 'Clothes',
    i: 0
  },
  {
    id: 15,
    image: ['https://resources.cdn-kaspi.kz/img/m/p/h4f/h30/84040087666718.jpg?format=gallery-medium'],
    name: 'Костюм Костюм трансформера 149347 мультиколор универсальный',
    rating: 4.3,
    reference: 'https://kaspi.kz/shop/p/kostjum-transformera-149347-mul-tikolor-universal-nyi-113543950/?c=750000000',
    like: 18,
    category: 'Clothes',
    i: 0
  },
  {
    id: 22,
    image: ['https://resources.cdn-kaspi.kz/img/m/p/h97/h42/84327073611806.jpg?format=gallery-medium'],
    name: 'Зимняя куртка Kendal-Jackson OG-2150 черный 48',
    rating: 4.7,
    reference: 'https://kaspi.kz/shop/p/zimnjaja-kurtka-kendal-jackson-og-2150-chernyi-48-114011506/?c=750000000',
    like: 22,
    category: 'Clothes',
    i: 0
  },
  {
    id: 20,
    image: ['https://resources.cdn-kaspi.kz/img/m/p/h28/hc3/67252819197982.jpg?format=gallery-medium'],
    name: 'Книга Жолдыбайұлы Қ.: Кемел адам',
    rating: 4.8,
    reference: 'https://kaspi.kz/shop/p/zholdybai-ly-kemel-adam-103430816/?c=750000000',
    like: 29,
    category: 'Books',
    i: 0
  },
  {
    id: 17,
    image: ['https://resources.cdn-kaspi.kz/img/m/p/h92/h9f/84916462157854.png?format=gallery-medium'],
    name: 'Книга Джейн Остин: Тәкаппар ғашықтар',
    rating: 4.7,
    reference: 'https://kaspi.kz/shop/p/dzhein-ostin-t-kappar-ashy-tar-105934631/?c=750000000',
    like: 19,
    category: 'Books',
    i: 0
  },
  {
    id: 18,
    image: ['https://resources.cdn-kaspi.kz/img/m/p/h53/h80/63813537857566.jpg?format=gallery-medium'],
    name: "Книга Кабейн О. Ф.: Харизма: Как влиять, убеждать и вдохновлять",
    rating: 4.6,
    reference: 'https://kaspi.kz/shop/p/kabein-o-f-harizma-kak-vlijat-ubezhdat-i-vdohnovljat--26001091/?c=750000000',
    like: 32,
    category: 'Books',
    i: 0
  },
  {
    id: 19,
    image: ['https://resources.cdn-kaspi.kz/img/m/p/hb7/h99/64090025525278.jpg?format=gallery-medium'],
    name: 'Книга Исабеков Д.: Гауһар тас',
    rating: 4.5,
    reference: 'https://kaspi.kz/shop/p/isabekov-d-gau-ar-tas-101501105/?c=750000000',
    like: 24,
    category: 'Books',
    i: 0
  },
  {
    id: 16,
    image: ['https://resources.cdn-kaspi.kz/img/m/p/h30/he1/63838700634142.jpg?format=gallery-medium'],
    name: 'Настольная игра UNO 42003',
    rating: 4.4,
    reference: 'https://kaspi.kz/shop/p/uno-42003-10101521/?c=750000000',
    like: 25,
    category: 'Books',
    i: 0
  }
];



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/