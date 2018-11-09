/*const person = {
    name: 'Andrew',
    age: 26,
    location: {
        city: 'Philadelphia',
        temp: 92
    }
};

const { name, age} = person;


console.log(`${name} is ${age}`

);

const { city, temp } = person.location;
if (city && temp) {
    console.log(`it's ${temp} in ${city}`);
}

const book = {
    title: 'ego is the enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'penguin'
    }
};

const { name: publisherName = 'self published' } = book.publisher;

console.log(publisherName);

*/

const address = ['354 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19624'];

const [street, city, state, zip] = address; 

console.log(`You are in ${city}, ${state}`);