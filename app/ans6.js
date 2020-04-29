class Animal {
    constructor(name) {
        this.name=name;
    }
    static show() {
        console.log('hey i am static method'); 
    }
}
class Dog extends Animal {
    constructor(name,breed) {
        super(name);
        this.breed = breed;
    }
}
class Pug extends Dog {
    constructor(name,breed,age) {
        super(name,breed);
        this.age=age;
    }
}

export {Pug,Animal};

