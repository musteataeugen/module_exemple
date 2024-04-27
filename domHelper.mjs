
import {products} from './products.mjs';

const sortName = document.querySelector('.sortName');

//Add event listener to the sortName button

function sortByName(firstName, nextName) {
    return firstName.name.localeCompare(nextName.name);
}

sortName.addEventListener('click', () => {
    products.sort(sortByName);
    loadProducts();
})

const sortPrice = document.querySelector('.sortPrice');

// Add event listener to the sortPrice button

function sortByPrice(firstNumber, nextNumber) {
    return firstNumber.price.amount - nextNumber.price.amount;  
}

sortPrice.addEventListener('click', () => {
    products.sort(sortByPrice);
    loadProducts();
})

function loadProducts() {
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    swiperWrapper.innerHTML = '';

    products.forEach((product) => {
        const slide = document.createElement('div');
        slide.classList.add('swiper-slide');            

        const card = document.createElement('div');
        card.classList.add('card');              

        const image = document.createElement('img');
        image.classList.add('card-img-top');
        image.src = product.image;
        image.alt = product.name;

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const title = document.createElement('h5');
        title.classList.add('card-title');
        title.textContent = product.name;

        const price = document.createElement('p');
        price.classList.add('card-text');
        price.textContent = `Price: ${product.price.amount} ${product.price.currency}`;  
        
        const button = document.createElement('a');
        button.classList.add('btn', 'btn-primary');
        button.textContent = 'Buy Now';
        
        cardBody.appendChild(title);               
        cardBody.appendChild(price);
        cardBody.appendChild(button);
        card.appendChild(image);
        card.appendChild(cardBody);      
        slide.appendChild(card);      
        swiperWrapper.appendChild(slide);
    });

    // Initialize Swiper 
    
    let mySwiper = new Swiper('.swiper-container', {
        direction : 'horizontal',   
        // loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
            dynamicBullets: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        keyboard : {
            enabled: true,
            onlyInViewport: false,
            pageUpDown: true
        },
        mousewheel: {            
            sensitivity: 1,           
        },
        autoHeight: true,
        slidesPerView: 1,      
    });
}

loadProducts();

const swiperContainer = document.querySelector('.swiper-container');
swiperContainer.addEventListener('DOMContentLoaded', loadProducts);

export {loadProducts, sortByName, sortByPrice};