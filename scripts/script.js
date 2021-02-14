// Script.js

window.addEventListener('DOMContentLoaded', () => {
  let productCheck = localStorage.getItem("products");
  if(productCheck == null){
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(data => storeData(data)).then(setData());;
  }  
  setData();
});

function storeData(data){
  console.log("data length = "+data.length);
  localStorage.setItem("products", data);
  localStorage.setItem("itemCount", data.length);
  localStorage.setItem("cartCount", 0);
  for(let i = 0; i < data.length; i++){
    console.log(JSON.stringify(data[i]));
    localStorage.setItem(i, JSON.stringify(data[i]));
    localStorage.setItem(i+"cart", "false");
  }
}

function setData(){
let numProducts = localStorage.getItem("itemCount");
let productList = document.getElementById("product-list");

let counter = document.getElementById("cart-count");
counter.innerHTML = localStorage.getItem("cartCount");

for(let i = 0; i < numProducts; i++){
  localStorage.setItem("index", i);
  //let product = JSON.parse(localStorage.getItem(i));
  let setProduct = document.createElement("product-item");
  //let image = setProduct.firstChild;
  //image.setAttribute("src", product.image);
  //setProduct.setAttribute("title", product.title);
  //setProduct.setAttribute("price", product.price);
  productList.appendChild(setProduct);
}
}
  
  


/*async function getProducts(file){
  let rsp = await fetch(file);
  let response = rsp.json();
  return response;
  
}*/
