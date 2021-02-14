// Script.js

window.addEventListener('DOMContentLoaded', () => {
  var lStorage = window.localStorage;
  if(true){
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(data => function(data){
        localStorage.setItem("products", data);
        for(let i = 0; i < data.length; i++){
          console.log(JSON.stringify(data[i]));
          localStorage.setItem(i, JSON.stringify(data[i]));
        }
    });
    
    
  }
  else{
    //make sure to delete later
    alert("local storage not empty");
  }
  
});
  
/*async function getProducts(file){
  let rsp = await fetch(file);
  let response = rsp.json();
  return response;
  
}*/
