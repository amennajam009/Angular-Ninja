// ES6 introduce us the new feature of classes by which we can use inheritance and many other methods

class amen{
    constructor(name,age){
        this.name=name,
        this.age=age
    }
    toString(){
        return `My name is ${this.name} and i'm ${this.age} Years Old`
    }
}
const AssignNameAndAge = new amen('amen',20)
console.log(AssignNameAndAge.toString())