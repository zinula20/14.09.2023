class Person {
    constructor (id, first_name, last_name, gender) {
        this.id = id,
        this.first_name = first_name,
        this.last_name = last_name,
        this.gender = gender 
    }
    set_id(id) {
        this.id = id
    }
    set_first_name(first_name) {
        this.first_name = first_name
    }
    set_last_name(last_name) {
        this.last_name = last_name
    }
    set_gender(gender) {
        this.gender = gender
    }

}
    fetch('https://random-data-api.com/api/users/random_user')
        .then(list => list.json())
        .then(data => {
        console.log(JSON.stringify(data));

    const person1 = new Person(data.id, data.first_name, data.last_name, data.gender);
 
    const replyDiv = document.getElementById("reply");
    replyDiv.innerHTML = `
        <p>Id: ${person1.id}</p>
        <p>First name: ${person1.first_name}</p>
        <p>Last name: ${person1.last_name}</p>
        <p>Gender: ${person1.gender}</p>
    `;
})

.catch(error => {
    console.error("An error occurred:", error);
});    
