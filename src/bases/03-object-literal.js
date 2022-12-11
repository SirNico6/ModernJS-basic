

const person = {
    firstName: 'Tony',
    LastName: 'Stark',
    age: 45,
    address: {
        city: 'New York',
        zip: 55321321,
        lat: 14.3232,
        lng: 34.9233321
    }
};

// console.table( person );

const person2 = { ...person };
person2.firstName = 'Peter';


console.log( person );
console.log( person2 );







