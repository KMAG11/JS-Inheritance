function showCat(){
    document.getElementById('cat').style.display = 'block';
    document.getElementById('dog').style.display = 'none';
    document.getElementById('image').src = "cat_stand.jpg"
}
function showDog(){
    document.getElementById('dog').style.display = 'block';
    document.getElementById('cat').style.display = 'none';
    document.getElementById('image').src = "dog_stand.jpg"
}

function Animal(name){
    this.name = name;
}
Animal.prototype.greet = function(){
    document.getElementById("answer").innerHTML = ("Hello, my name is " + this.name + ". I am a " + this.breed);
}

// DOG

function Dog(name,breed) {
    this.breed = breed;
    // inheriting from Animal
    Animal.call(this, name);
}
// Setting Dog's prototype to be new instance of Animal
Dog.prototype = Object.create(Animal.prototype);
// OR (using ES6)
// Dog.prototype = new.Animal();
Dog.prototype.bark = function(){
    document.getElementById("answer").innerHTML = ("Woof!");
    document.getElementById("image").src = "dog_stand.jpg";
}
Dog.prototype.sit = function(){
    document.getElementById("answer").innerHTML = ("Okay!");
    document.getElementById("image").src = "dog_sit.jpg";
}
Dog.prototype.sleep = function(){
    document.getElementById("image").src = "dog_sleep.jpg";
    document.getElementById("answer").innerHTML = ("Good night!");
}

// CAT

function Cat(name,breed){
    this.breed = breed;
    Animal.call(this, name);
}
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.meow = function(){
    document.getElementById("answer").innerHTML = ("Meow!");
    document.getElementById("image").src = "cat_stand.jpg";
}
Cat.prototype.sit = function(){
    document.getElementById("answer").innerHTML = ("Okay!");
    document.getElementById("image").src = "cat_sit.jpg";
}
Cat.prototype.sleep = function(){
    document.getElementById("image").src = "cat_walk.jpg";
    document.getElementById("answer").innerHTML = ("No thanks!");
}

const myDog = new Dog("Buddy", "Labrador");
const myCat = new Cat("Muning", "Persian");

myDog.greet(); // Inherited from Animal
myDog.bark(); // Defined in Dog prototype
myDog.sleep();

myCat.greet();
myCat.meow();
myCat.sit();
myCat.sleep();