// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

const jobTitle = ["Construction Worker", "Masseuse", "Hair stylist", "Accountant", "Lawyer", "Stockbroker", "Musician", "Influencer", "Designer", "Person that 'plays' bass"];

const geographicLocation = ["Texas", "Hawaii", "Iceland", "Greenland", "Italy", "Paris", "France", "Germany", "China", "Japan"];


const partnersName = ["Jennifer", "Maya", "Brad", "Angel", "Tommy", "Daniel", "Allen", "Miranda", "Elizabeth", "Carla"];

const numberOfChildren = [0, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// console.log(numberOfChildren);
// console.log(partnersName);
// console.log(jobTitle);
// console.log(geographicLocation);

function randomIndex (array) {
    return Math.floor(Math.random() * array.length);
}

console.log(`You will be a ${jobTitle[randomIndex(jobTitle)]} in ${geographicLocation[randomIndex(geographicLocation)]}, and married to ${partnersName[randomIndex(partnersName)]} with ${numberOfChildren[randomIndex(numberOfChildren)]} children.`);
