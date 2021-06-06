// Prototypal Inheritance

let Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function () {
    let currentDate = new Date();
    return currentDate.getFullYear() - this.yearOfBirth;
}

let Teacher = function (name, yearOfBirth, job, subject) {
    // Prototype inherite
    Person.call(this, name, yearOfBirth, job);
    this.subject = subject;
}

// Inherit the Person prototype method
Teacher.prototype = Object.create(Person.prototype);

// Set Teacher constructor
Teacher.prototype.constructor = Teacher;

Teacher.prototype.greeting = function () {
    return 'Hello my name is ' + this.name;
}

let Semih = new Teacher('Semih', 2003, 'Programmer', 'Math');

console.log(Semih.calculateAge());