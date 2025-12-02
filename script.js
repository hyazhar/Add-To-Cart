const menu = document.querySelector(".menus");
const hamburger = document.getElementById("hamburger-icon");
hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
});

fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        let productCard = document.querySelector('.product-card');
        productCard.className = 'product-card';
        data.forEach(element => {
            
            let card= document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
             <img src="${element.image.thumbnail}" alt="Dessert 1">
            <h2 class="product-name">${element.name}</h2>
            <div class="category">${element.category}</div>
            <p class="price">$${element.price}</p>
             <button class="add-to-cart">Add to Cart</button>
            `;
            productCard.appendChild(card);
            let AddtoCart=card.querySelector('.add-to-cart');
            AddtoCart.addEventListener('click',()=>{
                let cartContainer = document.querySelector('.cart-container');
                cartContainer.className = 'cart-container';
                let cartItem = document.createElement('div');
                cartItem.className = 'item-cart';
                cartItem.innerHTML = `
                                    <div class="item-name">${element.name}</div> 
                                    <div class="item-wrapper">
                                    <div class="item-quantity"><button class="decrease-quantity">-</button>2<button class="increase-quantity">+</button></div>
                                    <div class="item-price">${element.price}</div>
                                    <div class="total-price">$20</div>
                                    <button class="remove-item">Delete</button>
                                    </div>
                `;
                console.log(cartItem);
                cartContainer.appendChild(cartItem);
            })
        })
        });