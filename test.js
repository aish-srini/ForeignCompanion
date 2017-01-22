const RapidAPI = require('rapidapi-connect');
const rapid = new RapidAPI("ForeignCompanion", "083e204f-70fe-4969-9c09-ade3f2057ae5");


rapid.call('GoogleTranslate', 'translate', {
 'apiKey': 'AIzaSyCT0fa6soTqc5G3LX1N0qmdBqg1zBGwZZY',
 'string': 'hello',
 // 'targetLanguage': 'Spanish'
 'targetLanguage': 'es',

}).on('success', (payload)=>{
    // callback({});
    console.log(JSON.stringify(payload));
    // this.emit(':tell', payload, this.attributes.repromptSpeech);
   //  this.attributes.speechOutput = payload
   // //  this.attributes.repromptSpeech = "What else can I help with?";
   //  this.emit(':tell', this.attributes.speechOutput, this.attributes.repromptSpeech)
}).on('error', (payload)=>{
    // callback({});
    console.log("cant");
   //  this.attributes.speechOutput = "Can you say it again?"
   //  this.attributes.repromptSpeech = "What else can I help?"
    // this.emit(':ask', "Can you say it again?", this.attributes.repromptSpeech);
});
