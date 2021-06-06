document.querySelector('#getEmployees').addEventListener('click', loadEmployee);

function loadEmployee() {

    var loadImage = document.querySelector('#loading');
    loadImage.style.display = 'inline';

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'employees.json', true);

    setTimeout(() => {
        // It works if response come to an end.
        // If onload works, response is back.
        xhr.onload = function () {

            loadImage.style.display = 'none';

            if (this.status === 200) {
                let employees = JSON.parse(this.responseText);
                console.log(employees)

                let html = "";
                employees.forEach(element => {
                    html += `
                    <tr>
                        <td>${element.firstName}</td>
                        <td>${element.lastName}</td>
                    </tr>
                `;
                });

                document.querySelector('#employees').innerHTML = html;
            }
        }

        xhr.send();
    }, 1500);

}