// object creation
let company = new Object();
company.name = "Facebook";
company.loc = "Menlo Park";
company.ceo = new Object();
company.ceo.firstname = "Mark";
company.ceo.favColor = "blue";



console.log(company);
console.log("company name is" + company.name);
console.log("company location is " + company.loc);
console.log("company ceo is " + company.ceo);
console.log("company CEO name is: " + company.ceo.firstname);

// alternative way to get at the properties
console.log("alternative way: " + company["name"]);

company.$stock = 100;
console.log(company.$stock);

company["stock of company"] = 110 // without dot notation
console.log("stock price is " + company["stock of company"]); //no dot notation

let stockPropName = "stock of company";
company[stockPropName] = 120;
console.log("Stock price is " + company[stockPropName]);