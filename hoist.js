//1
console.log(example); //
let example = "I'm the example!";    
//After Hoisting
//no changes in order
//OUTPUT: Undefined

//2
console.log(hello);                                   
var hello = 'world';
//After Hoisting
var hello;
console.log(hello);
hello='world';
//OUTPUT:
//undefined in both cases


//3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
//After hoisting
var brendan;
brendan='super cool';
function print(){
        brendan = 'only okay';
        console.log(brendan);
    }
console.log(brendan);
//OUTPUT:
//super cool


//4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
//after hoisting
var food;
function eat(){
        var food;
        food = 'half-chicken';
        console.log(food);
        food = 'gone';
}
food='chicken';
console.log(food);
eat();
//OUTPUT
//chicken
//half-chicken

//5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
//after hoisting
var mean;
mean=function() {
        var food;
        food = "chicken";
        console.log(food);
        food = "fish";
        console.log(food);
    }
console.log(food);
//OUTPUT mean is not a funcion

//6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
//after hoisting
var genre;
function rewind() {
        var genre;
        genre = "rock";
        console.log(genre);
        genre = "r&b";
        console.log(genre);
    }
genre = "disco";
rewind();
console.log(genre);
//output:
//rock
//r&b
//disco


//7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
//after hoisting
dojo='san jose';
function learn() {
        var dojo;
        dojo = "seattle";
        console.log(dojo);
        dojo = "burbank";
        console.log(dojo);
    }
console.log(dojo);
learn();
console.log(dojo);
//Output:
//san jose
//seattle
//burbank
//san jose


//8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
//after hoisting
function makeDojo(name, students){
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now";
        }
        return dojo;
    }
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
//output:
//true
//closed for now

// Wrong prediction: Can't re-assign to constant variable

