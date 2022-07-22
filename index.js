const { findTheTreasure } = require('./findTheTreasure');

const startingPosition = [0,0];
const direction = 'North';
const instructions = [
    'Forward',
    'Forward',
    'Left',
    'Forward',
    'Forward',
    'Left',
];
console.log("I am starting at", startingPosition, " and facing", direction);
let results = (findTheTreasure(startingPosition, direction, instructions));
console.log("I finished at", results[0], "and facing", results[1]);
