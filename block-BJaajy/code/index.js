let times = [1, 2, 3, 4];

let timesPromise = times.map((seconds) => {
  return new Promise((res) => {
    setTimeout(() => res(randomNumber()), seconds * 1000);
  });
});

Promise.all(timesPromise).then(console.log);

const userNames = ["johnhoro", "gaearon", "suraj122", "nnnkit", "getify"];

const userData = Promise.all(
  userNames.map((user) => {
    fetch(`https://api.github.com/users/${user}`)
      .then((res) => res.json())
      .then((user) =>
        console.log(`Name: ${user.name}, Followers: ${user.followers}`)
      );
  })
);

const dogPromise = fetch(`https://random.dog/woof.json`).then((res) =>
  res.json()
);

const catPromise = fetch(`https://aws.random.cat/meow`).then((res) =>
  res.json()
);

Promise.race([dogPromise, catPromise]).then(console.log);

Promise.all([
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("Arya"), 1000);
  }),
  "Sam",
  { name: "John" },
]).then(console.log);

//["Arya", "sam", {name: "John"}]
// It will 1 second to resolve the promise.