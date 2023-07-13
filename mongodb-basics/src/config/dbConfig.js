const mongoose=require('mongoose');

const connect=async()=>{
 
   const response= await mongoose.connect('mongodb://0.0.0.0:27017/twitter');
    // console.log(response)

}
module.exports=connect;