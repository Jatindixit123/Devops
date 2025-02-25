const students = [];

export default class Student {
    constructor (studentName) {
        this.studentName = studentName;
    }

    saveStudent() {
        students.push(this);
    }

    // without creating object we can call fetchAll
    static fetchAll() {
        return students;
    }
}
