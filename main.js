console.log("Connected");

const firstObject = {};

const user = {
  userName: 'biz.markies',
  password: 'abc123',
  lovesJavascript: true,
  favoriteNumber: 42,
}

// DOT NOTATION
// console.log(user.lovesJavascript);
// console.log(user.userName);
// // BRACKET NOTATION 

// const password = 'password';
// console.log(user['password']);
// console.log(user['userName']);
// console.log(user['favoriteNumber']);
// console.log(user.favoriteNumber);

// ASSIGNING VALUES

const newUser = {
  isNew: true,
}

// newUser.username = 'fresh.prince';
// console.log(newUser);
// newUser['password'] = 'winter2021'; 
// console.log(newUser);

const newObject = {
  username: 'John',
  sayHello: function () {
    console.log(`${this.username} says Hello!`);
  } 
}

//console.log(newObject.sayHello);
// newObject.sayHello();
// newObject.username = 'Aja';
// newObject.sayHello();

// ITERATE OVER AN OBJECT

const userTwo = {
  username: 'trinity.christiana',
  password: 'xyz0987',
  lovesJavascript: true,
  favoriteNumber: 12,
}

// for(let key in userTwo) {
//   console.log(key);
// }

for(let key in userTwo) {
//  console.log(key);
  console.log(userTwo[key]);
  //console.log(userTwo.key); // undefined
}

