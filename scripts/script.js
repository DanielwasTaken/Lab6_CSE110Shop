// Script.js

window.addEventListener('DOMContentLoaded', () => {
  var response = getProducts("https://fakestoreapi.com/products");
});
  
async function getProducts(file){
  let rsp = await fetch(file);
  let response = rsp.json();
  return response;
}
