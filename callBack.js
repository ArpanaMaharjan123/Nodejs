const orders =[
    {fruits:"mango",qty:10},
    {fruits:"oragne",qty:3},
]

function getOrderItems(){
    console.log("getOrdersItems ===", orders)
} 
function addNewItem(getOrderItems){
    setTimeout(() =>{
        orders.push({fruits:"apple",qty:4});
        getOrderItems()
    },6000);
    
}
function addNewItem(callback){
    return new Promise((resolve,reject)=>{
       const err=false;
       setTimeout(()=>{
        orders.push({fruits: "apple",qty:4});
        resolve(true);
        if(err)
        reject()
       
       },6000);
    })
}

addNewItem().then(response =>{
    console.log("response sucess ===")
    getOrderItems()
}).catch((err)=>{
    console.log("err ===")
});
