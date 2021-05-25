let appId = 'abc';
const button = document.querySelector('button')!;

function add(n1: number, n2: number) {
  let result = n1 + n2;
  if (result > 0) {
    return result;
  } else {
    return 'Will return a negative number';
  }
}

function clickHandler(message: string) {
  console.log('Clicked! ' + message);
}

button.addEventListener("click", clickHandler.bind(null, "You're Welcome."));