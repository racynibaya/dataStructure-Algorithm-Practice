// linear time - O(n)
// Input increase, number of operation increase
const nemo = [
  'nemo',
  'dory',
  'bruce',
  'marlin',
  'gill',
  'bloat',
  'nigel',
  'squir',
  'darla',
  'hank',
];
const large = new Array(100000).fill('nemo');
function findNemo(array) {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found NEMO');
    }
  }
  let t1 = performance.now();
  console.log('Call to find Nemo took' + (t1 - t0) + ' milliseconds');
}

findNemo(large);

// Constant Time - O(1)
// No matter the boxes increase it only grabs one thing.
const boxes = [0, 1, 2, 3, 4, 5, 6, 7];
const compressFirstBox = function (boxes) {
  console.log(boxes[0]);
};

compressFirstBox(boxes);

const logFirstTwoBoxes = function (boxes) {
  console.log(boxes[0]); // O(1)
  console.log(boxes[1]); // O(1)
};

logFirstTwoBoxes(boxes); // O(2)

// Challenge
// What is the Big O of the below function? (Hint, you may want to go line by line)
const funChallenge = function (input) {
  let a = 10; // O(1)
  a = 50 + 3; // O(1)

  for (let i = 0; i < input.length; i++) /* O(n) */ {
    // another function(); // O(n)
    let stranger = true; // O(n)
    a++; // O(n)
  }

  return a; //O(1)
};

funChallenge([1, 2, 3, 4, 5]);
// -> 1 + 1 + 1 + (n + n + n + n)
// 3 + 4n -> BIG O(3 + 4Nn)

const anotherFunChallenge = function (input) {
  let a = 5; // O(1)
  let b = 10; // O(1)
  let c = 50; // O(1)

  for (let i = 0; i < input; i++) /* O(n) */ {
    let x = i + 1; // O(n)
    let y = i + 2; // O(n)
    let z = i + 3; // O(n)
  }

  for (let j = 0; j < input; i++) /* O(n) */ {
    let p = j * 2; // O(n)
    let q = j * 2; // O(n)
  }

  let whoAmI = 'I dont know'; // O(1)
};
// 1 + 1 + 1 + 1 + (n + n + n + n + n + n + n)
// -> BIG O (4 + 7n)
anotherFunChallenge(5);
