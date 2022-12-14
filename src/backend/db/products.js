import { v4 as uuid } from "uuid";
// import cardImg from '../../Assets/cardImg.jpg';

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */




export const products = [
  {
    _id: uuid(),
    title: 'Iphone 13 pro max',
    memory: '8 + 512',
    price: 179000,
    brand: 'Apple',
    image:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/thumbnail-elle-iphone-v1-1646951767.jpg?crop=1.00xw:1.00xh;0,0&resize=980:*',
    badge: 'NEW',
    rating: 4.5,
    regularPrice: 189999,
    quantity: 0,
  },
  {
    _id: uuid(),
    title: 'Iphone 13 pro',
    memory: '8 + 512',
    price: 129000,
    brand: 'Apple',
    image:
      'https://images.moneycontrol.com/static-mcnews/2021/10/Web_Photo_Editor-10.jpg?impolicy=website&width=770&height=431',
    rating: 4.2,
    regularPrice: 139999,
    quantity: 0,
  },
  {
    _id: uuid(),
    title: 'Iphone 13',
    memory: '8 + 512',
    price: 89999,
    brand: 'Apple',
    image:
      'https://images.moneycontrol.com/static-mcnews/2021/10/Apple-iPhone-13-4.jpg?impolicy=website&width=770&height=431',
    badge: null,
    rating: 3.5,
    regularPrice: 99999,
    quantity: 0,
  },
  {
    _id: uuid(),
    title: 'Iphone 12 pro max',
    memory: '8 + 512',
    price: 169000,
    brand: 'Apple',
    image:
      'https://photos5.appleinsider.com/gallery/38808-74050-iPhone-12-Pro-Max-Back-xl.jpg',
    badge: 'AD',
    rating: 4,
    regularPrice: 179999,
    quantity: 0,
  },
  {
    _id: uuid(),
    title: 'Iphone 12 pro',
    memory: '8 + 512',
    price: 119000,
    brand: 'Apple',
    image:
      'https://photos5.appleinsider.com/gallery/38808-74050-iPhone-12-Pro-Max-Back-xl.jpg',
    badge: null,
    rating: 3.5,
    regularPrice: 129999,
    quantity: 0,
  },
  {
    _id: uuid(),
    title: 'Iphone 12',
    memory: '8 + 512',
    price: 79999,
    brand: 'Apple',
    image:
      'https://images.hindustantimes.com/tech/img/2022/05/18/960x540/anh-nhat-jEXjwIjkXrc-unsplash_1648017826487_1652849210714.jpg',
    badge: null,
    rating: 2.8,
    regularPrice: 89999,
    quantity: 0,
  },

  {
    _id: uuid(),
    title: 'Pixel 7',
    memory: '12 + 512',
    price: 97000,
    brand: 'Google',
    image:
      'https://cdn.mos.cms.futurecdn.net/FaxHL5u4xetNDLtkHHQW8g-1024-80.jpg.webp',
    badge: 'NEW',
    rating: 5,
    regularPrice: 99999,
    quantity: 0,
  },
  {
    _id: uuid(),
    title: 'Pixel 6',
    memory: '12 + 256',
    price: 87000,
    brand: 'Google',
    image:
      'https://media.wired.com/photos/61733d740286fd78a4554d8d/master/pass/Google-Pixel-6-Pro-Coral.jpg',
    badge: null,
    rating: 4,
    regularPrice: 92999,
    quantity: 0,
  },

  {
    _id: uuid(),
    title: 'Pixel 5',
    memory: '8 + 128',
    price: 56000,
    brand: 'Google',
    image:
      'https://cdn.vox-cdn.com/thumbor/oK3_1KvfWJaEhDGmEYYzS0MZE60=/0x0:2040x1360/1720x0/filters:focal(0x0:2040x1360):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/22781446/ajohnson_210813_4713_0001.jpg',
    badge: null,
    rating: 2,
    regularPrice: 66999,
    quantity: 0,
  },

  {
    _id: uuid(),
    title: 'Pixel 3',
    memory: '6 + 64',
    price: 39999,
    brand: 'Google',
    image:
      'https://i0.wp.com/gadgetfeatures.com/wp-content/uploads/2019/02/Fix-Google-Pixel-3-Pixel-3-XL-WiFi-Connection-Problem-With-Internet-1.jpg?fit=1200%2C800&ssl=1',
    badge: null,
    rating: 3,
    regularPrice: 58999,
    quantity: 0,
  },
  {
    _id: uuid(),
    title: 'Galaxy S22 Ultra',
    memory: '12 + 1024',
    price: 189000,
    brand: 'Samsung',
    image:
      'https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2022/02/samsung_galaxy_s22_ultra_1.jpg?w=2000&quality=82&strip=all&ssl=1',
    badge: 'NEW',
    rating: 4,
    regularPrice: 198999,
    quantity: 0,
  },
  {
    _id: uuid(),
    title: 'Galaxy S22 Plus',
    memory: '12 + 512',
    price: 156000,
    brand: 'Samsung',
    image:
      'https://www.independent.ie/business/technology/e59a7/41345852.ece/AUTOCROP/w1240/D9EB1E70-4BB8-42D9-946D-AB0F680D827D.jpeg',
    badge: null,
    rating: 3,
    regularPrice: 167999,
    quantity: 0,
  },
  {
    _id: uuid(),
    title: 'Galaxy S22',
    memory: '12 + 512',
    price: 112000,
    brand: 'Samsung',
    image:
      'https://www.sammobile.com/wp-content/uploads/2022/04/Samsung-Galaxy-S22-Rear-Design.jpg',
    badge: null,
    rating: 2,
    regularPrice: 128999,
    quantity: 0,
  },
  {
    _id: uuid(),
    title: 'Oneplus 10 pro',
    memory: '12 + 512',
    price: 78999,
    brand: 'Oneplus',
    image:
      'https://knowtechie.com/wp-content/uploads/2022/04/oneplus-10-pro.jpg.webp',
    badge: 'NEW',
    rating: 2.8,
    regularPrice: 89999,
    quantity: 0,
  },
  {
    _id: uuid(),
    title: 'Oneplus 9 pro',
    memory: '12 + 256',
    price: 67999,
    brand: 'Oneplus',
    image:
      'https://cdn.opstatics.com/store/20170907/assets/images/events/2021/03/9pro/en/ksp-gallery-group1-1-m-9b6aa7.jpg.webp',
    badge: null,
    rating: 4,
    regularPrice: 72999,
    quantity: 0,
  },
  {
    _id: uuid(),
    title: 'Oneplus 10R',
    memory: '8 + 256',
    price: 59999,
    brand: 'Oneplus',
    image:
      'https://oasis.opstatics.com/content/dam/oasis/page/pkoc/10r/images-appearance-pop4-1.jpg.webp',
    badge: null,
    rating: 3,
    regularPrice: 64999,
    quantity: 0,
  },
  {
    _id: uuid(),
    title: 'Nothing phone 1',
    memory: '12 + 512',
    price: 79999,
    brand: 'Nothing',
    image:
      'https://fdn.gsmarena.com/imgroot/news/22/06/nothing-phone-1-design/-1200/gsmarena_000.jpg',
    badge: 'TRENDING',
    rating: 4.8,
    regularPrice: 84999,
    quantity: 0,
  },
]
