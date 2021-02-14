// Script.js

window.addEventListener('DOMContentLoaded', () => {
  var lStorage = window.localStorage;
  if(lStorage == null){
    var response = getProducts("https://fakestoreapi.com/products");
    localStorage.setItem("products", response);
  }
  else{
    //make sure to delete later
    alert("local storage not empty");
  }
  
});
  
async function getProducts(file){
  let rsp = await fetch(file).json();
  let response = JSON.stringify(rsp);
  return response;
}
