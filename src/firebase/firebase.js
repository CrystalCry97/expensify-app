import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};


firebase.initializeApp(config);
const database =firebase.database();

export { firebase, database as default};

/* Run when any child is removed */

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

/* Run when any child is changes */

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

/* Run when there is at least one child in DB and if a child is added */

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

/* Get array data once */

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses=[];

//         snapshot.forEach((childSnapshot)=> {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });

//         console.log(expenses);
//     });

/* Get array data by subscription */

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses=[];

//     snapshot.forEach((childSnapshot)=> {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });

//     console.log(expenses);
// });

/* Push (with random id), remove and update data in array */

//   database.ref('expenses').push({
//     description:'Outing',
//     amount:'33000',
//     createdAt:'121218',
//     note:'beach'
//   });  

// database.ref('notes/-LRafKOpcPH1oIeDUt9p').remove();

//   database.ref('notes/-LRafKOpcPH1oIeDUt9p').update({
//         body: 'Buy food'
//   });

/* Subscribe the data (run when there's any changes in data set) */

//   database.ref().on('value',(snapshot) => { //get data in live
//         const val= snapshot.val();
//         console.log(`${val.name} is ${val.age} years old`);
//   });

/* Retrieve data */

//   database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     }).catch((e) => {
//         console.log('Error fetching data');
//     });

/* Save and update data */

//   database.ref().set({
//     name: 'Amal ',
//     age: 26,
//     isSingle:false,
//     location:{
//         poscode:14110,
//         city:'batu kawan'
//     }
//   }).then(() => {
//     console.log('Data is saved.');
//   }).catch((e) =>{
//     console.log('This failed.');
//   });

//   database.ref('age').set(28);
//   database.ref('location/city').set('simpang ampat');

//   database.ref().update({
//       name:'Mike',
//       age:29,
//       job: 'Software Dev',
//       isSingle:null,
//       'location/city':'Boston'
//   });

/* Remove all data */

// database.ref()
//     .remove()
//     .then(() =>{
//         console.log('Data is removed.');
//     }).catch((e) =>{
//         console.log('This is failed.');
//     });