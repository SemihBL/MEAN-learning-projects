class UI {

    constructor() {
        this.profileContainer = document
            .querySelector('#profileContainer');

        this.alert = document
            .querySelector('#alert');
    }

    showProfile(profile) {
        this.profileContainer.innerHTML = `
        <div class="card card-body mt-3">
            <div class="row">
                
                <div class="col-md-3">
                    <a href="#">
                        <img src="https://via.placeholder.com/150" class="img-thumbnail" />
                    </a>
                </div>

                <div class="col-md-9">
                    <h4>Contact</h4>    
                    <div>
                        <ul class="list-group">
                            <li class="list-group-item">
                                name : ${profile.name}
                            </li>  
                            
                            <li class="list-group-item">
                            username : ${profile.username}
                            </li>  

                            <li class="list-group-item">
                                email : ${profile.email}
                            </li>  

                            <li class="list-group-item">
                                address : ${profile.address.street},
                                ${profile.address.city},
                                ${profile.address.zipcode},
                                ${profile.address.suite}
                            </li>  

                            <li class="list-group-item">
                                phone : ${profile.phone}
                            </li> 

                            <li class="list-group-item">
                                website : ${profile.website}
                            </li> 

                            <li class="list-group-item">
                                company : ${profile.company.name}
                            </li> 
                        </ul>

                        <h4 class="mt-4">Todo List</h4>    
                        <ul id="todo" class="list-group">

                        </ul>
                    </div>
                </div>

            </div>
        </div>

        `
    }

    showAlert(text) {
        this.alert.className = "bg-danger text-white";
        this.alert.setAttribute('style', 'display:inline-block; margin-top:20px;');
        this.alert.innerHTML = `"${text}" isn't found.`;
    }

    showTodo(todo) {
        let html = "";

        todo.forEach(item => {
            if (item.completed) {
                html += `<li class="list-group-item bg-success text-white">
                    ${item.title}
                </li>`
            } else {
                html += `<li class="list-group-item bg-secondary text-white">
                    ${item.title}
                </li>`

            }
        });

        this.profileContainer.querySelector('#todo').innerHTML = html;
    }

    clear() {
        this.profileContainer.innerHTML = "";
        this.alert.innerHTML = "";

    }

}