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
