
// Destructuring
// Destructuring assignment

const person = {
    name: 'Tony',
    age: 45,
    codename: 'Ironman'
};

// const { age, codename, name, } = person;
 
// console.log( name );
// console.log( age );
// console.log( codename );

const useContext = ({ codename, name, age, range = 'Captain' }) => {

    // console.log( name, age, range );
    
    return {
        codename: clave,
        age: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }

}

const { codename, age, latlng: { lat, lng } } = useContext( person );

console.log(codename, age);
console.log( lat, lng );


