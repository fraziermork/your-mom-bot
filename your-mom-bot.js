'use strict'

let data       = require(__dirname + '/data.js');
let TwitterBot = require('twitter-bot');
let yourMomBot = new TwitterBot();

function contentFunction(tweetToRespondTo){
  console.log('yourMomSearchBot contentFunction called');
  console.log('tweetToRespondTo is', tweetToRespondTo.text);
  
  if(tweetToRespondTo.quoted_status_id_str || tweetToRespondTo.retweeted_status){
    console.log(tweetToRespondTo.quoted_status_id_str);
    console.log(tweetToRespondTo.retweeted_status);
    return
  }
  
  let maxLength         = 140 - (tweetToRespondTo.user.screen_name.length + 2); //2 extra chars, 1 for @ and 1 for a space
  let admonishment      = data.admonishments[getRandInt(0, data.admonishments.length)];
  let termOfEndearment  = data.termsOfEndearment[getRandInt(0, data.termsOfEndearment;.length)];
  let addOn;
  if (Math.random > 0.5) {
    addOn = data.additionalScoldings[getRandInt(0, data.additionalScoldings.length)];
  } else {
    addOn = data.additionalScoldings[getRandInt(0, data.additionalScoldings.length)];
  }
  let stringToTweet = admonishment + termOfEndearment;
  
  return (maxLength - (stringToTweet.length + addOn.length)) > 0 ? stringToTweet + addOn : stringToTweet;
  
}

function getRandInt(floor, cieling){
  return Math.ciel(Math.random() * (cieling - floor)) + Math.floor(floor);
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
