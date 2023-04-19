// import { cartStorage } from "./script";



////////////////////////////////
// ELEMENTS
/////////////////////////////////
const spinner = document.querySelector('.feed-spinner');
const marketbody = document.querySelector('.market__body');
const marketSearch = document.querySelector('.market__search');
const marketSearchButton = document.querySelector('.market__search--button');
const btnBuy = document.querySelectorAll('.market__containers---box--btnbuy');
const notifyFeed = document.querySelector('.notify--feed');
const cartBtn = document.querySelector('.cartshow');
const cartCloseEl = document.querySelector('.cart__body---main--header-close');
const nocart = document.querySelector('.cart__body---main--list-gen-nocart');
const list = document.querySelector('.cart__body---main--list-gen');
const listEl = document.querySelector('.cart__body---main--list-gen');
const totalAmount = document.querySelector('.cart__body---side--summary-total-price-amount');


////////////////////////////
// ANIMATIOON
///////////////////////////
window.addEventListener('scroll', function () {
    let marketContainer = document.querySelectorAll('.market__containers');
    //console.log(marketContainer);
    marketContainer.forEach(function (market) {
       // console.log(market)
        let marketPosition = market.getBoundingClientRect().top;
        let screenheight = window.innerHeight;
        if (marketPosition < screenheight) {
           // alert('add class');
            market.classList.add('market__container--animate');   
        }
    })
});

window.addEventListener('load', function () {
    let marketContainer = document.querySelectorAll('.market--animate-finish');
    console.log(marketContainer);
    marketContainer.forEach(function (market) {
       // console.log(market)
        let marketPosition = market.getBoundingClientRect().top;
        let screenheight = window.innerHeight;
        if (marketPosition < screenheight) {
           // alert('add class');
            market.classList.add('market__container--animate');   
        }
    })
});



// FOR FEED NAV
const feednavContainer = document.querySelector('.feed-nav__container');
const feednavImage = document.querySelector('.feed-nav__image');
const feednavOpen = document.querySelector('.feed-nav__open');
const feednavClose = document.querySelector('.feed-nav__close');
const feednavEl = document.querySelector('.feed-nav');
const feednavList = document.querySelector('.feed-nav__list');
feednavOpen.addEventListener('click', function(e) {
    e.preventDefault();
    console.log('feed-nav open clicked');
    feednavList.classList.add('feed-nav__show');
    feednavImage.style.display = 'none';
});
feednavClose.addEventListener('click', function(e) {
    e.preventDefault();
    console.log('feed-nav close clicked')
    feednavList.classList.remove('feed-nav__show');
    feednavImage.style.display = 'flex';
});

////////////////////////////////////////
// FUNCTIONS 
/////////////////////////////////
// marketbody.addEventListener('load', function() {
//     marketbody.classList.add('hidden')
// })

// for feed-spinner
//marketbody.classList.add('hidden')
const timeoutSpinner = function (spinner) {
    setTimeout(function () {
        //marketbody.classList.add('hidden');
        spinner.classList.add('full-hidden');
        // console.log('Show spinner')
        setTimeout( function () {
            // console.log('timeroo');
            marketbody.classList.remove('full-hidden')
        }, 5)
        // console.log('timer')
    }, 1000);
}
timeoutSpinner(spinner);

const spinner2 = document.querySelector('.cart-spinner2');
const cartTimeoutSpinner = function(spinner2) {
    setTimeout(function () {
        console.log('cart timeout')
        spinner2.classList.remove('full-hidden2');
        setTimeout( function () {
            spinner2.classList.add('full-hidden2');
        }, 500)
    }, 0);
}

// For notify cart
const timeout = function () {
    setTimeout(function () {
        notifyFeed.classList.add('hidden')
        // console.log('timer')
    }, 1000);
}


// For Submit Search 
const controlSearch = function () {
    marketSearchButton.addEventListener('click', function (e) {
        e.preventDefault();
        //console.log(e.)
       const aa =  marketSearchInput.value;
       console.log(aa); 
    });   
}
//  controlSearch();



