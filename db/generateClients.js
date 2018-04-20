// // code from js-node-sessions-lesson
// const faker = require('faker');

// const count = +process.argv[2] || 5;

// function generateClients(i) {
//   return (i === 0) ? [
//     'fname',
//     'lname',
//     'username',
//     'email',
//     'password',
//     'dog_name',
//   ] : [
//     faker.name.firstName(),
//     faker.name.lastName(),
//     faker.internet.userName(),
//     faker.internet.email(),
//     faker.lorem.word(),
//     faker.lorem.dog_name(),
//   ];
// }

// const users = Array(count + 1).fill(0)
//   .map((e, i) => makeUser(i).join(','));
// console.log(users.join('\n'));

