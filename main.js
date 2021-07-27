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
let insertX = ['Willy the Goblin', 
               'Big Daddy', 
               'Father Christmas'];
// second set of three strings inside array insertY
let insertY = ['the soup kitchen',
               'Disneyland', 
               'the White House'];
// third set of three strings inside array insertZ
let insertZ = ['spontaneously combusted',
               'melted into a puddle on the sidewalk',
               'turned into a slug and crawled away'];

// add click event listener to the randomize variable
randomize.addEventListener('click', result);

// result function
function result() {
    // VARIABLES
    // newStory, create a new random story each time the button is presssed
    let newStory = storyText; 
    // array equivalents
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);

    // randomize array items in newStory
    newStory = newStory.replace(/:insertX:/gi, xItem);
    newStory = newStory.replace(/:insertY:/gi, yItem);
    newStory = newStory.replace(/:insertZ:/gi, zItem);

    // if statement to change default name Bob to entered custom name
    if(customName.value !== '') {
        let name = customName.value;
        newStory = newStory.replace(/Bob/gi, name);
    }

    // weight conversion if uk is checked
    if(document.getElementById("uk").checked) {
        // formulae for converting pounds to stones
        let weight = Math.round(300/14) + ' stone';
        // formulae for converting fahrenheit to centigrade
        let temperature =  Math.round((94-32)*(5/9)) + ' centigrade';

        // two string replacement lines that temp and weight lines in story with new values
        newStory = newStory.replace('94 fahrenheit', temperature);
        newStory = newStory.replace('300 pounds', weight);
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}