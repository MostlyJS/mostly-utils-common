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

export default function nextFibonacci (current) {
  const [...fibs] = fibonacci(100);
  return fp.reduce((next, val) => current < val? fp.reduced(val) : next, 1, fibs);
}