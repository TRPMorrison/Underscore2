var animal = {
    type: 'Monkey',
    name: 'George',
    origin: 'Amazon',
    eats: ['Bananas', 'Figs', 'Date']
};


var templateString = $('#animalInfo').text();

// TEST FOR ERRORS
// console.log(templateString;

var templateFunction = _.template(templateString);

// TEST FOR ERRORS
// console.dir(templateFunction);

var finalHTML = templateFunction(animal);
// TEST FOR ERRORS
// console.log(finalHTML);

$('.container').html(finalHTML);