const search =  () => {
    const marketbody = document.querySelector('.market__body'); // product list
    const marketList = document.querySelectorAll('.market__containers'); // product
    const marketSearchInput = document.querySelector('.market__search--input').value.toUpperCase(); // searchbox
    const marketName = document.getElementsByClassName('market__containers---box--itemname-name'); 
    const pname = document.getElementsByTagName('p');     // pname

    // console.log(marketName);
    for (var i = 0; i < marketName.length; i++) {
        let match = marketList[i].getElementsByTagName('p')[0];
       // let match = marketList[i].querySelector('.market__containers---box--itemname-name')[0];

        if (match) {
            let textValue = match.textContent || match.innerHTML;           
            if (textValue.toUpperCase().indexOf(marketSearchInput) > -1) {
                marketList[i].style.display = "";
               // marketSearchInput =''
            } else {
                marketList[i].style.display = "none";
                let aa = 'No cart existed';
                //marketbody.insertAdjacentHTML('afterend', aa);
            }
        } 
    } 
}
// search();
const marketSearchInputMain = document.querySelector('.market__search--input');
marketSearchInputMain.addEventListener('keyup', search);
// NOTE: This search method can also be called in the html form element of market__search

//////////////////////////////////////
// FOR LAZY LOADING IMAGES
////////////////////////////////////
const images = document.querySelectorAll('[data-src]');

const preLoadImage = function(img) {
    const src = img.getAttribute('data-src');
    if (!src) {
        return;
    }
    console.log(src);
    img.src = src;
}

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 30000px 0px"
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            console.log(entry.target)
            preLoadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    });
}, imgOptions);

images.forEach(image => {
    imgObserver.observe(image);
});


// For rendering cart
const renderCart =  function (btnBuy) {
    // console.log(btnBuy);
    for (const btn of btnBuy) {
       // console.log(btn);
        btn.addEventListener('click', function (e) {
            // console.log(btn);
            e.preventDefault();
            // console.log(notifyFeed)
           
            // console.log(e.target);
            render(e)

           let aa = notifyFeed.classList.toggle('hidden');
            if (aa === true) {
                // console.log('Done');
                notifyFeed.classList.toggle('hidden');
            } else {
                // console.log('Remove')
                timeout();  
           }
            //overlay.classList.toggle('overlay');

            ;        
        });
    }
};
renderCart(btnBuy);

const market = document.querySelector('.market');
const feed = document.querySelector('.feed');
const main = document.querySelector('.main');
//////////////////////////////
// TO OPEN CART
cartBtn.addEventListener('click', function (e) {
    e.preventDefault();
    // console.log('open cart')
    market.style.display = 'none';
    // feed.style.display = 'none';
    cart.classList.toggle('hidden');
    
    main.style.width = '100%';
    cart.style.margin = '0 auto';

    //render(e);
    // for delete cart

    // update the total amount
    totalAmountlist2(listEl); 

    cartQuantity();

    const btnDel = document.querySelectorAll('.cart__body---main--list-store-wrap-prop-chara-del-btnDel');
    deleteCart(btnDel);
    
});
//////////////////////////////
// TO CLOSE CART
const cartClose = function (cartCloseEl) {
    cartCloseEl.addEventListener('click', function (e) {
        e.preventDefault();
        market.style.display = '';
        // feed.style.display = '';
        main.style.width = '';
        cart.classList.add('hidden');
    });
}
cartClose(cartCloseEl);

///////////////////////////////////////
// TO DELETE CART
const deleteCart = function (btnDel) {
    btnDel.forEach(del => {  
        del.addEventListener('click', function (e) {
           // console.log('Cart Deleted');
           cartTimeoutSpinner(spinner2);
            setTimeout(function () {
                console.log('Cart Deleted');
                const cartEl = document.querySelector('.cart__body---main--list-store');
                console.log(cartEl);
    
                /// Delete cart
                cartEl.remove();
    
                // update the total amount
                totalAmountlist2(listEl); 
                console.log(listEl.children);
                if (listEl.children) {
                    console.log('list')
                } else {
                    console.log('No list')
                }
            }, 600)
           
            
        })
    });
};

