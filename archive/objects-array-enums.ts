const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string, string];
} = {
  name: 'Joshua',
  age: 46,
  hobbies: ['Rugby', 'Gardening'],
  role: [3, 'applicant', 'new'],
};

person.role.push('admin'); // TS can't protect tuples from array push function
//person.role[1] = 10; // !!! ERROR - vilates tuple !!!

let activities: string[];
activities = ['Parenting'];

console.log(person.name);

for (const hobby of person.hobbies ) {
  console.log(hobby);
}