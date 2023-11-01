const DEMO_URL="https://course-api.com/react-store-products"

function fetchData(DEMO_URL,callback){
    fetch(DEMO_URL).then((response)=>{
        console.log(response)
        return response.json() 
        
}).then((data)=>{
    callback(data)
}).catch((error)=>{
    console.log("error occured",error)
})
}
function handleData(data){ 
  for(i=0;i<data.length;i++){
    console.log(data[i]['name'], data[i]['price'], data[i]['image'],data[i]['color']);
    heading2=document.getElementById("heading2")
    heading2.innerHTML = data[i]['name'], data[i]['price'], data[i]['image'],data[i]['color'];
}
}
fetchData(DEMO_URL,handleData)