/////////////////////////////////////
// PRICE ADDITION
const totalAmountlist2 = function(listEl) {
    console.log(listEl);
   const newlistEl = listEl.children;
    console.log(newlistEl);
   const copiednewlistEl = Array.from(newlistEl);
    console.log(copiednewlistEl);
    console.log(listEl.currentTarget)
   const copiedNewListElmoneyArr = copiednewlistEl.map(el => +el.children[1].children[1].children[2].children[0].children[0].innerText);
    console.log(copiedNewListElmoneyArr);
    
   const cartQuantity = copiednewlistEl.map(el => +el.children[1].children[1].children[2].children[1].children[1].value);
   
    const lastArray = copiedNewListElmoneyArr.reduce( function(r,a,i) {
        // console.log(r, a, i);
         return r+a*cartQuantity[i];
     }, 0);
     console.log(lastArray)
    // let totalSum = copiedNewListElmoneyArr.reduce(function (total, value) {
    //     return total + value;
    // });
    // console.log(totalSum);
    
   totalAmount.textContent = lastArray;
};

const cartQuantity = function () {
    const incrementBtn = document.getElementsByClassName('cart__body---main--list-store-wrap-prop-atr-input-add');
    const decrementBtn = document.getElementsByClassName('cart__body---main--list-store-wrap-prop-atr-input-minus');
     const value = document.querySelector('.cart__body---main--list-store-wrap-prop-atr-input');
    //  console.log(value);
    //  console.log(decrementBtn)
    let newValue;
    // FOR DECREMENT
    for (let i = 0; i < decrementBtn.length; i++ ) {
        const minus = decrementBtn[i];
       // console.log(minus);
        minus.classList.add('hidden');
        minus.addEventListener('click', function (e) {
            cartTimeoutSpinner(spinner2);
            const timingCalc = function (e) {        
                const ccc = e.currentTarget;
                setTimeout( function() {
                    const plusClicked = e.currentTarget; 
                    const newplusClicked = ccc.closest('.cart__body---main--list-store').children[1].children[1].children[2].children[1].children[1];
                    // console.log(newplusClicked);
                    const newplusClickedValue = newplusClicked.value; 
                    // console.log(newplusClickedValue);
                    const newValue = parseInt(newplusClickedValue) - 1;
                    // console.log(newValue);
                    // console.log(minus);
                    // console.log(listEl);
                    // totalAmountlist2(listEl);

                    if (newValue >= 1){
                        newplusClicked.value = newValue;    
                        totalAmountlist2(listEl);
                        // console.log(minus, newValue);
                         minus.classList.remove('hidden');  
                    }
                    if (newValue <= 1) {
                        minus.classList.add('hidden');  
                    }           
                    return newValue;  
                }, 600);
            }
            timingCalc(e)
            // const newplusClicked = e.currentTarget.closest('.cart__body---main--list-store').children[1].children[1].children[2].children[1].children[1];
            // // console.log(newplusClicked);
            // const newplusClickedValue = newplusClicked.value; 
            // // console.log(newplusClickedValue);
            // const newValue = parseInt(newplusClickedValue) - 1;
            // // console.log(newValue);
            // // console.log(minus);
            // // console.log(listEl);
            // // totalAmountlist2(listEl);
            
            // if (newValue >= 1){
            //     newplusClicked.value = newValue;    
            //     totalAmountlist2(listEl);
            //     // console.log(minus, newValue);
            //            minus.classList.remove('hidden');  
            // }
            // if (newValue <= 1) {
            //     minus.classList.add('hidden');  
            // }           
            
            // return newValue;   
        })
    }

    // FOR INCREMENT
    for (let i = 0; i < incrementBtn.length; i++ ) {
        const plus = incrementBtn[i];
        //console.log(plus);
        plus.addEventListener('click', function (e) {
            cartTimeoutSpinner(spinner2);
            const timingCalc = function (e) {        
                const ccc = e.currentTarget;
                console.log(ccc);
                setTimeout( function() {
                    // const newplusClicked = e.currentTarget.closest('.cart__body---main--list-store').children[1].children[1].children[2].children[1].children[1];
                    const newplusClicked = ccc.closest('.cart__body---main--list-store').children[1].children[1].children[2].children[1].children[1];
                    //    console.log(newplusClicked);
                        const newplusClickedValue = newplusClicked.value; 
                    //    console.log(newplusClickedValue);
                        const newValue = parseInt(newplusClickedValue) + 1;
                        // console.log(newValue);
                        newplusClicked.value = newValue;
                        // console.log(listEl);
                        //totalAmountlist2(listEl);
                        if (newValue >= 1) {
                            // console.log(e.target)
                            const newminus = e.target.closest('.cart__body---main--list-store-wrap-prop-atr-input').children[0].children[0];
                           // console.log(newminus);
                            newminus.classList.remove('hidden');
                            newplusClicked.value = newValue;
                           // console.log(newValue);
                            plus.classList.remove('hidden');
                            // console.log(newValue);
                            totalAmountlist2(listEl);
                            return newValue;
                        } ;
                }, 600);
            }
            timingCalc(e)
            
        });
       // console.log(newValue);
    }
};

