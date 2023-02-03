function show() {
    var foo = "Foo";
    let bar = "Bar1";

    console.log(foo, bar);

    //Block
    {
        var moo = "Moooo";
        let buz = "Buzzzz";
        console.log(moo, buz);
    }
    
    console.log("print moo from outside of the block " + moo);
    console.log("Print buz from outside of the block: " + buz); //error let only can be seen within the block
}

show();
