const express=require('express');

const {PORT}=require('./config/serverConfig');
const connect=require('./config/dbConfig');

const TweetRepo=require('./repository/tweet-repo');
const Comment=require('./models/comment');
const setupServer=async ()=>{

  const app=express();
  
  const tweetRepo=new TweetRepo();

   
  app.listen(PORT,async ()=>{

    connect();
    console.log(`server is running at ${PORT}` );
     
     const comment =await Comment.create({content:"commenting on your second tweet"});
     const tweet=await tweetRepo.create({content:"creating new tweet"});
     tweet.comments.push(comment);
     console.log(tweet);
  });

}

setupServer();