/*
const getCartStorage = function () {
    const getcart = localStorage.getItem('cart');
    console.log(getcart);
    nocart.remove();
    list.insertAdjacentHTML('afterbegin', getcart);
}
getCartStorage();
*/


/////////////////////////////////
// RENDER MARKUP
const render = function (e) {
    e.preventDefault();
   nocart.remove();
   console.log(e.currentTarget.parentElement);
    const exporta = e.currentTarget.closest('.market__containers---box').children;
    console.log(exporta);
    console.log(exporta[0]);
    const pic = exporta[0].children[0]  // for picture
    const name = exporta[1].children[0]     // for name 
    const amo = exporta[3].children[0].children[0];         // for amount
    const color = exporta[3].children[3] 
    //  console.log(pic);
      console.log(name);
      console.log(amo);
      console.log(color);
    const store = `            
    <div class="cart__body---main--list-store">
        <div class="cart__body---main--list-store-block">
            <div class="cart__body---main--list-store-block-header">
                Gift Card Shop
            </div>
        </div>
        <div class="cart__body---main--list-store-wrap">
            <div class="cart__body---main--list-store-wrap-imgcont">
                <img src="${pic.src}" alt="Goods img" class="cart__body---main--list-store-wrap-imgcont-img">
            </div>
            <div class="cart__body---main--list-store-wrap-prop">
                <div class="cart__body---main--list-store-wrap-prop-chara">
                    <div class="cart__body---main--list-store-wrap-prop-chara-name">
                        ${name.innerHTML}
                    </div>
                    <div class="cart__body---main--list-store-wrap-prop-chara-del">
                        
                        <button class="cart__body---main--list-store-wrap-prop-chara-del-btnDel">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="25" height="22" viewBox="0 0 32 32">
                                <path d="M26.5 4h-6.5v-2.5c0-0.825-0.675-1.5-1.5-1.5h-7c-0.825 0-1.5 0.675-1.5 1.5v2.5h-6.5c-0.825 0-1.5 0.675-1.5 1.5v2.5h26v-2.5c0-0.825-0.675-1.5-1.5-1.5zM18 4h-6v-1.975h6v1.975z"></path>
                                <path d="M4 10v20c0 1.1 0.9 2 2 2h18c1.1 0 2-0.9 2-2v-20h-22zM10 28h-2v-14h2v14zM14 28h-2v-14h2v14zM18 28h-2v-14h2v14zM22 28h-2v-14h2v14z"></path>
                            </svg> 
                        </button>
                    </div>
                </div>
                <div class="cart__body---main--list-store-wrap-prop-location">
                     ${color.innerHTML}
                </div>
                
                <div class="cart__body---main--list-store-wrap-prop-atr">
                    <div class="cart__body---main--list-store-wrap-prop-atr-price">NGN
                         <span class="cart__body---main--list-store-wrap-prop-atr-money">   
                            ${+amo.innerHTML}
                         </span>
                        
                    </div>
                    <div class="cart__body---main--list-store-wrap-prop-atr-input">
                        <div>
                            <span class="cart__body---main--list-store-wrap-prop-atr-input-minus">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                    <title>minus</title>
                                    <path d="M0 13v6c0 0.552 0.448 1 1 1h30c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1h-30c-0.552 0-1 0.448-1 1z"></path>
                                </svg>
                                    
                            </span>
                        </div>
                        <input type="text" value="1" class="cart__body---main--list-store-wrap-prop-atr-input-value">
                        <div>
                            <span class="cart__body---main--list-store-wrap-prop-atr-input-add">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                    <title>plus</title>
                                    <path d="M31 12h-11v-11c0-0.552-0.448-1-1-1h-6c-0.552 0-1 0.448-1 1v11h-11c-0.552 0-1 0.448-1 1v6c0 0.552 0.448 1 1 1h11v11c0 0.552 0.448 1 1 1h6c0.552 0 1-0.448 1-1v-11h11c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1z"></path>
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    `;
    list.insertAdjacentHTML('afterbegin', store);
};