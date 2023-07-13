const Tweet=require('../models/tweet');

class TweetRepo{

 async create(data){

    const tweet=await Tweet.create(data);
    return tweet;
 }


}

module.exports=TweetRepo;