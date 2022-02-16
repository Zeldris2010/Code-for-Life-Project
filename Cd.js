//Data types
let d = "dionel"//String
let z = 21 //number
const waterBottle = {
    size: "small",
    sticker: "yes",
    cap: "yes"
}//Objects

const room = ["Erik", "Caleb", "Ashley"]; //Array

//conditionals
let groceryItem = "tomato";
if (groceryItem === 'tomato') {
    console.log('Tomatoes are $0.49');
}else if (groceryItem === "pblueberries"){
    console.log('blueberries are 3 dollars')
}

//methods
const brand = ["nike", "adidas", "Jordans",]
document.getElementById("demo1").innerHTML = brand.push("New Balance")
brand.toUpperCase

//function
function myFunction() { 
    let text = document.getElementById("demo").innerHTML; 
    document.getElementById("demo").innerHTML = text.replace("Microsoft" , "Spotify"); 
        }

//classes
class vehicles {
    constructor(car,truck,train,RV,bus){
        this.car = car;
        this.truck = truck;
        this.train = train;
        this.RV =RV;
        this.bus = bus;
    }
}