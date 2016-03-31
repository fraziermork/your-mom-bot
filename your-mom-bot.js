'use strict'

let data       = require(__dirname + '/data.js');
let TwitterBot = require('twitter-bot');
let yourMomBot = new TwitterBot();

function contentFunction(tweetToRespondTo){
  console.log('yourMomSearchBot contentFunction called');
  console.log('tweetToRespondTo is', tweetToRespondTo.text);
  
}

function botCreationCallback(error, botName){
  console.log('botCreationCallback called');
  if(error){
    console.log(err)
  }
  console.log('Now admonishing internet users.');
}

let botOptions = {
  postInReply: true,
  botName: 'yourMomSearchBot', 
  callback: (err, data, response) => {
    if (err){
      console.log('Error with yourMomBot', err);
    } else {
      console.log(data.text);
    }
  }
}

yourMomBot.defineSearchBot(contentFunction, 'your mom', botCreationCallback, botOptions);
yourMomBot.initialize();
