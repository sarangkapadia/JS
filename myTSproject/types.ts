enum Role { 'admin', 'developer', 'tester', 'manager' };

const objPerson = {
        name: 'sarang',
        age: 38,
        hobbies: ['tennis', 'piano'],
        role: Role.manager
};

console.log(objPerson);

const mixedArray = [1, 2, 'three', 4.5, true, objPerson];
console.log(mixedArray);

// for (const itr of objPerson.hobbies) {
//         console.log(itr);
// }
objPerson.hobbies.forEach(element => {
        console.log(element);
});

for (const hobby of objPerson.hobbies) {
        console.log(hobby.toUpperCase());
}