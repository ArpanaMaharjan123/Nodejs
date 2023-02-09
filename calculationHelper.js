const httpstatus= require("http-status");

((calculationHelper)=>{
    
    calculationHelper.sum = function(a,b){
        return a+b
    }
   
    calculationHelper.login= async (request) =>{
        let user="hello";
        let username=req.body.username;
        const isvalid=await calculationHelper.loginValidation(request);
        if(!isvalid){
            return{
                status: httpstatus.BAD_GATEWAY, message:"username is required!"
            }

        }
        if(user == username){
            console.log('sucesss');
            
            return "sucess";
        }
        else{
            console.log("unsucessfull");
            
            return "unsucessfull";
        }
    }
    calculationHelper.loginValidation= (request) =>{
        if(request.username){
            return true
        }
        return false
    }
})(module.exports)


