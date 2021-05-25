// const names: Array<string> = []; // SAME AS string[]
// // names[0].split(' ');

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout( () => {
//     resolve('this is done!');
//   }, 2000);
// });

// promise.then( data => {
//   console.log(data);
// });

// function merge<T extends object, U extends object>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }

// const mergedObj = merge({name: 'Josh', hobbies: ['Rugby']}, {'age': 46});
// console.log(mergedObj);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value';
  if (element.length === 1) {
    descriptionText = 'Got 1 element';
  } else if (element.length > 1) {
    descriptionText = 'Got ' + element.length + ' elements';
  }
  return[element, descriptionText];
}

// console.log(countAndDescribe('Hi there!'));
// console.log(countAndDescribe(['Rugby', 'Gaming']));
// console.log(countAndDescribe([]));
// // console.log(countAndDescribe(3)); doesn't have length so fails type checking

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return obj[key];
}

extractAndConvert({ name: 'Josh' }, 'name');

class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Josh');
textStorage.addItem('Amie');
textStorage.removeItem('Josh');
// console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

const objStorage = new DataStorage<object>();
const joshObj = { name: 'Josh' };
const amieObj = { name: 'Amie' };

objStorage.addItem(joshObj);
objStorage.addItem(amieObj);
// ...
objStorage.removeItem(joshObj);
// console.log(objStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal (
  title: string, 
  description: string, 
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Josh', 'Amie'];
// names.push('Bugs');
// names.pop();