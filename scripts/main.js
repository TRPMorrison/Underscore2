var animal = {
  type: 'Monkey',
  name: 'George',
  origin: 'Amazon',
  eats: 'Bananas'
};


var templateString = $('#animalInfo').text();

// TEST FOR ERRORS
// console.log(templateString;

var templateFunction = _.template(templateString);

// TEST FOR ERRORS
// console.dir(templateFunction);

var finalHTML = templateFunction(animal);
console.log(finalHTML);
