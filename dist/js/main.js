"use strict";var getFact=function(){axios.get("https://api.chucknorris.io/jokes/random").then(function(o){showFact(o.data)}).catch(function(o){console.warn(o)})},showFact=function(o){console.log(o)};
//# sourceMappingURL=main.js.map