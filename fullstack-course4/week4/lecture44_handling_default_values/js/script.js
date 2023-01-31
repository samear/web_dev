// default values
function orderChickenWith(sideDish) {
    /* if(sideDish === undefined) {
        sideDish = "whatever!";
    } */
    // this above if statement can be replace with the line below
    sideDish = sideDish || "whatever!"; // "" || "whatever"
    console.log("Checken with " + sideDish);
}

orderChickenWith("noodles");
orderChickenWith(); 