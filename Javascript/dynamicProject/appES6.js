// Course class
class Course {

    constructor(title, instructor, image) {
        this.courseId = Math.floor(Math.random() * 10000);
        this.title = title;
        this.instructor = instructor;
        this.image = image;

    }

}

// UI class
class UI {
    addCourseToList(course) {
        const list = document.getElementById('course-list');

        var html = `
                <tr>
                    <td><img src="img/${course.image}" width="60px" /></td>
                    <td>${course.title}</td>
                    <td>${course.instructor}</td>
                    <td><a href="#" data-id="${course.courseId}" class="btn btn-danger btn-sm delete">Delete</a></td>
                </tr>
        `;

        list.innerHTML += html;
    }

    clearControls() {
        const title = document.getElementById('title').value = '';
        const instructor = document.getElementById('instructor').value = '';
        const image = document.getElementById('image').value = '';

    }

    deleteCourse(element) {
        if (element.classList.contains('delete')) {
            element.parentElement.parentElement.remove();
            return true;
        }

    }

    showAlert(message, className) {
        var alert = `
            <div class="col-12 alert alert-${className}">
                ${message}
            </div>
        `;

        const row = document.querySelector('.row');
        row.insertAdjacentHTML("afterbegin", alert);

        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 3000);
    }
}

// Storage class
class Storage {
    static getCourses() {
        let courses;

        if (localStorage.getItem('courses') === null) {
            courses = [];
        }
        else {
            courses = JSON.parse(localStorage.getItem('courses'));
        }

        return courses;
    }

    static displayCourses() {
        const courses = Storage.getCourses();

        courses.forEach(course => {
            const ui = new UI();
            ui.addCourseToList(course);
        });

    }

    static addCourse(course) {
        const courses = Storage.getCourses();
        courses.push(course);
        localStorage.setItem('courses', JSON.stringify(courses));
    }

    static deleteCourse_(course) {

        if (course.classList.contains('delete')) {

            const id = course.getAttribute('data-id');
            const courses = Storage.getCourses();

            courses.forEach((course, index) => {
                if (course.courseId == id) {
                    courses.splice(index, 1);

                }
            });

            localStorage.setItem('courses', JSON.stringify(courses));

        }
    }
}

document.addEventListener('DOMContentLoaded', Storage.displayCourses);

document.getElementById('new-course').addEventListener('submit', function (form) {

    const title = document.getElementById('title').value;
    const instructor = document.getElementById('instructor').value;
    const image = document.getElementById('image').value;

    // console.log(title, instructor,image);

    // Create course object
    const course = new Course(title, instructor, image);

    // Create UI
    const ui = new UI();

    // Validation
    if (title === '' || instructor === '' || image === '') {
        ui.showAlert('Please complete the form', 'warning');
    }
    else {

        // Add course to list
        ui.addCourseToList(course);

        // Save to Local Storage
        Storage.addCourse(course);

        // Clear controls
        ui.clearControls();

        ui.showAlert('The course has been added', 'success');

    }

    form.preventDefault();
});

document.getElementById('course-list').addEventListener('click', function (del) {
    
    const ui = new UI();

    if (ui.deleteCourse(del.target) == true) {
        
        // Delete form Local Storage
        Storage.deleteCourse_(del.target);

        ui.showAlert('The course has been deleted', 'danger');

    }



});