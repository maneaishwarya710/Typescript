//enum definition
var Role;
(function (Role) {
    Role["Manager"] = "Manager";
    Role["Developer"] = "Developer";
    Role["Designer"] = "Designer";
    Role["Tester"] = "Tester";
    Role["HR"] = "HR";
})(Role || (Role = {}));
//EmployeeManagementSystem class
var EmployeeManagementSystem = /** @class */ (function () {
    function EmployeeManagementSystem() {
        this.employees = [];
    }
    //Add employee method
    EmployeeManagementSystem.prototype.addEmployee = function (employee) {
        if (employee.salary <= 0) {
            return "Salary cannot be 0 or less than zero";
        }
        if (this.employees.some(function (emp) { return emp.id === employee.id; })) {
            return "ID must be unique";
        }
        this.employees.push(employee);
        return "Employee added";
    };
    //List all employees method
    // listAllEmployees():Employee[]{
    //     return this.employees;
    // }
    //data.forEach(employee => { console.log(`${employee.id}\t${employee.name}\t${employee.role}\t${employee.salary}\t${employee.isActive}`); });
    EmployeeManagementSystem.prototype.listAllEmployees = function () {
        console.log("List of all employees:");
        this.employees.forEach(function (employee) { console.log("".concat(employee.id, "\t").concat(employee.name, "\t").concat(employee.role, "\t").concat(employee.salary, "\t").concat(employee.isActive)); });
    };
    // Filter employees by status 
    EmployeeManagementSystem.prototype.filterByStatus = function (isActive) {
        var result = [];
        for (var i = 0; i < this.employees.length; i++) {
            if (this.employees[i].isActive === isActive) {
                result.push(this.employees[i]);
            }
        }
        return result;
    };
    //update employee status method
    EmployeeManagementSystem.prototype.updateEmployeeStatus = function (id, status) {
        var employee = this.employees.find(function (employee) { return employee.id === id; });
        if (employee) {
            employee.isActive = status;
            return "Employee status updated";
        }
        return "Employee not found";
    };
    // Calculate total salary of active employees 
    EmployeeManagementSystem.prototype.calTotalSal = function () {
        var total = 0;
        for (var i = 0; i < this.employees.length; i++) {
            if (this.employees[i].isActive) {
                total += this.employees[i].salary;
            }
        }
        return total;
    };
    //Sort employees by salary method
    EmployeeManagementSystem.prototype.sortEmpBySal = function (order) {
        return this.employees.sort(function (a, b) { return order === "asc" ? a.salary - b.salary : b.salary - a.salary; });
    };
    return EmployeeManagementSystem;
}());
var empSys = new EmployeeManagementSystem();
//Add new employee
//call to EmployeeManagementSystem() method
console.log(empSys.addEmployee({ id: 1, name: "Reem", role: Role.Manager, salary: 35000, isActive: true, }));
console.log(empSys.addEmployee({ id: 2, name: "Jay", role: Role.Designer, salary: 55000, isActive: true, }));
console.log(empSys.addEmployee({ id: 3, name: "Rubina", role: Role.Developer, salary: 39000, isActive: false, }));
console.log(empSys.addEmployee({ id: 4, name: "Ramya", role: Role.HR, salary: 66000, isActive: true, }));
console.log(empSys.addEmployee({ id: 5, name: "Nita", role: Role.Tester, salary: 23000, isActive: false, }));
console.log(empSys.addEmployee({ id: 6, name: "Anil", role: Role.Developer, salary: 14000, isActive: true, }));
//List of all employees
console.log("All Employees:", empSys.listAllEmployees());
//Filter employees by status
console.log("Active Employees:", empSys.filterByStatus(true));
//Update employee status
console.log(empSys.updateEmployeeStatus(1, false));
//Calculate total salary of active employees
console.log(empSys.calTotalSal());
//Sorting --asc
console.log("Employees sorted by salary:", empSys.sortEmpBySal("asc"));
