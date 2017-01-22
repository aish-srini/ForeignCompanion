const RapidAPI = require('rapidapi-connect');
const rapid = new RapidAPI("ForeignCompanion", "083e204f-70fe-4969-9c09-ade3f2057ae5");

rapid.call('GoogleTranslate', 'translateAutomatic', { 
	'apiKey': 'AIzaSyAfqcbjvhcMMXsN4S8DzXwBXfD8YyuPQjI',
	'string': '',
	'targetLanguage': 'Spanish'
 
}).on('success', (payload)=>{
	 /*YOUR CODE GOES HERE*/ 
}).on('error', (payload)=>{
	 /*YOUR CODE GOES HERE*/ 
});
