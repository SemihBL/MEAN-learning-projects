// UI vars
const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const btnDeleteAll = document.querySelector('#btnDeleteAll');
const taskList = document.querySelector('#task-list');
let items;

// Load item
loadItems();

// Call eventListeners
eventListeners();

// EventListeners
function eventListeners() {
    // Submit event
    form.addEventListener('submit', addNewItem);

    // Delete an element
    taskList.addEventListener('click', deleteItem);

    // Delete All
    btnDeleteAll.addEventListener('click', deleteAllItem);
}

function loadItems() {
    items = getItemsFromLS();
    items.forEach(function (item) {
        createItem(item);
    });
}

// Get items from LS
function getItemsFromLS() {
    if (localStorage.getItem('items') === null) {
        items = [];
    } else {
        items = JSON.parse(localStorage.getItem('items'));
    }
    return items;
}

// Set items to LS
function setItemToLS(text) {
    items = getItemsFromLS();
    items.push(text);
    localStorage.setItem('items', JSON.stringify(items));
}

// Delete item from LS
function deleteItemFromLS(text) {
    items = getItemsFromLS();
    items.forEach(function (item, index) {

        if (item === text)
            items.splice(index, 1);
    });
    localStorage.setItem('items', JSON.stringify(items));

}

function createItem(text) {

    // Create li
    const li = document.createElement('li');
    li.className = 'list-group-item list-group-item-secondary';
    li.appendChild(document.createTextNode(text));

    // Create a
    const a = document.createElement('a');
    a.classList = 'delete-item float-right';
    a.setAttribute('href', '#');
    a.innerHTML = '<i class="fas fa-times"></i>';

    // Add a to li
    li.appendChild(a);

    // Add li to ul
    taskList.appendChild(li);

}

// Add new item
function addNewItem(e) {

    if (input.value === '')
        alert('Please fill the blank');

    else {
        // Create item
        createItem(input.value);

        // Save to LS
        setItemToLS(input.value);

    }

    // Clear input
    input.value = '';

    // console.log(li);
    e.preventDefault();
}

// Delete an item
function deleteItem(e) {

    if (e.target.className === 'fas fa-times') {
        if (confirm('Are you sure?')) {
            e.target.parentElement.parentElement.remove();

            deleteItemFromLS(e.target.parentElement.parentElement.textContent);
        }
    }

    e.preventDefault();
}

// Delete all items
function deleteAllItem(e) {

    if (confirm('Are you sure?')) {

        // taskList.innerHTML = '';

        while (taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }

        localStorage.clear();

    }

    e.preventDefault();
}