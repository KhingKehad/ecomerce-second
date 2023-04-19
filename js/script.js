// Elements
//const pricee = +document.querySelector('.cart__body---main--list-store-wrap-prop-atr-money').innerHTML;
const brands = document.querySelector('.brands');
const heroSection = document.querySelector('.hero__section');
const arrivals = document.querySelector('.arrivals');
const product = document.querySelector('.product');
const favorite = document.querySelector('.favorite');
const banner = document.querySelector('.banner');
const vouchers = document.querySelector('.vouchers');
const community = document.querySelector('.community');
const btnBuy = document.querySelectorAll('.product__containers---box--btnbuy');
const list = document.querySelector('.cart__body---main--list-gen');
const overlay = document.querySelector('.overlay');
const notify = document.querySelector('.notify-card');
const cartBtn = document.querySelector('.cartshow');
const body = document.querySelector('.body');
const btnDel = document.querySelectorAll('.cart__body---main--list-store-wrap-prop-chara-del-btnDel');
 const listEl = document.querySelector('.cart__body---main--list-gen');
const totalAmount = document.querySelector('.cart__body---side--summary-total-price-amount');
const nocart = document.querySelector('.cart__body---main--list-gen-nocart');
const cart = document.querySelector('.cart')
const cartCloseEl = document.querySelector('.cart__body---main--header-close');
const prices = document.querySelectorAll('.cart__body---main--list-store-wrap-prop-atr-money');
const cartCheckout = document.querySelector('.cart__body---side--summary-btn');
const productCon = document.querySelectorAll('.product__containers')

window.addEventListener('resize', function (e) {
    // console.log(`screen width ${screen.width}`);
    // console.log(`window innerwidth ${window.innerWidth}`)
});



// FUNCTION
const timeout = function () {
    setTimeout(function () {
        notify.classList.add('hidden')
        console.log('timer')
    }, 1000);
}
// FOR NAVIGATION
const navContainer = document.querySelector('.nav__container');
const navImage = document.querySelector('.nav__image');
const navOpen = document.querySelector('.nav__open');
const navClose = document.querySelector('.nav__close');
const navEl = document.querySelector('.nav');
const navList = document.querySelector('.nav__list');
navOpen.addEventListener('click', function(e) {
    e.preventDefault();
    console.log('Nav open clicked');
    navList.classList.add('nav__show');
    navImage.style.display = 'none';
});
navClose.addEventListener('click', function(e) {
    e.preventDefault();
    console.log('Nav close clicked')
    navList.classList.remove('nav__show');
    navImage.style.display = 'flex';
});
/*  
// FOR SPINNER
const timeoutSpinner = function (spinner) {
    setTimeout(function () {
        spinner.classList.add('hidden');
        setTimeout( function () {
            console.log('timeroo');
            list.innerHTML = '';
        }, 2000)
        console.log('timer')
    }, 1000);
}
// FOR SPINNER
*/

// const renderSpinner = function () {
//     const spinner = `
//     <div class="spinner">
//         <svg id="icon-loader" viewBox="0 0 24 24">
//             <path d="M11 2v4c0 0.552 0.448 1 1 1s1-0.448 1-1v-4c0-0.552-0.448-1-1-1s-1 0.448-1 1zM11 18v4c0 0.552 0.448 1 1 1s1-0.448 1-1v-4c0-0.552-0.448-1-1-1s-1 0.448-1 1zM4.223 5.637l2.83 2.83c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-2.83-2.83c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414zM15.533 16.947l2.83 2.83c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-2.83-2.83c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414zM2 13h4c0.552 0 1-0.448 1-1s-0.448-1-1-1h-4c-0.552 0-1 0.448-1 1s0.448 1 1 1zM18 13h4c0.552 0 1-0.448 1-1s-0.448-1-1-1h-4c-0.552 0-1 0.448-1 1s0.448 1 1 1zM5.637 19.777l2.83-2.83c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-2.83 2.83c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0zM16.947 8.467l2.83-2.83c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-2.83 2.83c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0z" ></path>
//         </svg>
//     </div> 
//     `;
//     //list.innerHTML = '';
//     list.insertAdjacentHTML('afterbegin', spinner);
//     //list.innerHTML = '';
// }

