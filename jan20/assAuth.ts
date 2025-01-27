// User Model
class Users {
    constructor(public id: number, public name: string, public role: string) {}
}

// Permissions mapping
const rolePermissions: { [key: string]: string[] } = {
    Admin: ['ViewReports', 'editReports', 'deleteReports'],
    Manager: ['ViewReports', 'editReports'],
    Employee: ['ViewReports'],
};

// Access Control Decorator
function Authorize(allowedRoles: string[]) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("Target:"+target);
        console.log("propertyKey:"+propertyKey);
        console.log("descriptor"+descriptor);
        const originalMethod = descriptor.value;

        descriptor.value = function (...args: any[]) {
            const user: Users = args[0]; // Assume the first argument is the user
            if (!allowedRoles.includes(user.role)) {
                console.error(`Access Denied: User ${user.name} with role ${user.role} cannot perform ${propertyKey}`);
                return;
            }
            console.log(`Access Granted: User ${user.name} is performing ${propertyKey}`);
            return originalMethod.apply(this, args);
        };
    };
}

// Service class with methods
class ReportService {
    @Authorize(['Admin', 'Manager', 'Employee'])
    viewReports(user: Users) {
        console.log('Viewing reports...');
    }

    @Authorize(['Admin', 'Manager'])
    editReports(user: Users) {
        console.log('Editing reports...');
    }

    @Authorize(['Admin'])
    deleteReports(user: Users) {
        console.log('Deleting reports...');
    }
}

// Test scenarios
const employee1 = new Users(1, 'Aman', 'Admin');
const employee2 = new Users(2, 'Banita', 'Manager');
const employee3 = new Users(3, 'Chinu', 'Employee');
const employee4 = new Users(4, 'Driti', 'Guest');

const reportService = new ReportService();

// Testing Access
reportService.viewReports(employee1);
reportService.viewReports(employee2);
reportService.viewReports(employee3);
reportService.viewReports(employee4);