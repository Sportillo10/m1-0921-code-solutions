var final = 96;
var midterm = 89;
var quizzes = 90;

var maximumValue = Math.max(final, midterm, quizzes);

console.log('maximumValue:', maximumValue);

var heroes = ['Iron Man', 'Spider-man', 'Black Panther', 'Thor'];

var randomNumber = Math.random();

randomNumber = randomNumber * heroes.length;

var randomIndex = Math.floor(randomNumber);

console.log('randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];

console.log('randomHero:', randomHero);

var library = [
  {
    title: 'Heir to the Empire',
    author: 'Timothy Zahn'
  },
  {
    title: 'Star Wars: Light of the Jedi',
    author: 'Charles Soule'
  },
  {
    title: 'Star Wars: Darth Bane: Rule of Two',
    author: 'Drew Karpyshyn'
  }
];

var lastBook = library.pop();

console.log('lastBook:', lastBook);

var firstBook = library.shift();

console.log('firstBook:', firstBook);

var js = {
  title: 'Javascript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('library:', library);

var fullName = 'Chris Coyier';

var firstAndLastName = fullName.split(' ');

console.log('firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];

var sayMyName = firstName.toUpperCase();

console.log('sayMyName:', sayMyName);
