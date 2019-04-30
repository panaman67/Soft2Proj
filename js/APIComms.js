const request = require('request');

var options = { 
	method: 'GET',
  url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=5&ranking=1&ignorePantry=false&ingredients=apples%2Cflour%2Csugar",
  headers: { 
    'cache-control': 'no-cache',
    'Content-Type': 'application/json',
    'X-RapidAPI-Key': "634fc51facmshe7b5d0948d9641dp14d22ejsn0d2d49745e9c",
    'header1': 'header-value-1'
  },
  qs: { 
    parameter1: 'parameter-value-1' 
  }
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);
  console.log(body);
});