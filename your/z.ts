class Employee {
    constructor(public name: string, public role: 'manager' | 'admin' | 'employee') {}
}

//Create the Role-Based Access Decorator
function RoleBasedAccess(allowedRoles: string[]) {
    return function (target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function (...args: any[]) {
            const employee: Employee = args[0]; // Assuming the first argument is the employee

            if (allowedRoles.includes(employee.role)) {
                return originalMethod.apply(this, args);
            } else {
                console.log(`Access denied for ${employee.role} role.`);
                return null;
            }
        };

        return descriptor;
    };
}

//Apply the Decorator to Methods
class TaskManager {
    @RoleBasedAccess(['manager', 'admin'])
    createTask(employee: Employee, task: string) {
        console.log(`${employee.name} created task: ${task}`);
    }

    @RoleBasedAccess(['admin'])
    deleteTask(employee: Employee, taskId: number) {
        console.log(`${employee.name} deleted task with ID: ${taskId}`);
    }

    @RoleBasedAccess(['manager', 'admin', 'employee'])
    viewTask(employee: Employee, taskId: number) {
        console.log(`${employee.name} viewed task with ID: ${taskId}`);
    }
}

//Object Creation
const manager = new Employee('Alice', 'manager');
const admin = new Employee('Bob', 'admin');
const employee = new Employee('Charlie', 'employee');

const taskManager = new TaskManager();

taskManager.createTask(manager, 'Complete report'); // Allowed
taskManager.createTask(employee, 'Complete report'); // Access denied

taskManager.deleteTask(admin, 1); // Allowed
taskManager.deleteTask(manager, 1); // Access denied

taskManager.viewTask(employee, 1); // Allowed