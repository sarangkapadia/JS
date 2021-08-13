const country = 'India';
const continent = 'Asia';
let population = 48;
console.log("Country = ", country,
        "Continent = ", continent,
        "Population In Millions = ", population);
console.log("-------------a1----------------");

const isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
console.log("-------------a2----------------");

language = 'Hindi';
console.log(language);
console.log("-------------a3----------------");

console.log(population / 2);
population++;
console.log(population);
if (population > 6000) console.log("more than finland");
else console.log("Less than finland");
if (population < 330) console.log("less than avg")
else console.log("more than avg");
const description = country + " is in " + continent + ", and its " + population + " people speak " + language;
console.log(description);
console.log("-------------basic operators-------");
const description_template = `${country} is in ${continent}, and it's ${population} people speak ${language}.`;
console.log(description_template);
if (population < 22) {
        console.log(`${country}'s population is below average`);
} else {
        console.log(`${country}'s population is above average`);
}

const numNeighbors = 1;//prompt("How many land neighbors does your contry have?");
if (Number(numNeighbors) === 1) {
        console.log("Only 1 neighbor");
} else if (numNeighbors > 1) {
        console.log("More than 1 neighbor");
} else {
        console.log("no neighbors");
}

if (language === 'English' && population < 50 && !isIsland) {
        console.log(`Sarah can live in ${country}`);
} else {
        console.log(`Sarah cannot live in ${country}`);
}


switch (language) {
        case 'Hindi': console.log('3rd place');
                break;
        case 'Chinese': console.log('most number of native speakers');
                break;
        case 'spanish': console.log('2nd place');
                break;
        default: console.log('Great language');
}

console.log(
        `${country}'s population is ${population > 33 ? 'above' : 'below'} average`,
);