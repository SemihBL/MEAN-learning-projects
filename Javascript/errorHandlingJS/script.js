// ReferenceError
// TypeError
// SyntaxError
// URIError

// Error

document.querySelector('body').setAttribute('style', 'height:800px');

document.getElementById('myBtn').addEventListener('click', function (e) {

    var name = document.getElementById('name');
    var age = document.getElementById('age');
    var errors = document.getElementById('errors');

    errors.innerHTML = '';

    try {

        if (name.value.length === 0)
            throw new Error('Name is required');

        if (name.value.length > 20)
            throw new Error('Name is too long');

        if (age.value.length === 0)
            throw new Error('Age is required');

        if (isNaN(age.value))
            throw new Error('Please enter a valid age');

        console.log('Form submitted');

    } catch (error) {
        errors.innerHTML = error.message;
    } finally {
        name.value = '';
        age.value = '';
    }

    e.preventDefault();
});
