// const util = require('util');
// const fs = require('fs');
// const bcrypt = require('bcrypt');

// const client = require('../models/client');

// const readFile = util.promisify(fs.readFile);

// readFile('./users.csv', 'utf8')
//   .then((data) => {
//     const lines = data.trim().split('\n');

//     lines.shift();

//     return Promise.all(lines.map(async (record) => {
//       const [fname, lname, username, email, password, dog_name] = record.split(',');

//       const pwdHash  = await bcrypt.hash(password, 11);

//       return client.save({
//         fname,
//         lname,
//         username,
//         email,
//         password: pwdHash,
//         dog_name,
//       });
//     }));
//   })
//   .then(data => console.log({ data }))
//   .catch(err => console.error({ err }));
