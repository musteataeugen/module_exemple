HW1: make a frontend simple app based on Modules:
     this will be a single page which will use swiper carousel
     will present products: each product ->slide,
     3 per scroll on big screen, 1 per scroll on small screen

    -index.html
         |
          +--swiper
         |
          +--app.mjs
                |
                +--load products,create the swiper DOM and THEN - init swiper
                |
                +--products.mjs
                    |
                     +--[Array of type products]
                +--Product.mjs
                    |
                    class Product{name:string,image:string,price:Money}
                +--Money.mjs
                    |
                    class Money{amount:number,currency:string}
         +--domHelper.mjs
                    |
                    newElement(parent,content,classes,...)-->

 HW2: try to layout the Inside of each slide using bootstrap - card component
 HW3: advanced DOM (.createElement()...+helper functions) 





 Swiper & Bootstrap Card DOM

<div class="swiper-container">
    <h1>Our Products</h1>
    <Swiper wrapper
    <div class="swiper-wrapper">
    
         Example product card -->

       <div class="swiper-slide">
            <div class="card"  style="width: 18rem;">
                <img class="card-img-top" src="" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title"></h5>
                    <p class="card-text"></p>
                    <a href="#" class="btn btn-primary">Buy Now</a>
                </div>
            </div>
        </div> -->

        <!-- Add more slides for other products -->
    </div>
    <!-- Pagination and navigation buttons -->
    <div class="swiper-pagination"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>  -->

