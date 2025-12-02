fetch('data.json')
.then(response=>response.json())
.then(data=>{
    product(data);
});
function product(data){
    let productCard = document.querySelector('.product-card');
    productCard.className = 'product-card';
    data.forEach(element => {
        let card= document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
         <img src="${element.image.desktop}" alt="Dessert 1">
        <h2 class="product-name">${element.name}</h2>
        <div class="category">${element.category}</div>
        <p class="price">$${element.price}</p>
         <button class="add-to-cart">Add to Cart</button>
        `;
        productCard.appendChild(card);
        const addToCartBtn = card.querySelector('.add-to-cart');
        AddToCart(addToCartBtn);
        })
}

function AddToCart(btn){
    btn.addEventListener('click', productinfo); 
    }
function productinfo(){
        let productimage = this.parentElement.querySelector('img').src;
        let productName = this.parentElement.querySelector('.product-name').innerText;
        let category = this.parentElement.querySelector('.category').innerText;
        let productPrice = this.parentElement.querySelector('.price').innerText;
        console.log(productimage, productName, category, productPrice);
        cart(productName,productimage,category,productPrice);
}

// Cart functionality

function cart(productName,productimage,category,productPrice){
    let itemList=document.querySelector('.item-list');
    let items=document.createElement('div');
    items.className='items';
    items.innerHTML=`
        <div class="item-image">
        <img src="${productimage}" alt="Product Image">
        </div>
       <div class="item-name">
        <span class="name">${productName}</span>
        <span class="item-category">${category}</span>
       </div>
       <div class="item-quantity">
        <span class="quantity">0</span>
       </div> 
        <div class="item-price">
          <span class="price">${productPrice}</span>
      </div>
      <div class="remove-item">
        <i class="ri-delete-bin-6-line"></i>
      </div>
    `;
    itemList.appendChild(items);
}


// Navbar Toggle
const menu = document.querySelector(".menus");
const hamburger = document.getElementById("hamburger-icon");
hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
});
