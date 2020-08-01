

function algoATM(amount) {
  let notes2k, notes500, notes100;

  if (amount%100 !== 0) {
    return ('Please Enter Amount In Multiple of 2000, 500 Or 100 Of Notes');
  }
  notes2k = Math.floor(amount/2000);
  rest = amount%2000;

  notes500 = Math.floor(rest/500);
  rest = rest%500;

  notes100 = Math.floor(rest/100);

  return [notes2k, notes500, notes100];
}

console.log(algoATM(2600));











// second program
var color = ['red',
'green', 'yellow', 'green', 'red', 'red', 'green', 'red', 'green', 'blue', 'yellow',
'green', 'green', 'red', 'green', 'blue']


const count =
  color.reduce((a, b) => ({ ...a,
  [b]: (a[b] || 0) + 1
}), {})


let finalAnser =  Object.keys(count).reduce(function(a, b){ return (count[a] > count[b]) ? a : b });



console.log('The color which is in maximum times is', finalAnser)


// first program
