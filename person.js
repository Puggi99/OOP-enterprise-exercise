class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    toString() {
        return `NOME: ${this.name}\nCOGNOME: ${this.surname}\n`
    }
}