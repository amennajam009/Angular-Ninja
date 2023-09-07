//The One we use in function (...anything) are know as Rest parameters

//Old method 

function Myvalues(value1){
for(let i = 0; i<value1 ; i++){
    console.log(i)
}
}
Myvalues(10)



//New method to pass arguments

function MynewValues(...values){
    for(let i=1; i<values;i++){
        console.log(i)
    }
}
console.log(MynewValues(20))


//Agin Another Methods

function Myothervalues(...material) {
    for (let data of material) {
        if (data === 'hello world') {
            return 'hello world';
        }
    }
    return 'false situation';
}

console.log(Myothervalues('sdgdgdfg'));


//Rest Operator can also be Used as destructuring data

const Mynumber = [12,34,78]
const FindMinimum = Math.min(...Mynumber)
console.log(FindMinimum)
