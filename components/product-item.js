// product-item.js

class ProductItem extends HTMLElement {
  constructor(){
    super();
    
    var shadow = this.attachShadow({mode: "open"});
    
    /*
    <!-- Sample Product -->
                <!-- li class="product">
                    <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="Fjallraven - Foldstack No. 1 Backpack, Fits 15 Laptops" width=200>
                    <p class="title">Fjallraven - Foldstack No. 1 Backpack, Fits 15 Laptops</p>
                    <p class="price">$109.95</p>
                    <button onclick="alert('Added to Cart!')">Add to Cart</button>
                </li -->
    */
    //just putting it here instead
    let index = localStorage.getItem("index");
    let product = JSON.parse(localStorage.getItem(index));
    
    //
    const li = shadow.appendChild(document.createElement("li"));
    li.setAttribute("class", "product");
    const img = li.appendChild(document.createElement("img"));
    
    //
    img.setAttribute("src", product.image);
    //
    
    //figure out how to get image link from localstorage here
    const title = li.appendChild(document.createElement("p"));
    title.setAttribute("class", "title");
    //get title from localstorage
    const price = li.appendChild(document.createElement("p"));
    price.setAttribute("class","price");
    const button = li.appendChild(document.createElement("button"));
    if(localStorage.getItem(index+"cart") == "false"){
      button.innerHTML = "Add to Cart";
    }
    else{
      button.innerHTML = "Remove from Cart";
    }
    //probably more stuff with the add and remove cart later
    button.addEventListener("click", function(){sendAlert(index, button)});
    
    //
    //setProduct.setAttribute("title", product.title);
    //setProduct.setAttribute("price", product.price);
    title.innerHTML = product.title;
    price.innerHTML = product.price;
    //
    
    const style = shadow.appendChild(document.createElement("style"));
    style.textContent = `
    .price {
      color: green;
      font-size: 1.8em;
      font-weight: bold;
      margin: 0;
    }

    .product {
      align-items: center;
      background-color: white;
      border-radius: 5px;
      display: grid;
      grid-template-areas: 
      'image'
      'title'
      'price'
      'add';
      grid-template-rows: 67% 11% 11% 11%;
      height: 450px;
      filter: drop-shadow(0px 0px 6px rgb(0,0,0,0.2));
      margin: 0 30px 30px 0;
      padding: 10px 20px;
      width: 200px;
    }

    .product > button {
      background-color: rgb(255, 208, 0);
      border: none;
      border-radius: 5px;
      color: black;
      justify-self: center;
      max-height: 35px;
      padding: 8px 20px;
      transition: 0.1s ease all;
    }

    .product > button:hover {
      background-color: rgb(255, 166, 0);
      cursor: pointer;
      transition: 0.1s ease all;
    }

    .product > img {
     align-self: center;
      justify-self: center;
      width: 100%;
    }

    .title {
      font-size: 1.1em;
      margin: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .title:hover {
      font-size: 1.1em;
      margin: 0;
      white-space: wrap;
      overflow: auto;
      text-overflow: unset;
    }`;
  }
}
//more shit will happen here later
function sendAlert(index, button){
  if(localStorage.getItem(index+"cart") == "false"){
    localStorage.setItem(index+"cart", "true");
    let count = localStorage.getItem("cartCount");
    count++;
    localStorage.setItem("cartCount", count);
    let counter = document.getElementById("cart-count");
    counter.innerHTML = count;
    button.innerHTML = "Remove From Cart";
    alert("Added to cart");
  }
  else{
    localStorage.setItem(index+"cart", "false");
    let count = localStorage.getItem("cartCount");
    count--;
    localStorage.setItem("cartCount", count);
    let counter = document.getElementById("cart-count");
    counter.innerHTML = count;
    button.innerHTML = "Add to Cart";
  }
  
}

customElements.define('product-item', ProductItem);
