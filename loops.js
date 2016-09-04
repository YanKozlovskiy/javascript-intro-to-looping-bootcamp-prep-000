function forLoop(array) {
  for (var i = 1; i <= 25; i++) {
    array.push(`I am ${i} strange loop${i === 0 ? '' : 's'}.`);
  }
  return array;
}

function whileLoop(n) {
  i = 0;
  while (n > 0) {
    console.log(n);
    n--;
  }
  return 'done';
}
function doWhileLoop(array) {

  function maybeTrue() {
    return Math.random() >= 0.5;
  }

  do {
    array.pop();
  } while (array.length > 0 || maybeTrue());
  return array;
}
