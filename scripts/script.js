// Script.js

window.addEventListener('DOMContentLoaded', () => {
  var lStorage = window.localStorage;
  if(true){
    alert("maybe");
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(data => storeData(data));
    alert("not");
    
    
  }
  else{
    //make sure to delete later
    alert("local storage not empty");
  }
  
});
 
function storeData(data){
        alert("worked");
        console.log("data length = "+data.length);
        localStorage.setItem("products", data);
        for(let i = 0; i < data.length; i++){
          console.log(JSON.stringify(data[i]));
          localStorage.setItem(i, JSON.stringify(data[i]));
        }
    }
/*async function getProducts(file){
  let rsp = await fetch(file);
  let response = rsp.json();
  return response;
  
}*/
