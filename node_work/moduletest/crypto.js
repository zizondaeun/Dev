//암호화

const crypto = require('crypto'); //  "start" : "node crypto.js",
const { resolve } = require('path');
//const { resolve } = require('path');


const createSalt = () => { //매번 결과가 다르게 나타내기 위해 salt 뿌림
    return new Promise((resolve, reject) => {
        crypto.randomBytes(64, (err,buf) => {
            if(err) reject(err);
            resolve(buf.toString('base64'));
        });
    });
};

const createCryptoPassword = async (plainPassword) => {
    const salt = await createSalt();

    return new Promise((resolve, reject) => {
        crypto.pbkdf2(plainPassword, salt, 100000, 64, 'sha512', (err, key) => {
            if(err) reject(err);
            resolve({password : key.toString('base64'), salt});
        });
    })
};

createCryptoPassword('pw1234')
.then(result => console.log(result));

createCryptoPassword('pw1234')
.then(result => console.log(result));

// const getCryptoPassword = (plainPassword, salt) => {
//     return new Promise((resolve, reject) => {
//         crypto.pbkdf2(plainPassword, salt, 9999, 64, 'sha512', (err, key) => {
//             if(err) reject(err);
//             resolve({password : key.toString('base64'), salt});
//         });
//     })
// };

const pw = crypto.createHash('sha512')
                    .update('pw1234')
                    .digest('base64');
console.log(pw);