//////////////////////////////////////////////////////////
// ANIMATION
/////////////////////////////////////////////////////
const arrivalsFig = document.querySelectorAll('.arrivals__fig');
// window.addEventListener('scroll', function() {
//     const triggerBottom = window.innerHeight / 5 * 4;
//     console.log(triggerBottom)
//     arrivalsFig.forEach( (fig) => {
//         const boxing = fig.getBoundingClientRect().right;
//         console.log(fig)
//         //console.log(boxing);
//         if (boxing < triggerBottom) {
//             fig.classList.add('show1');
//         } else {
//             fig.classList.remove('show1');
//         }
//     })
// });

// const observer = new IntersectionObserver( (entries) => {
//     console.log(entries)
//     entries.forEach((entry) => {
//         console.log(entry);
//         if (entry.isIntersecting) {
//             entry.target.classList.add('show')
//         } else {
//             entry.target.classList.remove('show')
//         }
//     })
// })
// arrivalsFig.forEach( (fig) => {
//     observer.observe(fig);
  
// })

// FOR ARRIVALS

window.addEventListener('scroll', () => {
    let content1 = document.querySelector('.arrivals__animate1');
    let content2 = document.querySelector('.arrivals__animate2');
    let content3 = document.querySelector('.arrivals__animate3');
    let content4 = document.querySelector('.hero__section-image');
    let currentPosition1 = content1.getBoundingClientRect().top;
    let currentPosition2 = content2.getBoundingClientRect().top;
    let currentPosition3 = content3.getBoundingClientRect().top;
    let currentPosition4 = content4.getBoundingClientRect().top;
    let currentPosition5 = content4.getBoundingClientRect();
    let screenheight = window.innerHeight;
    // console.log(currentPosition5);
    // console.log(screenheight);

    if (currentPosition1 < screenheight) {
       // alert('add class');
       content1.classList.add('show1');
    }
    if (currentPosition2 < screenheight) {
        // alert('add class');
        content2.classList.add('show2');
    }
    if (currentPosition3 < screenheight) {
       //alert('add class');
      content3.classList.add('show3');
    }
    if (currentPosition4 = screenheight) {
        //alert('add class');
        //content4.classList.add('show4');
        //content4.classList.remove('header--show-img');
     }
});

// FOR HERO__SECTION IMAGE
window.addEventListener('load', function () {
    let content4 = document.querySelector('.hero__section-image');
    let currentPosition4 = content4.getBoundingClientRect().top;
    let screenheight = window.innerHeight;
    if (currentPosition4 = screenheight) {
        //alert('add class');
        content4.classList.add('show4');
        //content4.classList.remove('header--show-img');
     }
});

// FOR HERO__SECTION PARAGRAPH
window.addEventListener('load', function() {
    let heroSectionHead = document.querySelectorAll('.hero__section--animate');
    heroSectionHead.forEach(el => {
        let currentPosition = el.getBoundingClientRect().top;
        let screenheight = window.innerHeight;
        if (currentPosition = screenheight) {
            //alert('add class');
            el.classList.add('show5');   
        }
    })
});

// FOR CART LIST
window.addEventListener('scroll', function () {
    let productContainer = document.querySelectorAll('.product__containers');
    //console.log(productContainer);
    productContainer.forEach(function (product) {
      // console.log(product)
        let productPosition = product.getBoundingClientRect().top;
        let screenheight = window.innerHeight;
        if (productPosition < screenheight) {
           // alert('add class');
            product.classList.add('product__container--animate');   
        }
    })
});

