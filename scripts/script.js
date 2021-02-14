// Script.js

window.addEventListener('DOMContentLoaded', () => {
  var lStorage = window.localStorage;
  if(true){
    var response = getProducts("https://fakestoreapi.com/products");
    for(let i = 0; i < response.length; i++){
      console.log(response[i]);
      localStorage.setItem(i, JSON.stringify(response[i]));
    }  
  }
  else{
    //make sure to delete later
    alert("local storage not empty");
  }
  
});
  
async function getProducts(file){
  let rsp = await fetch(file);
  let response = rsp.json();
  return response;
  
}
