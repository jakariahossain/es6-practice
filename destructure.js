const person = {
  name: "Jack William",
  age: 17,
  job: "Facebooker",
  gfName: "Ema Watson",
  address: "Kochu Khet",
  phone: "01717112211",
  friends: ["Tom Hanks", "Tom Cruise", "Someone"],
};
const { address, phone, gfName, salary } = person;

// const gfName = person.gfName;
// const phone = person.phone;

// console.log(gfName, phone, address, salary);

const friends = [
  "Sakib Khan",
  "Arman Khan",
  "Amir Khan",
  "Salman Khan",
  "Sharukh Khan",
];

// const [chotoFriend, nextFriend, ...oldersF] = friends;
// console.log(chotoFriend, nextFriend, oldersF);

const complexObject = {
  name: "abc",
  info: {
    address: "Kola Bagan",
    leader: "Tiger Leader",
  },
};

const { leader } = complexObject.info;
console.log(leader);