//  FOOTER: BACK TO TOP
const backToTopEl = document.querySelector('.to-top')
backToTopEl.addEventListener('click', function(e) {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
/*
 Using temporary DOM event scroll, look for another good event to 
 change the button back-to-top in the footer. so that when the window width
 is than 970px it will show only the icon-top and if the width
 is greater than 970px it will show both the icon-top and the text(back to top).
*/
window.addEventListener('scroll', function (e) {
    if (window.innerWidth < 975) {
        // console.log('Using sign only');
        backToTopEl.innerHTML = '<ion-icon name="arrow-up-outline"></ion-icon>';

    } else {
        // console.log('Using sign and word only');
        backToTopEl.innerHTML = 'Back to top <ion-icon name="arrow-up-outline"></ion-icon>';
    }
})

// function backToTop() {
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
// }


//////////////////////////////////////////
// ADDING CART
////////////////////////////////////////
const cartStorage = function (listEl) {
    console.log(listEl);
    const newlistEl = listEl.children;
    console.log(newlistEl);
    const aa = Array.from(newlistEl);
    console.log(aa);
    const zzz = aa.map(maap =>  maap.outerHTML
    );
    //console.log(zzz.outerHTML);
    let rest = [...zzz];
    console.log(rest);
    console.log(...zzz);
    zzz.forEach(function(gg) {
        console.log(gg);
        localStorage.setItem('cat', gg);
    })
    //localStorage.setItem('cart', zzz);
    // aa.forEach(function (bbb) {
    //     ///console.log(bbb.outerHTML);
    //     const ddd = bbb.outerHTML;
    //     //console.log(ddd);
    //     let eee = JSON.stringify(ddd);
    //     //console.log(eee);
    //     localStorage.setItem('cart', ddd);
    //     //console.log(localStorage.getItem('cart'));
    // });
    // for (let i = 0; i < aa.length; i++) {
    //     console.log(aa[i]);
    //     let ddd = aa[i].outerHTML;
    //    // console.log(ddd);
    //     let eee = JSON.stringify(ddd);
    //     console.log(eee);
    //     let aaa = [];
    //     aaa.push(eee);
    //     console.log(aaa);
    //     localStorage.setItem('cart', eee);
    //     localStorage.setItem('cart', eee);
    // }
};

const get = function () {
    // const ggg = localStorage.getItem('cart22');
    // console.log(ggg);
    // let gggo = localStorage.getItem('cat');
    // console.log(gggo);
    
    // const yyy = JSON.stringify(ggg);
    // console.log(yyy)
    // const xxx = JSON.parse(yyy);
    // console.log(xxx);
    // const getlocal = localStorage.getItem('cart');
    // console.log(getlocal);
        // const yyy = JSON.stringify(getlocal);
    // console.log(yyy)
    // const xxx = JSON.parse(yyy);
    // console.log(xxx);
}
get();
let cc = [];
let ee = [];
const renderCart =  function (btnBuy) {
    
    for (const btn of btnBuy) {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            console.log(notify)
           
            console.log(e.target);
            const productContainer = e.target.closest('.product__containers');
           console.log(productContainer);
            const ddd = productContainer.innerHTML;
             cc.push(productContainer);
             console.log(cc);
            //  localStorage.setItem('cart', cc);
            // console.log(ddd); 
            // ee.push(ddd);
            // localStorage.setItem('cart22', ee);
            // // let cec = [];
            // cec.push(ddd);
            // console.log(cec);

            
            
           let aa = notify.classList.toggle('hidden');
            if (aa === true) {
                console.log('Done');
                notify.classList.toggle('hidden');
            } else {
                console.log('Remove')
                timeout();  
           }
            //overlay.classList.toggle('overlay');

            render(e); 
            // cartStorage(e);
        });
    }
    

    /*
    console.log(btnBuy);
    const aaaa = Array.from(btnBuy);
    const bttn = aaaa.map( function (btn) {
        console.log(btn);
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            console.log(notify)
           
            console.log(e.target);
            const productContainer = e.target.closest('.product__containers');
           // console.log(productContainer);
            const ddd = productContainer.innerHTML;
            console.log(ddd); 
            cc.push(ddd);
            // let cec = [];
            // cec.push(ddd);
            // console.log(cec);
            localStorage.setItem('productContainer', ddd)
            
           let aa = notify.classList.toggle('hidden');
            if (aa === true) {
                console.log('Done');
                notify.classList.toggle('hidden');
            } else {
                console.log('Remove')
                timeout();  
           }
            //overlay.classList.toggle('overlay');

            render(e); 
            // cartStorage(e);
            return ddd;
        });
    });
    */
    
   
};

renderCart(btnBuy);
// timeout();



//////////////////////////////
// TO OPEN CART
// cartBtn.addEventListener('click', function (e) {
//     e.preventDefault();

//       /*
//      // SPINNER
//    renderSpinner();
    
 
//     const spinner = document.querySelector('.spinner');
//     timeoutSpinner(spinner);
//     // SPINNER
//     */
    
//     //render(e);
//     // if (renderSpinner() === true) {
//     //     console.log('spinner');
//     // }
//     brands.style.display = 'none';
//     heroSection.style.display = 'none';
//     arrivals.style.display = 'none';
//     product.style.display = 'none';
//     favorite.style.display = 'none';
//     banner.style.display = 'none';
//     vouchers.style.display = 'none';
//     community.style.display = 'none';

//     cart.classList.toggle('hidden');
   
