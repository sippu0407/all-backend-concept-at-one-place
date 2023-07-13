const express=require('express');

const {PORT}=require('./config/serverConfig');
const connect=require('./config/dbConfig');

const TweetRepo=require('./repository/tweet-repo');

const setupServer=async ()=>{

  const app=express();
  
  const tweetRepo=new TweetRepo();

  tweetRepo.create({content:"first tweet"});
  app.listen(PORT,()=>{

    connect();
    console.log(`server is running at ${PORT}` );

  });

}

setupServer();