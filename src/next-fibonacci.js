import fp from 'mostly-func';

function *fibonacci (n) {
  const infinite = !n && n !== 0;
  let current = 0;
  let next = 1;
  
  while (infinite || n--) {
    yield current;
    [current, next] = [next, current + next];
  }
}

const [...fibs] = fibonacci(100);
export default function nextFibonacci (current) {
  return fp.reduce((next, val) => current < val? fp.reduced(val) : next, 1, fibs);
}