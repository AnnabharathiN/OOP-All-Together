//Exercise 1: Classes
class Person
{
    constructor(name,age) 
    {
    this.name=name;
    this.age=age;

}
    introduce()
    {
        return `Hi, my name is ${this.name} and my age is ${this.age}.`
    }
}

//Exercise 2: this

const person1= new Person('Anna',34);
function describePerson(callBack){
    return callBack();
}

//Exercise 3: Promises

function wait(milliseconds)
{
return new Promise(resolve => setTimeout(resolve.milliseconds)); 
}

//Exercise 4: Submissions Instructions

console.log(person1.introduce());
describePerson(function() {console.log(this.introduce());}.bind(person1));