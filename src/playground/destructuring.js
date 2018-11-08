//
// object destructuring
//

// const person = {
//     name: 'Amal',
//     age: 21,
//     location: {
//         city: 'Batu Kawan',
//         temp: 40
//     }
// };

// const {name: firstName = 'Anonymous', age} = person;

// console.log(`${firstName} is ${age}`);

// const {city, temp: temperature} = person.location;
// if(city && temperature){
//     console.log(`It's ${temperature} degree in ${city}`);
// }

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name:publisherName = 'Self-publisher'} = book.publisher;
// console.log(publisherName);

//
// array destructuring
//

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
const [,, state = 'New York']= address;
console.log(`You are in ${state}.`);

const item = ['Coffee hot', '$2.00', '$2.50', '$2.75'];
const [itemName,, medCost='free']= item;
console.log(`A medium ${itemName} costs ${medCost}`);