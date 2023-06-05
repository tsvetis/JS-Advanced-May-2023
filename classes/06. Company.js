class Company {
  constructor() {
    this.departments = [];
  }

  getDepart(name) {
    const depart = this.departments.find((x) => x.name === name);

    if (!depart) {
      const temp = { name, employees: [], salaries: [], positions: [] };
      this.departments.push(temp);
      return temp;
    }

    return depart;
  }

  getSalariesSum(depart) {
    return depart.salaries.reduce((a, v) => a + v, 0);
  }

  bestSalaryDepart() {
    return this.departments.sort(
      (a, b) =>
        this.getSalariesSum(b) / b.salaries.length -
        this.getSalariesSum(a) / a.salaries.length
    )[0];
  }

  addEmployee(...args) {
    const [name, salary, position, departmentName] = args;
    const isInvalidInput =
      args.some((x) => x === undefined || x === null || x === "") || salary < 0;

    if (isInvalidInput) {
      throw new Error("Invalid input!");
    }

    const department = this.getDepart(departmentName);
    department.employees.push(name);
    department.salaries.push(salary);
    department.positions.push(position);
    return `New employee is hired. Name: ${name}. Position: ${position}`;
  }

  bestDepartment() {
    const best = this.bestSalaryDepart();

    const combinedEmployees = best.employees.reduce((a, v, i) => {
      a[i] = [];
      a[i].push(v, best.salaries[i], best.positions[i]);
      return a;
    }, []);

    const sorted = combinedEmployees.sort((a, b) => {
      return b[1] - a[1] === 0 ? a[0].localeCompare(b[0]) : b[1] - a[1];
    });

    const printData = sorted.map((x) => x.join(" ")).join("\n");

    const avgSalary = (
      this.getSalariesSum(best) / best.salaries.length
    ).toFixed(2);
    return `Best Department is: ${best.name}
Average salary: ${avgSalary}
${printData}`;
  }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());

// OUTPUT:
//       Best Department is: Construction
//       Average salary: 1500.00
//       Stan 2000 architect
//       Stanimir 2000 engineer
//       Pesho 1500 electrical engineer
//       Slavi 500 dyer
