class MobilePhone {
    constructor (brand, model, screen_size, storage_capasity) {
        this.brand = brand,
        this.model = model,
        this.screen_size = screen_size,
        this.storage_capasity = storage_capasity 
    }
    set_brand(brand) {
        this.brand = brand
    }
    set_model(model) {
        this.model = model
    }
    set_screen_size(screen_size) {
        this.screen_size = screen_size
    }
    set_storage_capasity(storage_capasity) {
        this.storage_capasity = storage_capasity
    }

}
    const brand = prompt(`Enter brand of your phone: `);
    const model = prompt(`Enter model of your phone: `);
    const screen_size = parseInt(prompt(`Enter screen size of your phone: `));
    const storage_capasity = parseInt(prompt(`Enter storage capasity of your phone: `));

    const myPhone1 = new MobilePhone (brand, model, screen_size, storage_capasity);
    console.log("Brand:", myPhone1.brand);
    console.log("Model:", myPhone1.model);
    console.log("Screen size:", myPhone1.screen_size);
    console.log("Storage capasity:", myPhone1.storage_capasity);

    const brandUp = prompt(`Enter brand of your phone: `);
    const modelUp = prompt(`Enter model of your phone: `);
    const screen_sizeUp = parseInt(prompt(`Enter screen size of your phone: `));
    const storage_capasityUp = parseInt(prompt(`Enter storage capasity of your phone: `));

    myPhone1.set_brand(brandUp);
    myPhone1.set_model(modelUp);
    myPhone1.set_screen_size(screen_sizeUp);
    myPhone1.set_storage_capasity(storage_capasityUp);

    console.log("Brand:", myPhone1.brand);
    console.log("Model:", myPhone1.model);
    console.log("Screen size:", myPhone1.screen_size);
    console.log("Storage capasity:", myPhone1.storage_capasity);

