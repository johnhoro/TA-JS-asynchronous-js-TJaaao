// let data = new Promise((resolve, reject) => {
//   resolve(21);
// })
//   .then((value) => {
//     return value + 10;
//   })
//   .then((value) => {
//     return value + 100;
//   })
//   .then((value) => {
//     if (value > 100) {
//       throw new Error(`greater than 100`);
//     }
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// let data = new Promise((res, rej) => {
//   res([`A`]);
// })
//   .then((value) => {
//     console.log(value);
//     return value.concat(`B`);
//   })
//   .then((value) => {
//     console.log(value);
//     return value.reduce((acc, cv, i) => {
//       acc[i] = cv;
//       return acc;
//     }, {});
//   })
//   .then((value) => console.log(value));

// let first = new Promise((res, rej) => {
//   res(1);
// })
//   .then((value) => {
//     console.log(value);
//     return 2;
//   })
//   .then((value) => {
//     console.log(value);
//     return 3;
//   })
//   .then((value) => {
//     console.log(value);
//     return 4;
//   })
//   .then((value) => {
//     console.log(value);
//   });

let promise = new Promise((res, rej) => {
  res(`John`);
})
  .then((value) => {
    console.log(value);
    return Promise.resolve(`Arya`);
  })
  .then((value) => {
    console.log(value);
    return new Promise((res) => {
      setTimeout(() => res(`Bran`), 2000);
    });
  })
  .then((value) => console.log(value));
