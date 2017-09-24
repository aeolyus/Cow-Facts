'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = "amzn1.ask.skill.cb5d707b-1fe6-46e7-b9f6-41635ba870f1"; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'Cow Facts';

/**
 * Array containing cow facts.
 */
var FACTS = [
    "Cows are red-green colorblind",
    "A cow’s heart beats between 60 and 70 beats per minute",
    "Cows can hear lower and higher frequencies better than humans",
    "An average dairy cow weighs about 1,200 pounds",
    "A cows normal body temperature is 101.5°",
    "The average cow chews at least 50 times per minute",
    "The typical cow stands up and sits down about 14 times a day",
    "Cows actually do not bite grass; instead they curl their tongue around it",
    "Cows have almost total 360-degree panoramic vision",
    "Cows have a single stomach, but four different digestive compartments",
    "A dairy cow can produce 125 pounds of saliva a day",
    "Cows spend 8 hours per day eating, 8 hours chewing her cud (regurgitated, partially digested food), and 8 hours sleeping",
    "You can lead a cow upstairs, but not downstairs. Cows knees can’t bend properly to walk downstairs",
    "Cows can’t vomit",
    "Cows only have teeth on the bottom",
    "Cows can smell something up to 6 miles away",
    "One dairy cow creates 4 full time jobs in the local community",
    "The average cow will eat about 100 pounds of feed per day",
    "There are more than 800 different breeds of cattle around the world",
    "Cows can have regional accents",
    "All cows are female; males are called bulls"
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random cow fact from the cow facts list
        var factIndex = Math.floor(Math.random() * FACTS.length);
        var randomFact = FACTS[factIndex];

        // Create speech output
        var speechOutput = "Here's your fact: " + randomFact;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me a cow fact, or, you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};