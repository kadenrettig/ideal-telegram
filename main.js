// Kaden Rettig Tracecamp 2021
// javascript file for silly story generator NN: IDEAL TELEGRAM

//lines 5 - 12 give three variables that store references to the customName, randomize, story, and function randomValueFromArray()
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// strings from second section to be contained within variables
// big long string of text inside storyText
let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
// first set of three strings inside array insertX
let insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
// second set of three strings inside array insertY
let insertY = ['the soup kitchen', 'Disneyland', 'the White House'];