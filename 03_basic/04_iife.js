// // Immediatly Invoked Function Expressions (IIFE)

(function chai() {
    // // (NAMED IFFE) this is called named IFFE
    console.log(`DB connected`);
})();
// // ; is must needed in IIFE

((name) => {
    console.log(`DB connected two ${name}`);
})("Prashant");