// Better way: object literal
// alternative way to crate object without using new and dot notation
let facebook = {
    name: "Facebook",
    ceo: {
        firstName: "Mark",
        favColor: "blue"
    },
    $stock: 110,
    "stock of company": 120
};
console.log(facebook);

// accessing the property
console.log("ACCESSING THE PROPERTIES");
console.log(facebook.ceo.firstName);
console.log(facebook.name);
console.log("$stock: " + facebook.$stock);
console.log("stocke of company: " + facebook["stock of company"]);