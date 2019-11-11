// 1. feladat
//a. Primitív adattípusok
//1. number
let num = 2;

//2. string
let str = 'Béla';

//3. boolean
let decision = true;

//4. undefined
let decison2;

//5. null
let decison3 = null;

//b. Összetett adattípusok

//6. array
let arr = [1, 2, 'három', true, 6.8];

//7. object
let obj = {
  key1: 3,
  key2: 4
};

// 2. feladat: A referencia szerinti értékátadás esetén a függvénynek átadott összetett adattípus is módosul. A függvény módosítást végez az adott típuson és az eredetileg átadott értéke is változik, a tömbök és objektumok esetében. Az érték szerinti átadás esetén az eredeti adat nem módosul alapesetben. A primitívek esetén erről beszélünk.

// 3. feladat: Összeadás/Összegzés tétele
let test = [1, 2, 3, 4];
const sumArray = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};
console.log(sumArray(test));

// 4. feladat: Megszámlálás tétele
let test2 = [1, 1, 1, 2, 3, 4];
const countElement = (element, arr) => {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      counter++;
    }
  }
  return counter;
};
console.log(countElement(1, test2));

//5. feladat switch statement
let test3 = 3;

const switcher = (number) => {
  switch (number) {
    case 0:
      console.log('The number is: 0');
      break;
    case 1:
      console.log('The number is: 1');
      break;
    case 2:
      console.log('The number is: 2');
      break;
    case 3:
      console.log('The number is: 3');
      break;
    default:
      console.log('The number is not 0, 1, 2, or 3.');
  }
};
switcher(4);

//6. feladat Metszet tétele
let arrA = [1, 2, 3, 4];
let arrB = [1, 7, 9, 3];

const intersection = (arr, arr2) => {
  let inter = [];
  let k = 0;
  for (let i = 0; i < arr.length; i++) {
    let j = 0;
    while (j < arr2.length && arr2[j] !== arr[i]) {
      j += 1;
    }
    if (j < arr2.length) {
      inter[k] = arr[i];
      k += 1;
    }
  }
  return inter;
};

let result2 = intersection(arrA, arrB);
console.log(result2);

//7. feladat: Modulok exportálása

//Összeadás
const add = (a, b) => {
  //erre szükség van, mert különben stringként fűzi össze a bekért számokat.
  let temp1 = parseInt(a);
  let temp2 = parseInt(b);
  let c = temp1 + temp2;
  return c;
};

//Kivonás
const sub = (a, b) => {
  return a - b;
};

//Szorzás
const mult = (a, b) => {
  return a * b;
};

//Osztás
const divide = (a, b) => {
  return a / b;
};

module.exports = {
  add: add,
  sub: sub,
  mult: mult,
  divide: divide
};

//8. feladat: Matrix generátor a kettő hatványaival
const matrixGenerator = (row, col) => {
  const matrix = [];
  let index = 0;
  for (let i = 0; i < row; i++) {
    matrix[i] = [];
    for (let j = 0; j < col; j++) {
      matrix[i][j] = Math.pow(2, index);
      index++;
    }
  }
  return matrix;
};

let output = matrixGenerator(3, 3);
console.log(output);
