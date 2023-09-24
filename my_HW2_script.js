class Person {
    constructor (name, age, gender, address) {
        this.name = name,
        this.age = age,
        this.gender = gender,
        this.address = address 
    }
    set_name(name) {
        this.name = name
    }
    set_age(age) {
        this.age = age
    }
    set_gender(gender) {
        this.gender = gender
    }
    set_address(address) {
        this.address = address
    }

}

    const name = prompt(`Enter name: `);
    const age = parseInt(prompt(`Enter age: `));
    const gender = prompt(`Enter gender: `);
    const address = prompt(`Enter address: `);

    const person1 = new Person (name, age, gender, address)
    console.log("Name:", person1.name);
    console.log("Age:", person1.age);
    console.log("Gender:", person1.gender);
    console.log("Address:", person1.address);

    const nameUp = prompt(`Enter name: `);
    const ageUp = parseInt(prompt(`Enter age: `));
    const genderUp = prompt(`Enter gender: `);
    const addressUp = prompt(`Enter address: `);

    person1.set_name(nameUp);
    person1.set_age(ageUp);
    person1.set_gender(genderUp);
    person1.set_address(addressUp);

    console.log("Name:", person1.name);
    console.log("Age:", person1.age);
    console.log("Gender:", person1.gender);
    console.log("Address:", person1.address);


