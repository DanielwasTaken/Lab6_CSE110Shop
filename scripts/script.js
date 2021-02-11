// Script.js

window.addEventListener('DOMContentLoaded', () => {
  var response = getProducts("https://fakestoreapi.com/products");
  
});
  
async function getProducts(file){
  let rsp = await fetch(file).json();
  let response = JSON.stringify(rsp);
  return response;
}
