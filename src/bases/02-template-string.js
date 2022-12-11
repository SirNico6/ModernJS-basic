


const firstName = 'Nicolas';
const lastName  = 'Arevalo';

// const fullName = firstName + ' ' + lastName;
const fullName = `${ firstName } ${ lastName }`;

console.log( fullName );


function getHello(firstName) {
    return 'Hello ' + firstName;
}

console.log( `This is a text: ${ getHello( firstName ) }  ` );