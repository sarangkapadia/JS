var Role;
(function (Role) {
    Role[Role["admin"] = 0] = "admin";
    Role[Role["developer"] = 1] = "developer";
    Role[Role["tester"] = 2] = "tester";
    Role[Role["manager"] = 3] = "manager";
})(Role || (Role = {}));
;
var objPerson = {
    name: 'sarang',
    age: 38,
    hobbies: ['tennis', 'piano'],
    role: Role.manager
};
console.log(objPerson);
var mixedArray = [1, 2, 'three', 4.5, true, objPerson];
console.log(mixedArray);
// for (const itr of objPerson.hobbies) {
//         console.log(itr);
// }
objPerson.hobbies.forEach(function (element) {
    console.log(element);
});
for (var _i = 0, _a = objPerson.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
