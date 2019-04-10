var unirest = require('unirest');

unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=5&ranking=1&ignorePantry=false&ingredients=apples%2Cflour%2Csugar")
.header("X-RapidAPI-Host", "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com")
.header("X-RapidAPI-Key", "634fc51facmshe7b5d0948d9641dp14d22ejsn0d2d49745e9c")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
});