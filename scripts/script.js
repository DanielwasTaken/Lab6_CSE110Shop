// Script.js

window.addEventListener('DOMContentLoaded', () => {
  var response = getProducts("https://fakestoreapi.com/products");
});
  
async function getProducts(file){
  let rsp = await fetch(file);
  alert(typeof(rsp));
  let response = rsp.json();
  alert(typeof(response));
  return response;
}
