class Train {
    constructor(color, lightsOn){
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights(){
        this.lightsOn = !this.lightsOn;
        console.log(this.lightsOn);
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf(){
        console.log(this);
    }
    getPrototype(){
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

/*
Now, there are four methods on your Train class: 
toggleLights(), lightsStatus(),  getSelf() and getPrototype().

The toggleLights method uses the logical not operator, !.
This operator will change the value stored in the lightsOn property of the future instance object of the Train class;
hence the !this.lightsOn. And the = operator to its left means that it will get assigned to this.lightsOn,
meaning that it will become the new value of the lightsOn property on that given instance object.

The lightsStatus() method on the Train class just reports the current status of the lightsOn variable of a given object instance.

The getSelf() method prints out the properties on the object instance it is called on.

The getPrototype() console logs the prototype of the object instance of the Train class. 
The prototype holds all the properties shared by all the object instances of the Train class. 
To get the prototype, you'll be using JavaScript's built-in Object.getPrototypeOf() method, and passing it this object - meaning, 
the object instance inside of which this method is invoked.
*/

// var myFirstTrain = new Train('red', false);
// console.log(myFirstTrain.getPrototype());

class HighSpeedTrain extends Train{
    constructor(passengers, highSpeedOn, color, lightsOn){
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }

    toggleHighSpeed(){
        this.highSpeedOn = !this.highSpeedOn;
        console.log('high speed status:', this.highSpeedOn);
    }

    toggleLights(){
        super.toggleLights();
        super.lightsStatus();
        console.log('Lights are 100% operational.')
    }
}

var hiSpeedTrain = new HighSpeedTrain('200', true, 'red', false)
console.log(hiSpeedTrain.getPrototype());