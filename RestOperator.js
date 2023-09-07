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