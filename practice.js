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
        })
}
const menu = document.querySelector(".menus");
const hamburger = document.getElementById("hamburger-icon");
hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
});