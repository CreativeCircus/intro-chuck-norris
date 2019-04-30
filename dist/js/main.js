"use strict";

// Uses AJAX to request a new Chuck Norris fact from the Chuck Norris API.
// The API responds with an object, and that object contains the fact, among other things
// We then call showFact with that object
// You shouldn't need to modify this function, just call it when you need a new fact,
// and then modify the showFact function to make it do what you want with the data.
var getFact = function getFact() {
  var CHUCK_API = 'https://api.chucknorris.io/jokes/random';
  factElement.innerHTML = '';
  axios.get(CHUCK_API).then(function (response) {
    // chuckData = response;
    showFact(response.data);
  }).catch(function (error) {
    console.warn(error);
  });
};

var showFact = function showFact(data) {
  console.log(data);
};
//# sourceMappingURL=main.js.map
