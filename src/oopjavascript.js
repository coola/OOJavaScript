/**
 * Created by michal.kulinski on 2014-12-18.
 */

function Money(ammount){

    if(ammount === undefined){throw new Error("Must provide ammount");}

    this.ammount = ammount;

    Object.prototype.equals = function (o) {
        return this.ammount === o.ammount  && this.code === o.code;
    };

    this.times = function(multiplier){
        return this.factory(this.ammount * multiplier);
    }

    this.add = function(addArgument){
        return this.factory(this.ammount + addArgument);
    }
}

function Bank(){
    this.add = function (firstArgument, secondArgument){
       return firstArgument.ammount * firstArgument.multiplier  +
       secondArgument.ammount * secondArgument.multiplier;
    }

    this.multiplie = function (firstArgument, secondArgument){
        return (firstArgument.ammount * firstArgument.multiplier)  *
            (secondArgument.ammount * secondArgument.multiplier);
    }

}

function Dollar(ammount){

    this.code = "USD";

    this.multiplier = 3;

    this.factory = function(ammount){
        return new Dollar(ammount);
    };

    Money.call(this, ammount);

}

function Zloty(ammount){

    this.code = "PLN";

    this.multiplier = 1;

    this.factory = function(ammount){
        return new Euro(ammount);
    };

    Money.call(this, ammount);
}

function Euro(ammount){

    this.code = "EUR";

    this.multiplier = 4;

    this.factory = function(ammount){
        return new Euro(ammount);
    };

    Money.call(this, ammount);
}

