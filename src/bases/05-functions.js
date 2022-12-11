
// Functions in JS

const sayHi = function( name ) {
    return `Hello, ${ name }`;
}

const sayHi2 = ( name ) => `Hello, ${ name }`;
const sayHi3 = () => `Hello world`;

console.log( sayHi('Vegeta') );
console.log( sayHi2('Goku') );
console.log( sayHi3() );

const getUser = () => ({
        uid: 'ABC123',
        username: 'El_Papi1502'
});

const user = getUser();
console.log(user);

const getActiveUser = ( username ) =>({
    uid: 'ABC567',
    username
})

const activeUser = getActiveUser('Fernando');
console.log( activeUser );



