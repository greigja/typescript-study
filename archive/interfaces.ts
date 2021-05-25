// type AddFn = (n1: number, n2: number) => number;
interface AddFn {
  (n1: number, n2: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

console.log(add(3, 5));


interface FirstName {
  readonly fName: string;
}

interface LastName {
  readonly lName: string;
}

interface Greetable extends FirstName, LastName {
  greet(phrase: string): void;
}

class Person implements Greetable {
  fName: string;
  lName: string;
  age = 30;

  constructor(fn:string, ln:string) {
    this.fName = fn;
    this.lName = ln;
  }

  greet(phrase: string) {
    console.log(phrase + ' ' + this.fName + ' ' + this.lName);
  }
}

let user1: Greetable;

user1 = new Person('Josh', 'Greig');

user1.greet('Hi there - I am');
console.log(user1);