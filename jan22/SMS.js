var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Base class Person
var Person = /** @class */ (function () {
    //Person class constructor
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    //introduce method
    Person.prototype.introduce = function () {
        console.log("Hi!, my name is ".concat(this.name, " and i am ").concat(this.age, " year old"));
    };
    return Person;
}());
//Derived class Student
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, studentId, grade) {
        var _this = _super.call(this, name, age) || this;
        _this.studentId = studentId;
        _this.grade = grade;
        Student.studentCount++;
        return _this;
    }
    //getStudentcount method
    Student.getStudentcount = function () {
        return Student.studentCount;
    };
    Student.prototype.introduce = function () {
        console.log("Hi! I am a student and my name is ".concat(this.name));
    };
    Student.studentCount = 0;
    return Student;
}(Person));
//Derived class Teacher
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, age, teacherId, subject) {
        var _this = _super.call(this, name, age) || this;
        _this.teacherId = teacherId;
        if (subject) {
            _this.subject = subject;
        }
        Teacher.teacherCount++;
        return _this;
    }
    //getTeachercount method
    Teacher.getTeachercount = function () {
        return Teacher.teacherCount;
    };
    Teacher.prototype.introduce = function () {
        console.log("Hi!, I am a teacher and my name is ".concat(this.name, " "));
    };
    Teacher.teacherCount = 0;
    return Teacher;
}(Person));
//Abstract class Staff
var Staff = /** @class */ (function () {
    function Staff(department, staffId) {
        this.department = department;
        this.staffId = staffId;
    }
    return Staff;
}());
//Clerk subclass to implement Staff
var Clerk = /** @class */ (function (_super) {
    __extends(Clerk, _super);
    function Clerk(department, staffId, responsibility, salary) {
        var _this = _super.call(this, department, staffId) || this;
        _this.responsibility = responsibility;
        _this.salary = salary;
        return _this;
    }
    Clerk.prototype.workDetails = function () {
        console.log("Office document work");
    };
    return Clerk;
}(Staff));
//Class Person Object Creation
var person1 = new Person("Rashi", 23);
person1.introduce();
var person2 = new Person("Riya", 41);
var person3 = new Person("Juhi", 27);
//Class Student Object Creation
var student1 = new Student("Ajinkya", 13, 101, 7);
student1.introduce(); //call to introduce
var student2 = new Student("Ravi", 15, 404, 9);
var student3 = new Student("Samiksha", 16, 301, 10);
console.log(Student.getStudentcount()); //call to getStudentcount
//Class Teacher Object Creation
var teacher1 = new Teacher("Ruhan", 45, 1101, "Maths");
student1.introduce();
var teacher2 = new Teacher("Hina", 39, 1105); //Optional member variable
console.log(teacher2);
var teacher3 = new Teacher("Samaira", 30, 1123, "History");
console.log(Teacher.getTeachercount());
var clerk1 = new Clerk("IT", 2022, "Managing Documentation", 20000);
console.log(clerk1);
clerk1.workDetails(); //call to work details
