class AnimalDog {
    constructor (dog_name, dog_age, dog_breed, dog_color) {
        this.dog_name = dog_name,
        this.dog_age = dog_age,
        this.dog_breed = dog_breed,
        this.dog_color = dog_color 
    }
    set_name(dog_name) {
        this.dog_name = dog_name
    }
    set_age(dog_age) {
        this.dog_age = dog_age
    }
    set_breed(dog_breed) {
        this.dog_breed = dog_breed
    }
    set_color(dog_color) {
        this.dog_color = dog_color
    }

}

    const dog_name = prompt(`Enter name: `);
    const dog_age = parseInt(prompt(`Enter age: `));
    const dog_breed = prompt(`Enter breed: `);
    const dog_color = prompt(`Enter dog color: `);

    const dog1 = new AnimalDog (dog_name, dog_age, dog_breed, dog_color)
    console.log("Name:", dog1.dog_name);
    console.log("Age:", dog1.dog_age);
    console.log("Breed:", dog1.dog_breed);
    console.log("Color:", dog1.dog_color);

    const nameUp = prompt(`Enter name: `);
    const ageUp = parseInt(prompt(`Enter age: `));
    const breedUp = prompt(`Enter breed: `);
    const colorUp = prompt(`Enter dog color: `);

    dog1.set_name(nameUp);
    dog1.set_age(ageUp);
    dog1.set_breed(breedUp);
    dog1.set_color(colorUp);

    console.log("Name:", dog1.dog_name);
    console.log("Age:", dog1.dog_age);
    console.log("Breed:", dog1.dog_breed);
    console.log("Color:", dog1.dog_color);
