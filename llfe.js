// Immediately Invoked Function Expressions (IIFE)

(function chai() {
    console.log(`DB CONNECTED`);

})();

    //()() // syntax of IIFE

    (() => {
        console.log(`DB CONNECTED TWO`)
    })();

    ((name) => {
        console.log(`DB CONNECTED TWO ${name}`);
        
    })('hitesh')