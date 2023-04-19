// import { render } from "./script.js";

// render(e);
// Elements
const btnBuy = document.querySelectorAll('.product__containers---box--btnbuy');
const list = document.querySelector('.cart__body---main--list-gen');
const overlay = document.querySelector('.overlay');
const notify = document.querySelector('.notify-card');
const cartBtn = document.querySelector('.cartshow');
const body = document.querySelector('.body');
//const btnDel = document.querySelectorAll('.cart__body---main--list-store-wrap-prop-chara-del-btnDel');
const listEl = document.querySelector('.cart__body---main--list-gen');
const totalAmount = document.querySelector('.cart__body---side--summary-total-price-amount');
const nocart = document.querySelector('.cart__body---main--list-gen-nocart');
const cart = document.querySelector('.cart')
const cartCloseEl = document.querySelector('.cart__body---main--header-close');
const prices = document.querySelectorAll('.cart__body---main--list-store-wrap-prop-atr-money');
const cartCheckout = document.querySelector('.cart__body---side--summary-btn');

//console.log(cartCloseEl);
// FOR CART LIST
// window.addEventListener('scroll', function () {
//     let productContainer = document.querySelectorAll('.product__containers');
//     //console.log(productContainer);
//     productContainer.forEach(function (product) {
//       // console.log(product)
//         let productPosition = product.getBoundingClientRect().top;
//         let screenheight = window.innerHeight;
//         if (productPosition < screenheight) {
//            // alert('add class');
//             product.classList.add('product__container--animate');   
//         }
//     })
// });
//////////////////////////////////////////
// ADDING CART
////////////////////////////////////////
const renderCart =  function (btnBuy) {
    for (const btn of btnBuy) {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            console.log(notify)
           
            console.log(e.target);

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
        });
    }
};
renderCart(btnBuy);
// timeout();

/*
//////////////////////////////
// TO CLOSE CART
const cartClose = function (cartCloseEl) {
    cartCloseEl.addEventListener('click', function (e) {
        e.preventDefault();
        cart.classList.add('hidden');
    });
}
cartClose(cartCloseEl);
*/


//////////////////////////////
// TO OPEN CART

//cartBtn.addEventListener('click', function (e) {
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

//     cart.classList.toggle('hidden');
//     // For incrementing quantity
//     cartQuantity();
//     //render(e);

//     // TO ADD THE AMOUNT
//     totalAmountlist2(listEl);

//      // for delete cart
//     const btnDel = document.querySelectorAll('.cart__body---main--list-store-wrap-prop-chara-del-btnDel');
//     deleteCart(btnDel);

//      console.log(listEl)
//     //  cartStorage(listEl);

//     checkoutFunction();
// });



////////////////////////////////////
// TO ADD THE CART PRICE
const totalAmountlist2 = function(listEl) {
   // console.log(listEl);
   if (listEl) {
    console.log(listEl);
    const newlistEl = listEl.children;
    //console.log(newlistEl);
   const copiednewlistEl = Array.from(newlistEl);
   // console.log(copiednewlistEl);
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
//totalAmountlist2(listEl);

            
            
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


/*
// for delete cart
const btnDel = document.querySelectorAll('.cart__body---main--list-store-wrap-prop-chara-del-btnDel');
deleteCart(btnDel);

const get = function () {
    // let ggg = localStorage.getItem('cart');
    // console.log(ggg);
    // let gggo = localStorage.getItem('cat');
    // console.log(gggo);
    
    // const yyy = JSON.stringify(ggg);
    // console.log(yyy)
    // const xxx = JSON.parse(yyy);
    // console.log(xxx);
    console.log('a')
    const getlocal = localStorage.getItem('productContainer');
    console.log(getlocal)
}
*/


//checkoutFunction();
/*
const render = function (e) {
    e.preventDefault();
   nocart.remove();
   console.log(e.currentTarget)
    const exporta = e.currentTarget.closest('.product__containers---box').children;
    console.log(exporta);
    console.log(exporta[0]);
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
                    <div class="cart__body---main--list-store-wrap-prop-atr-price">NGN
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
};
*/

const getStorage = function () {
    const getlocal = localStorage.getItem('productContainer');
    console.log(getlocal)
}
getStorage();