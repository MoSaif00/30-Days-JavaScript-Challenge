const dogs = [
  {name: 'Snickers', age: 2},
  {name: 'hugo', age: 8},
];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = 'green';
  p.style.fontSize = '50px';
}

// Regular
console.log('hi');

// Interpolated
console.log('hello World, I am %s', 'Mohammed');

// Styled
console.log('%c hello World, I am ', 'font-size:30px; color:purple');

// warning!
console.warn('Warning, OH!!!');

// Error :|
console.error('Errorrrr!!!!');

// Info
console.info('first time i try these cool tools');

// Testing
console.assert('2===3', ' not correct');

// clearing
// console.clear();

// Viewing DOM Elements
const p = document.querySelector('p');
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach((dog) => {
  console.group(`${dog.name}`);
  console.log(`this is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count('hello');
console.count('hello');
console.count('hi');
console.count('hello');
console.count('hi');
console.count('hello');

// timing
console.time('fetching data');
fetch('')
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd('fetching data');
    console.log(data);
  });
