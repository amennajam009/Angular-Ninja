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


//In classes we also use the getter and setter 

class mycolors{
    get color(){
        return this.color
    }
    set color(newcolor){
        console.log(`new color is ${newcolor}`)
        this.color = newcolor
    }
}
const usingnewkeyword = new mycolors()
usingnewkeyword.color = 'blue'
console.log(usingnewkeyword.color)



//For pratice 

class myclass{
    constructor(myname,myage){
        this.myname=myname,
        this.myage=myage
    }
    methodinmyclass(){
        return `My Name is ${this.myname} and i'm ${this.myage}years old`
    }
}
const myvalues = new myclass('amen',20)
console.log(myvalues.methodinmyclass())