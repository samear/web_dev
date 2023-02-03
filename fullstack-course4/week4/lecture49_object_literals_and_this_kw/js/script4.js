// Object literals
var dog = { // new Object()
    name: 'Milou',
    sex: 'female',
    age: 2,
    breed: 'Rottweiler mix',

    displayInfo: function() {
        console.log(this.name);
        console.log(this.sex);
        console.log(this.age);
        console.log(this.breed);
    },

    changeName: function() {
        this.name = 'sam';
    }
};



console.log(dog.displayInfo());
dog.changeName();
console.log("after chagnename...");
console.log(dog.displayInfo());