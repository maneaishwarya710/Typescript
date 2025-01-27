var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//Objects of Employee
var emp1 = { id: 101,
    name: "Ashu",
    email: "ashu@gmail.com",
    role: "Manager",
    status: "active" };
var emp2 = { id: 102,
    name: "Banita",
    email: "bani@gmail.com",
    role: "Developer",
    status: "active" };
var emp3 = { id: 103,
    name: "Chinmayee",
    email: "chinu@gmail.com",
    role: "Intern",
    status: "active" };
var emp4 = { id: 104,
    name: "Dhanu",
    email: "dhanu@gmail.com",
    role: "Intern",
    status: "inactive" };
//Tasks
//function to add an employee
var empArray = [];
function addEmployee(emp) {
    empArray.push(emp);
    console.log("Employee ".concat(emp.name, " added successfully"));
}
addEmployee(emp1);
addEmployee(emp2);
addEmployee(emp3);
addEmployee(emp4);
//Update specific fields for an existing employee
function updateSpecificFields(id, updatedEmp) {
    var updatedFieldArray = [];
    console.log("Update specific fields for an existing employee with id ".concat(id));
    for (var index = 0; index < empArray.length; index++) {
        if (empArray.find(function (emp) { return emp.id == id; })) {
            empArray[index] = __assign(__assign({}, empArray[index]), updatedEmp);
            updatedFieldArray.push(empArray[index]);
        }
    }
    return updatedFieldArray;
}
updateSpecificFields(102, { role: "Manager" });
//display
function printEmployeesInTable() {
    console.log("Summary of employees:");
    console.table(empArray);
}
printEmployeesInTable();
//2.Activity Tracking
var Work;
(function (Work) {
    Work[Work["AprooveLeaveApplications"] = 0] = "AprooveLeaveApplications";
    Work[Work["RecordChecking"] = 1] = "RecordChecking";
    Work[Work["WebDevelopment"] = 2] = "WebDevelopment";
    Work[Work["AssignmentCompletion"] = 3] = "AssignmentCompletion";
})(Work || (Work = {}));
//activityLogger array
var activityArray = [];
//activityLogger function
function activityLogger(id, work, date) {
    for (var i = 0; i < empArray.length; i++) {
        if (id == empArray[i].id) {
            if (empArray[i].status == "active") {
                if (empArray[i].role !== "Manager" && work == 0 || 1) {
                    console.error("Employee don't have access to this task");
                }
                else {
                    console.log("Employee successfully accessed the task");
                    var emp1_1 = { id: id, work: work, date: date };
                    activityArray.push(emp1_1);
                }
            }
            else {
                console.error("Inactive employee can't log in into activity");
            }
        }
    }
    return activityArray;
}
activityLogger(101, 1, new Date('2025-01-24'));
//Analytics Dashboard
//count total employees
function countEmployees(empArray) {
    return empArray.length;
}
console.log("Total number of employees:", countEmployees(empArray));
