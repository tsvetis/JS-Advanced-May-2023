function solution() {
  // abstract class
  function Employee(name, age) {
    this.name = name;
    this.age = age;
    this.salary = 0;
    this.dividend = 0;
    this.tasks = [];

    this.work = function () {
      const currentTask = this.tasks.shift();
      this.tasks.push(currentTask);
      console.log(`${this.name}${currentTask}`);
    };

    this.collectSalary = function () {
      console.log(
        `${this.name} received ${this.salary + this.dividend} this month.`
      );
    };
  }

  // Junior
  function Junior(name, age) {
    Employee.call(this, name, age);
    this.tasks = [" is working on a simple task."];
  }
  Junior.prototype = Object.create(Employee.prototype);

  // Senior
  function Senior(name, age) {
    Employee.call(this, name, age);
    this.tasks = [
      " is working on a complicated task.",
      " is taking time off work.",
      " is supervising junior workers.",
    ];
  }
  Senior.prototype = Object.create(Employee.prototype);

  // Manager
  function Manager(name, age) {
    Employee.call(this, name, age);
    this.tasks = [" scheduled a meeting.", " is preparing a quarterly report."];
  }
  Manager.prototype = Object.create(Employee.prototype);

  return { Employee, Junior, Senior, Manager };
}

const classes = solution();
// junior
const junior = new classes.Junior("Ivan", 25);
junior.work();
junior.work();
junior.salary = 5811;
junior.collectSalary();

// senior
const senior = new classes.Senior("Alex", 31);
senior.work();
senior.work();
senior.work();
senior.work();
senior.salary = 12050;
senior.collectSalary();

// manager
const manager = new classes.Manager("Tom", 55);
manager.salary = 15000;
manager.collectSalary();
manager.dividend = 2500;
manager.collectSalary();

// OUTPUT:
//       Ivan is working on a simple task.
//       Ivan is working on a simple task.
//       Ivan received 5811 this month.
//       Alex is working on a complicated task.
//       Alex is taking time off work.
//       Alex is supervising junior workers.
//       Alex is working on a complicated task.
//       Alex received 12050 this month.
//       Tom received 15000 this month.
//       Tom received 17500 this month.
