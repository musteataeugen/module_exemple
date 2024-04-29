

import {Product} from './Product.mjs';

import {Money} from './Money.mjs';

import {loadProducts, sortByName, sortByPrice} from './domHelper.mjs';

loadProducts();

const swiperContainer = document.querySelector('.swiper-container');
swiperContainer.addEventListener('DOMContentLoaded', loadProducts);