// //     // FOR SPINNER -- TO REMOVE THE SPINNER DIV ELEMENT IN THE "copiednewlistEl" array
// //      const shiftcopiednewlistEl = copiednewlistEl.slice(1);
// //      console.log(shiftcopiednewlistEl);
// //    //const copiedNewListElmoneyArr = shiftcopiednewlistEl.map(el => +el.children[1].children[1].children[2].children[0].children[0].innerText);
// //     // FOR SPINNER


//     // For incrementing quantity
//     cartQuantity();
//    // console.log(cartQuantity());
//     //render(e);

//     // TO ADD THE AMOUNT
    
//     totalAmountlist2(listEl);

//      // for delete cart
//      const btnDel = document.querySelectorAll('.cart__body---main--list-store-wrap-prop-chara-del-btnDel');
//      deleteCart(btnDel);

//     console.log(listEl)
//     console.log(cartStorage(listEl));

//      checkoutFunction();
//     get();
// });

//////////////////////////////
// TO CLOSE CART
const cartClose = function (cartCloseEl) {
    cartCloseEl.addEventListener('click', function (e) {
        e.preventDefault();
        brands.style.display = '';
        heroSection.style.display = '';
        arrivals.style.display = '';
        product.style.display = '';
        favorite.style.display = '';
        banner.style.display = '';
        vouchers.style.display = '';
        community.style.display = '';
        cart.classList.add('hidden');
    });
}
cartClose(cartCloseEl);

////////////////////////////////////
// TO ADD THE CART PRICE
const totalAmountlist2 = function(listEl) {
   // console.log(listEl);
   if (listEl) {
    console.log(listEl);
    const newlistEl = listEl.children;
    //console.log(newlistEl);
   const copiednewlistEl = Array.from(newlistEl);
    console.log(copiednewlistEl);
   // console.log(listEl.currentTarget)
   
   const copiedNewListElmoneyArr = copiednewlistEl.map(el => +el.children[1].children[1].children[2].children[0].children[0].innerText);
    console.log(copiedNewListElmoneyArr);
    
   const cartQuantity = copiednewlistEl.map(el => +el.children[1].children[1].children[2].children[1].children[1].value);
//    console.log(cartQuantity);
//    console.log(copiednewlistEl);
  // console.log(copiednewlistEl.children[1].children[1].children[2].children[1].children[1])

    const lastArray = copiedNewListElmoneyArr.reduce( function(r,a,i) {
        // console.log(r, a, i);
         return r+a*cartQuantity[i];
     }, 0);
     console.log(lastArray)
     /*
     // const copiedNewListElmoneyArr = copiednewlistEl.map(el => +el.children[1].children[1].children[2].children[0].children[0].innerText);
    // let totalSum = copiedNewListElmoneyArr.reduce(function (total, value) {
    //     return total + value;
    // });
    // console.log(totalSum);
    */
    
   totalAmount.textContent = lastArray;
   } else {
    console.log('No list');
   }
   
};


///////////////////////////////////////
// TO DELETE CART
const deleteCart = function (btnDel) {
    btnDel.forEach(del => {  
        del.addEventListener('click', function (e) {
           // console.log('Cart Deleted');
            const cartEl = document.querySelector('.cart__body---main--list-store');
           // console.log(cartEl);

            /// Delete cart
            cartEl.remove();

            // update the total amount
            totalAmountlist2(listEl);

            
            
        })
    });
};
// deleteCart(btnDel);

