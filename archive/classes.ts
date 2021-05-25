class Department {
  // private id: string;
  // private name: string;
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}: ${this.name})`);
  }

  addEmployee(ees: string[]) {
    //validation code
    this.employees.push(...ees);
  }

  printEmployeeInformation() {
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, private admins: string[]) {
    super(id, 'IT');
    this.admins = admins; //  NOTE: super should be first in subclass constructor
  }

  describe () {
    super.describe();
    console.log('Admins are: ' + this.admins);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
  throw new Error('No report found.');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in a valid vaule!');
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  describe() {
    super.describe();
    console.log('Reports are: ' + this.reports);
    console.log('Most recent report is: ' + this.lastReport);
  }
}

// const itAdmins = ['Joshua'];
// const itDept = new ITDepartment('d1', itAdmins);
// const itEmployees = ['Bugsie', 'Allie'];
// itDept.addEmployee(itEmployees);
// itDept.describe();
// itDept.printEmployeeInformation();

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
// accountingCopy.describe();

const accountingDept = new AccountingDepartment('d2', []);
const accountingEmployees = ['Amie', 'Natalie'];
accountingDept.addEmployee(accountingEmployees);
accountingDept.mostRecentReport = 'Year end report';
accountingDept.addReport('Something went wrong...');
accountingDept.describe();
accountingDept.printEmployeeInformation();