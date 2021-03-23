const sentences = ['You will have -n -w\'s by the time you are -n', 'Get -n -w\'s next time you visit the grocery store, you\'ll need them', 'At the center of the moon there are -n times the amount of -w\'s'];
const numbers = [10, 42, 10000, -41, 30];
const things = ['duck', 'ball', 'banana', 'double-decker bus', 'shotgun'];


const getRandomVal = arr => {
    let randNum = Math.floor(Math.random() * arr.length);
    return arr[randNum];;
}