/////////////////////////////////////////////////////////////////////////
// FOR INCREASING AND DECREASING CART ITEM QUANTITY
const cartQuantity = function () {
    const incrementBtn = document.getElementsByClassName('cart__body---main--list-store-wrap-prop-atr-input-add');
    const decrementBtn = document.getElementsByClassName('cart__body---main--list-store-wrap-prop-atr-input-minus');
     const value = document.querySelector('.cart__body---main--list-store-wrap-prop-atr-input');
     console.log(value);
     console.log(decrementBtn)
    let newValue;
    // FOR DECREMENT
    for (let i = 0; i < decrementBtn.length; i++ ) {
        const minus = decrementBtn[i];
       // console.log(minus);
        minus.classList.add('hidden');
        minus.addEventListener('click', function (e) {
            const plusClicked = e.currentTarget; 
            const newplusClicked = e.currentTarget.closest('.cart__body---main--list-store').children[1].children[1].children[2].children[1].children[1];
            console.log(newplusClicked);
            const newplusClickedValue = newplusClicked.value; 
            console.log(newplusClickedValue);
            const newValue = parseInt(newplusClickedValue) - 1;
            console.log(newValue);
            console.log(minus);
            console.log(listEl);
            // totalAmountlist2(listEl);
        
            if (newValue >= 1){
                newplusClicked.value = newValue;    
                totalAmountlist2(listEl);
                console.log(minus, newValue);
                       minus.classList.remove('hidden');  
            }
            if (newValue <= 1) {
                minus.classList.add('hidden');  
            }           
            
            return newValue;   
        })
    }

    // FOR INCREMENT
    for (let i = 0; i < incrementBtn.length; i++ ) {
        const plus = incrementBtn[i];
        //console.log(plus);
        plus.addEventListener('click', function (e) {
            const newplusClicked = e.currentTarget.closest('.cart__body---main--list-store').children[1].children[1].children[2].children[1].children[1];
        //    console.log(newplusClicked);
            const newplusClickedValue = newplusClicked.value; 
        //    console.log(newplusClickedValue);
            const newValue = parseInt(newplusClickedValue) + 1;
            console.log(newValue);
            newplusClicked.value = newValue;
            console.log(listEl);
            //totalAmountlist2(listEl);
            if (newValue >= 1) {
                console.log(e.target)
                const newminus = e.target.closest('.cart__body---main--list-store-wrap-prop-atr-input').children[0].children[0];
               // console.log(newminus);
                newminus.classList.remove('hidden');
                newplusClicked.value = newValue;
               // console.log(newValue);
                plus.classList.remove('hidden');
                console.log(newValue);
                totalAmountlist2(listEl);
                return newValue;
            } ;
            
            console.log(e.currentTarget)
           // return newValue;
        });
       // console.log(newValue);
    }
};


window.addEventListener('load', function(){
    this.localStorage.clear();
})

/*
const myForm = document.getElementById("myForm");
console.log(myForm)
// Intialise FormData constructor with myForm
//const formData = new FormData(myForm);

// Using formData.entries() and Object.fromEntries() method
// to convert the form data into a valid javascript object
//const formDataObject = Object.fromEntries(formData.entries());
const formDataObject = Object.fromEntries(myForm);

console.log(formDataObject);
*/

// CHECKOUT I.E TO PAY
const checkoutFunction = function () {
    cartCheckout.addEventListener('click', function () {
        console.log('Checkout Clicked')
        window.open('login.html', '_self')
    })
}


const render = function (e) {
    e.preventDefault();
   nocart.remove();
   //console.log(e.currentTarget)
    const exporta = e.currentTarget.closest('.product__containers---box').children;
   // console.log(exporta);
   // console.log(exporta[0]);
    const pic = exporta[0].children[0]  // for picture
    const name = exporta[1].children[0]     // for name
    const amo = exporta[2].children[0].children[0];     // for amount
    //  console.log(pic);
    //  console.log(name);
    //  console.log(+amo.innerHTML);
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
                        Silicone Strap For Apple Watch Band
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
                    Color code: Blue and Green
                </div>
                
                <div class="cart__body---main--list-store-wrap-prop-atr">
                    <div class="cart__body---main--list-store-wrap-prop-atr-price cart__body---main--list-store-wrap-prop-atr-price-sign">NGN
                         <span class="cart__body---main--list-store-wrap-prop-atr-money">   
                                    ${+amo.innerText}
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
   // console.log(store);
};









