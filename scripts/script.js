// Script.js

window.addEventListener('DOMContentLoaded', () => {
  let productCheck = localStorage.getItem("products");
  if(products == null){
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(data => storeData(data));
  }  
});

function storeData(data){
  console.log("data length = "+data.length);
  localStorage.setItem("products", data);
  localStorage.setItem("itemCount", data.length);
  for(let i = 0; i < data.length; i++){
    console.log(JSON.stringify(data[i]));
    localStorage.setItem(i, JSON.stringify(data[i]));
  }
}

let numProducts = localStorage.getItem("itemCount");

//for(let i = 0; i < numProducts; i++){
  
  


/*async function getProducts(file){
  let rsp = await fetch(file);
  let response = rsp.json();
  return response;
  
}*/
