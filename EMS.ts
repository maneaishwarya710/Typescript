//enum definition
enum Role{
    Manager="Manager",
    Developer="Developer",
    Designer="Designer",
    Tester="Tester",
    HR="HR"
}

//Employee interface definition
interface Employee{
    id:number;
    name:string;
    role:Role;
    salary:number;
    isActive:boolean;
}

//EmployeeManagementSystem class
class EmployeeManagementSystem {
    private employees: Employee[]=[];

    //Add employee method
    addEmployee(employee:Employee):String{
        if (employee.salary<=0) {
            return `Salary cannot be 0 or less than zero`;
        }
        if(this.employees.some((emp)=>emp.id===employee.id)){
            return `ID must be unique`;
        }
        this.employees.push(employee);
        return `Employee added`;
    }

    //List all employees method
    // listAllEmployees():Employee[]{
    //     return this.employees;
    // }
    //data.forEach(employee => { console.log(`${employee.id}\t${employee.name}\t${employee.role}\t${employee.salary}\t${employee.isActive}`); });
    listAllEmployees():void{
        console.log("List of all employees:");
        this.employees.forEach(employee=>{console.log(`${employee.id}\t${employee.name}\t${employee.role}\t${employee.salary}\t${employee.isActive}`);});
    }

    // Filter employees by status 
    filterByStatus(isActive: boolean): Employee[] {
        const result: Employee[] = [];
        for (let i = 0; i < this.employees.length; i++) {
            if (this.employees[i].isActive === isActive) {
                result.push(this.employees[i]);
            }
        }
        return result;
    }

    //update employee status method
    updateEmployeeStatus(id:number, status:boolean):String{
        const employee=this.employees.find((employee)=>employee.id===id);
        if (employee) {
            employee.isActive=status;
            return `Employee status updated`;
        }

        return `Employee not found`;
    }

    // Calculate total salary of active employees 
    calTotalSal(): number {
        let total = 0;
        for (let i = 0; i < this.employees.length; i++) {
            if (this.employees[i].isActive) {
                total += this.employees[i].salary;
            }
        }
        return total;
    }

    //Sort employees by salary method
    sortEmpBySal(order:"asc"|"desc"):Employee[]{
        return this.employees.sort((a,b)=>order==="asc"?a.salary-b.salary:b.salary-a.salary);
    }
}

const empSys=new EmployeeManagementSystem();

//Add new employee
//call to EmployeeManagementSystem() method
console.log(empSys.addEmployee({id:1,name:"Reem",role:Role.Manager,salary:35000,isActive:true,}));

console.log(empSys.addEmployee({id:2,name:"Jay",role:Role.Designer,salary:55000,isActive:true,}));

console.log(empSys.addEmployee({id:3,name:"Rubina",role:Role.Developer,salary:39000,isActive:false,}));

console.log(empSys.addEmployee({id:4,name:"Ramya",role:Role.HR,salary:66000,isActive:true,}));

console.log(empSys.addEmployee({id:5,name:"Nita",role:Role.Tester ,salary:23000,isActive:false,}));

console.log(empSys.addEmployee({id:6,name:"Anil",role:Role.Developer,salary:14000,isActive:true,}));

//List of all employees
console.log("All Employees:",empSys.listAllEmployees());

//Filter employees by status
console.log("Active Employees:",empSys.filterByStatus(true));

//Update employee status
console.log(empSys.updateEmployeeStatus(1,false));

//Calculate total salary of active employees
console.log(empSys.calTotalSal());

//Sorting --asc
console.log("Employees sorted by salary:",empSys.sortEmpBySal("asc"));
