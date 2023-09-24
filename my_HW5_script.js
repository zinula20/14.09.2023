class User {
    constructor (id, name, username, email) {
        this.id = id,
        this.name = name,
        this.username = username,
        this.email = email 
    }
    set_id(id) {
        this.id = id
    }
    set_name(name) {
        this.name = name
    }
    set_username(username) {
        this.username = username
    }
    set_email(email) {
        this.email = email
    }

}
    fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(list => list.json())
        .then(data => {
        console.log(JSON.stringify(data));

    const user = new User(data.id, data.name, data.username, data.email);
 
    const replyDiv = document.getElementById("reply");
    replyDiv.innerHTML = `
        <p>ID: ${user.id}</p>
        <p>Name: ${user.name}</p>
        <p>Username: ${user.username}</p>
        <p>Email: ${user.email}</p>
    `;
})

.catch(error => {
    console.error("An error occurred:", error);
});    
