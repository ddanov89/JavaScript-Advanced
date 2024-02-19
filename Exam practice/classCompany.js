class Company {
    constructor() {
        this.department = {};
    }
    addEmployee(name, salary, position, department) {
        salary = Number(salary);
        if (!name || !salary || !position || !department) {
            throw new Error('Invalid input');
        } else if (Number(salary) < 0) {
            throw new Error('Invalid input');
        }
        if (!this.department[department]) {
            this.department[department] = {
                avg: 0,
                sumSalary: 0,
                employees: []
            };
        }
        this.department[department].employees.push({ name, salary, position });
        this._updateDepartmentInfo(department, salary);
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }
    bestDepartment() {
        let bestDepartmentArr = this._findBestDepartment();
        let buff = `Best Department is: ${bestDepartmentArr[0]}\n`;
        buff += `Average salary: ${bestDepartmentArr[1].avg.toFixed(2)}\n`;
        
        bestDepartmentArr[1].employees.sort((employee1, employee2) => {
            return employee2.salary - employee1.salary || employee1.name.localeCompare(employee2.name);
        }).forEach(employee => buff += `${employee.name} ${employee.salary} ${employee.position}\n`);
        return buff.trim()
    }
    _findBestDepartment() {
        return Object.entries(this.department).sort((a, b) => b[1].avg - a[1].avg)[0];
    }
    _updateDepartmentInfo(department, salary) {
        let currentDepartment = this.department[department];
        currentDepartment.sumSalary += salary;
        currentDepartment.avg = currentDepartment.sumSalary / currentDepartment.employees.length;
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