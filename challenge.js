const johnMass = 85;
const johnHeight = 1.76;
const johnBMI = johnMass / johnHeight ** 2;

const markMass = 95;
const markHeight = 1.88;
const markBMI = markMass / markHeight ** 2;

const markHigherBMI = markBMI > johnBMI;

console.log(johnBMI, markBMI, markHigherBMI);

if (markBMI > johnBMI) {
        console.log(`Mark's BMI ${markBMI} is higher than John's BMI ${johnBMI}.`);
} else {
        console.log(`John's BMI ${johnBMI} is higher than Mark's BMI ${markBMI}.`);
}
console.log("Coding challenge 2");

const dolphins_score = 97 + 112 + 101;
const average_dolphins_score = dolphins_score / 3;

const koalas_score = 109 + 95 + 106;
const average_koalas_score = koalas_score / 3;

if (average_dolphins_score > average_koalas_score && average_dolphins_score >= 100) {
        console.log(`Dolphines Win! avg ${average_dolphins_score}`);
} else if (average_dolphins_score < average_koalas_score && average_koalas_score >= 100) {
        console.log(`Koalas Win! avg ${average_koalas_score}`);
} else if (average_dolphins_score === average_koalas_score && average_koalas_score >= 100 && average_dolphins_score >= 100) {
        console.log("Draw");
} else {
        console.log(`Both averages below 100 - no winner`);
}

const bill = 40;
tip = bill > 50 && bill < 300 ? bill * .15 : bill * .2;
console.log(`Bill = ${bill}, Tip = ${tip} Total = ${bill + tip}`);




