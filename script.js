const sentences = ['You will have -n -ws by the time you are -n', 'Get -n -ws next time you visit the grocery store, you\'ll need them', 'At the center of the moon there are -n times the amount of -ws'];
const numbers = [10, 42, 10000, -41, 30];
const things = ['duck', 'ball', 'banana', 'finger Gun', 'shotgun'];

// Get random value from array.
const getRandomVal = arr => {
    let randNum = Math.floor(Math.random() * arr.length);
    return arr[randNum];
}

const replaceVals = (sourceStr, findVal, replaceStr) => {
    const searchExp = new RegExp(findVal, 'g');
    let newStr = sourceStr.replace(searchExp, replaceStr);
    return newStr;
}

const buildMessage = () => {
    const randSentence = getRandomVal(sentences),
    randNumber = getRandomVal(numbers),
    randThing = getRandomVal(things);
    
    // Replace -n with number value
    const randSentenceWithNumbers = replaceVals(randSentence, '-n', randNumber);

    // Replace -w with thing value
    const randSentenceComplete = replaceVals(randSentenceWithNumbers, '-w', randThing);

    // Return completed sentence
    return randSentenceComplete;
}

console.log(buildMessage());