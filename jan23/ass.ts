//Enum Role
type Role="Manager"|"Developer"|"Intern";

// Status
type Status="active"|"inactive";

//Employee Structure
interface Employee{
    id:number;
    name:string;
    email:string;
    role:Role;
    status:Status
}

//Objects of Employee
const emp1:Employee= {id:101,
    name:"Ashu",
    email:"ashu@gmail.com",
    role:"Manager",
    status:"active"};
const emp2:Employee= {id:102,
    name:"Banita",
    email:"bani@gmail.com",
    role:"Developer",
    status:"active"};
const emp3:Employee= {id:103,
    name:"Chinmayee",
    email:"chinu@gmail.com",
    role:"Intern",
    status:"active"};
const emp4:Employee= {id:104,
    name:"Dhanu",
    email:"dhanu@gmail.com",
    role:"Intern",
    status:"inactive"};

//Utility types
type updatedEmp=Partial<Employee>;

type employee=Pick<Employee, 'name'|'role'>;

type empRecord= Record<Role, Employee[]>;

                                         //Tasks
//function to add an employee
let empArray:Employee[]=[];
function addEmployee(emp:Employee) {
    empArray.push(emp);
    console.log(`Employee ${emp.name} added successfully`);
}

addEmployee(emp1);
addEmployee(emp2);
addEmployee(emp3);
addEmployee(emp4);

//Update specific fields for an existing employee
function updateSpecificFields(id:number,upemp:updatedEmp):Employee[]{
    let updatedFieldArray:Employee[]=[];
    console.log(`Update specific fields for an existing employee with id ${id}`)
    for(let index = 0; index < empArray.length; index++) {
        if(empArray.find((emp)=>emp.id==id)){
            empArray[index]={ ...empArray[index], ...upemp };
            updatedFieldArray.push(empArray[index]);
        }
        
    }
    return updatedFieldArray;
}

updateSpecificFields(102,{role:"Manager"});

//display
function printEmployeesInTable() {
    console.log("Summary of employees:");
    console.table(empArray);
  }

  printEmployeesInTable();

                                //2.Activity Tracking

enum Work{
    AprooveLeaveApplications,
    RecordChecking,
    WebDevelopment,
    AssignmentCompletion
}
interface ActivityLogger{
    id:number;
    work:Work|string;
    date:Date
}

//activityLogger array
let activityArray:ActivityLogger[]=[];

//activityLogger function
function activityLogger(id:number, work:Work,date:Date): ActivityLogger[]{
    for(let i=0;i<empArray.length;i++){
        if(id==empArray[i].id){
            if (empArray[i].status=="active") {
                if (empArray[i].role!=="Manager"&&work==0||1) {
                    console.error("Employee don't have access to this task")
                }
                else{
                    console.log("Employee successfully accessed the task");
                    const emp1:ActivityLogger= {id, work,date};
                    activityArray.push(emp1);
                }
            }
            else{
                console.error("Inactive employee can't log in into activity")
            }
        }
    }
    return activityArray;
}

activityLogger(104, 1, new Date('2025-01-24'));

                                    //Analytics Dashboard
//count total employees
function countEmployees(empArray:Employee[]):number {
    return empArray.length;
}

console.log("Total number of employees:",countEmployees(empArray));