/*
const increase = function () {
    const plus = document.querySelectorAll('.cart__body---main--list-store-wrap-prop-atr-input-add');
    const value = +document.querySelector('.cart__body---main--list-store-wrap-prop-atr-input-value').value;
    console.log(plus);
    console.log(value);
    plus.forEach(function (plus, value) {
        return plus.addEventListener('click', function () {
            console.log('ADDED');
            value++;
            valueSub = value;
            console.log(valueSub);
        })
    })
    
};

const decrease = function () {
    const  minus = document.querySelectorAll('.cart__body---main--list-store-wrap-prop-atr-input-minus');
    const value = +document.querySelector('.cart__body---main--list-store-wrap-prop-atr-input-value').value;
    console.log(minus);
    console.log(value);
    minus.forEach(function (minus, value) {
        return minus.addEventListener('click', function () {
            console.log('REMOVED');
            console.log(value)
            value--;
            valueSub = value;
            console.log(valueSub);  
        })
    })
    
};

/*
const increment = function () {
    const plus = document.querySelectorAll('.cart__body---main--list-store-wrap-prop-atr-input-add');
    //const values = +document.querySelector('.cart__body---main--list-store-wrap-prop-atr-input-value').value;
    const  minus = document.querySelectorAll('.cart__body---main--list-store-wrap-prop-atr-input-minus');
    let value = +document.querySelector('.cart__body---main--list-store-wrap-prop-atr-input-value').value;
    // [minus, plus].forEach( function () {
    //     console.log(minus);
    //     console.log(plus);
    //     //console.log(value);
    //     for (min of minus) {
    //         min.addEventListener('click', function () {
    //             console.log(min);
    //         })
    //     }
    //     for (add of plus) {
    //         add.addEventListener('click', function () {
    //             console.log(add);
    //         })
    //     }

        
        
    // })

    // minus.forEach( function () {
    //     console.log(minus);
    // })
    // plus.forEach( function () {
    //     console.log(plus);
    // })

    for (const min of minus) {
        min.addEventListener('click', function (e) {
            console.log(e.currentTarget);
            console.log(e.currentTarget.closest('.cart__body---main--list-store'));

           // let aa = +e.currentTarget.closest('.cart__body---main--list-store').children[1].children[1].children[2].children[1].children[1].value;
            let aaa = e.currentTarget.closest('.cart__body---main--list-store').children[1].children[1].children[2].children[1].children[1].classList[0];
            let aaaa = document.querySelector(`.${aaa}`);
            let bbb = +aaaa.value;
            console.log(bbb);
           // console.log(+aaaa.value)  ;
           // console.log(aaaa);
           // console.log(aa);
            // console.log('decrease');
           // console.log(value);
            //aaaa++;
           // console.log(aaaa);
           bbb--;
            valueSub = bbb;
           // console.log(valueSub);  
            //valueSub--;
            console.log(valueSub)
        })
    }

    for (const add of plus) {
        add.addEventListener('click', function (e) {
            console.log(e.currentTarget);
            console.log('increase');
            console.log(value);
            value++;
            valueSub = value;
            console.log(valueSub);
            return valueSub ;
        })
    }
};
*/

/*
window.addEventListener('scroll', function(e) {
    const navSticky = document.querySelector('.hero__section-container');
    let navPosition = navSticky.getBoundingClientRect().top;
    let navPosition2 = navSticky.getBoundingClientRect();
    console.log(navPosition2)
    console.log(navPosition);
    if (navPosition < 0) {
        console.log('Use this');
        navSticky.classList.add('fixing-nav');
        // navSticky.style.position = 'fixed';
        // navSticky.style.zIndex = '1';
        // navSticky.style.top = '0';
        // navSticky.style.width = '100%';
        // navSticky.style.marginTop = '0';
    } else {
        console.log('Use that');
        navSticky.classList.remove('fixing-nav');
        // navSticky.style.position = '';
        // navSticky.style.zIndex = '';
        // navSticky.style.top = '';
        // navSticky.style.width = '';
        // navSticky.style.marginTop = '';
        // navSticky.style.position = '';
    }
}); 
*/
// const navSticky = document.querySelector('.hero__section-container');
// const header = document.querySelector('.hero__section');
// const options = {
//     root: null,
//     rootMargin: '5px',
//     threshold: 0,
// };
// const observer = new IntersectionObserver(function (entries, observer) {
//     entries.forEach(function (entry) {
//         if (!entry.isIntersecting) {
//             // navSticky.classList.toggle('fixing-nav');
//             console.log('Intersecting');
//             console.log(entry.isIntersecting);
//             console.log(entry);
//             navSticky.style.position = 'fixed';
//            // navSticky.style.setProperty ('position','fixed', 'important');
//             navSticky.style.backgroundColor = 'green' ;
//             navSticky.style.width= '100%';
//             navSticky.style.zIndex = '1';

//             console.log(navSticky);
//         } else {
//             // navSticky.classList.toggle('fixing-nav');
//             console.log('NOt ')
//             console.log(entry.isIntersecting);
//             console.log(entry);
//             navSticky.style.position = 'relative';
//             navSticky.style.width= '80%';
//             navSticky.style.margin = '0px auto';
//             navSticky.style.marginTop = '1rem';
//             navSticky.style.backgroundColor = '';
//             console.log(navSticky);
//         }
        
//     });
// }, options);

// observer.observe(navSticky);

// &-container {
//     width: 80%;
//     //position :fixed;
//     //background-color: #dbb613;
//    // background: transparent;
//     margin: 0 auto;
// // border: 3px solid yellow;
//     display: flex;
//     justify-content: space-between;
//     margin-bottom: 1rem;
//     align-items: center;
//     margin-top: 1rem;
//     //position: relative;
// }