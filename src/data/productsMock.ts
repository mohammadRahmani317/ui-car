// src/data/productsMock.ts

export type Product = {
    id: number;
    brand: 'kia' | 'hyundai';
    name: string;
    price: number;
    image: string;
    isBestSeller?: boolean;
};

export const productsMock: Product[] = [
    // محصولات کیا
    { id: 1, brand: 'kia', name: 'لنت ترمز جلو کیا', price: 850000, image: '/images/products/kia-brake-pad.jpg', isBestSeller: true },
    { id: 2, brand: 'kia', name: 'فیلتر روغن کیا', price: 250000, image: '/images/products/kia-oil-filter.jpg', isBestSeller: true },
    { id: 3, brand: 'kia', name: 'شمع موتور کیا', price: 450000, image: '/images/products/kia-spark-plug.jpg' , isBestSeller: true},
    { id: 4, brand: 'kia', name: 'فیلتر هوا کیا', price: 300000, image: '/images/products/kia-air-filter.jpg' , isBestSeller: true},
    { id: 5, brand: 'kia', name: 'کیت تسمه تایم کیا', price: 1200000, image: '/images/products/kia-timing-belt.jpg', isBestSeller: true },
    { id: 6, brand: 'kia', name: 'رینگ چرخ کیا', price: 2200000, image: '/images/products/kia-wheel-rim.jpg' },

    // محصولات هیوندای
    { id: 7, brand: 'hyundai', name: 'لنت ترمز جلو هیوندای', price: 900000, image: '/images/products/hyundai-brake-pad.jpg', isBestSeller: true },
    { id: 8, brand: 'hyundai', name: 'فیلتر هوا هیوندای', price: 300000, image: '/images/products/hyundai-air-filter.jpg' , isBestSeller: true},
    { id: 9, brand: 'hyundai', name: 'باتری هیوندای', price: 1500000, image: '/images/products/hyundai-battery.jpg' , isBestSeller: true},
    { id: 10, brand: 'hyundai', name: 'کیت تسمه تایم هیوندای', price: 1300000, image: '/images/products/hyundai-timing-belt.jpg' , isBestSeller: true},
    { id: 11, brand: 'hyundai', name: 'رینگ چرخ هیوندای', price: 2100000, image: '/images/products/hyundai-wheel-rim.jpg', isBestSeller: true },
    { id: 12, brand: 'hyundai', name: 'شمع موتور هیوندای', price: 400000, image: '/images/products/hyundai-spark-plug.jpg' },
];
