var express = require('express')
var app= express()
var PORT = process.env.PORT || 4000
const bodyParser = require('body-parser')
const {sum,login}=require("./calculationHelper");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
//app.use(cors({origin:"*"}));
//app.set("port",port);



const emp=[{
    empID:1,
    empName:'Lakas',
    empSalary: 8000
}]
app.use(express.json());
app.get('/calculate',(req, res)=>{
    
    console.log(sum(2,4));
   res.send('hello');
  
    
})
app.post('/',(req, res)=>{
    
   const newEmp={
    empID : req.body.id,
    empName : req.body.name,
    empSalary : req.body.salary
   }
   emp.push(newEmp)
   res.send(emp)
  
    
})
app.post('/login',(req,res)=>{
    console.log(req.body)
    const response= login(req.body);
    res.status(202).send(response);

})
app.listen(PORT,()=>console.log(`server is running on port no:${PORT}`))