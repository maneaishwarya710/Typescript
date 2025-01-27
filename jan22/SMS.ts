//Base class Person
class Person {
    name:number;
    public age:number

    //Person class constructor
    constructor(name, age) {
        this.name=name;
        this.age=age;
    }

    //introduce method
    introduce(){
        console.log(`Hi!, my name is ${this.name} and i am ${this.age} year old`);
    }
}

//Derived class Student
class Student extends Person {
    readonly studentId:number;
    static studentCount:number=0;
    grade:number;

    constructor(name, age,studentId, grade) {
        super(name,age);
        this.studentId=studentId;
        this.grade=grade;

        Student.studentCount++;
    }

    //getStudentcount method
    public static getStudentcount():number{
        return Student.studentCount;
    }

    introduce(){
        console.log(`Hi! I am a student and my name is ${this.name}`);
    }
}

//Derived class Teacher
class Teacher extends Person {
    readonly teacherId:number;
    subject?:string;
    static teacherCount=0;

    constructor(name, age,teacherId, subject?) {
        super(name,age);
        this.teacherId=teacherId;
        if(subject){
            this.subject=subject;
        }

        Teacher.teacherCount++;
    }

    //getTeachercount method
    public static getTeachercount():number {
        return Teacher.teacherCount
    }

    introduce(){
        console.log(`Hi!, I am a teacher and my name is ${this.name} `);
    }
}

//Abstract class Staff
abstract class Staff{
    public department:string;
    protected staffId:number;

    constructor(department, staffId) {
        this.department=department;
        this.staffId=staffId;
    }

    //abstract method workDetails
    abstract workDetails():void;
}

//Clerk subclass to implement Staff
class Clerk extends Staff {
    responsibility:string;
    private salary:number;

    constructor(department, staffId, responsibility, salary) {
        super(department,staffId);
        this.responsibility=responsibility;
        this.salary=salary;
    }

    workDetails(): void {
        console.log("Office document work")
    }
    
    // getPrivateField() {
    //     return this.#privateField;
    // }
}

//Class Person Object Creation
const person1=new Person("Rashi", 23);
person1.introduce();
const person2=new Person("Riya", 41);
const person3=new Person("Juhi", 27);

//Class Student Object Creation
const student1=new Student("Ajinkya", 13, 101, 7);
student1.introduce();                                 //call to introduce
const student2=new Student("Ravi", 15, 404, 9);        
const student3=new Student("Samiksha", 16, 301, 10);
console.log(Student.getStudentcount());               //call to getStudentcount

//Class Teacher Object Creation
const teacher1=new Teacher("Ruhan", 45, 1101, "Maths");
student1.introduce();
const teacher2=new Teacher("Hina", 39, 1105);         //Optional member variable
console.log(teacher2);
const teacher3=new Teacher("Samaira", 30, 1123, "History");
console.log(Teacher.getTeachercount());

const clerk1=new Clerk("IT",2022,"Managing Documentation", 20000);
console.log(clerk1);
clerk1.workDetails();                                 //call to work details

