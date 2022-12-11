

const characters = ['Goku','Vegeta','Trunks'];
const [ , , p3 ] = characters;
console.log( p3 );


const returnArray = () =>{
    return ['ABC', 123];
}

const [ letters, numbers ] = returnArray(); 
console.log(letters, numbers);


const useState = ( value ) => {
    return [ value, ()=>{ console.log('Hello World') } ];
}

const [ firstname, setName ] = useState( 'Goku' );

console.log( firstname );
setName();





