const mongoose=require('mongoose');

const connect=async()=>{
 
   const response= await mongoose.connect('mongodb://127.0.0.1:27017/twitter');
    // console.log(response)

}
module.exports=connect;