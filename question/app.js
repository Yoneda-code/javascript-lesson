// 基礎問題
// Q1
let nickname = '米田';
let age= 27;
console.log('私のニックネームは' + nickname + 'です。年齢は' + age +'歳です。');

// Q2
let languages =['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];
let text = `私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`;
console. log(text);

// Q3
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};
console.log(user.age);

// Q4
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];
console.log(playerList[1].favorites[1]);

// Q5
const totalAge = playerList[0].age + playerList[1].age + playerList[2].age;
const averageAge = totalAge / playerList.length;
console.log(averageAge);

// Q6
function sayhello(){
  console.log('Hello');
}
sayhello();

let sayWorld = function () {
  console.log('World');
};
sayWorld();

// Q7
user.birthday = '2000-09-27';

user.sayHello = function(){
  console.log('Hello!');
};
user.sayHello();

// Q8
let calc = {};
calc.add = function(x,y){
  console.log(x+y);
};
calc.add(2,5);

calc.subtract = function(x,y){
  console.log(x-y);
};
calc.subtract(20,10);

calc.multiply = function(x,y){
  console.log(x*y);
};
calc.multiply(7,7);

calc.divide = function(x,y){
  console.log(x/y);
};
calc.divide(25,5);

// Q9
function remainder(x,y){
  let num = x % y;
  return num;
}
console.log('5を3で割った余りは' + remainder(5,3) + 'です。');

// Q10
// foo関数のスコープ内で定義されたxを、関数の外からxを参照することができない。

// 応用編
// Q1
let random = Math.floor(Math.random() * 10);
console.log(random);

// Q2 -1
setTimeout(() => {
console.log('Hello World!');
},3000);

// Q2 -2
function printName(firstName, formatter) {
  console.log(formatter(firstName));
}

const addIntro = (name) => '私の名前は' + name + 'です。';

printName('米田', addIntro);

// Q3
let num = 10;
if(num >= 0){
  console.log('num is greater than 0');
}else if(num <= 0){
  console.log('num is less than 0');
}else if(num === 0){
  console.log('num is 0')
}

// Q4
let numbers =[];
for (let i = 0; i < 100; i++){
  numbers.push(i)
}
console.log(numbers);

// Q5
let mixed = [4, '2', 5, '8', '9', 0, 1];
for(let i = 0; i < mixed.length; i++){
  if(typeof mixed[i] !== 'number'){
    console.log('not number');
  }else if(mixed[i] % 2 === 0){
    console.log('even');
  }else {
    console.log('odd');
  }
}
