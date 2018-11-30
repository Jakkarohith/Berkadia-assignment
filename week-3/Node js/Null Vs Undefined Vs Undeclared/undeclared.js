console.log(nonDeclaredVariable);

console.log(typeof nonDeclaredVariable); 

if( typeof nonDeclaredVariable !== 'undefined' ) {
    console.log("This is an undeclared variable");
}