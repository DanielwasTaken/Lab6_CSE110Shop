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
    const li = shadow.appendChild(document.createElement("li"));
    li.setAttribute("class", "product");
    const img = li.appendChild(document.createElement("img"));
    //figure out how to get image link from localstorage here
    const title = li.appendChild(document.createElement("p"));
    title.setAttribute("class", "title");
    //get title from localstorage
    const price = li.appendChild(document.createElement("p"));
    price.setAttribute("class","price");
    const button = li.appendChild(document.createElement("button"));
    //probably more stuff with the add and remove cart later
    button.addEventListener("click", sendAlert);
    const style = shadow.appendChild(document.createElement("style"));
    style.textContent = "
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
    }";
  }
}
//more shit will happen here later
function sendAlert(){
  alert("Added to cart");
}

customElements.define('product-item', ProductItem);
