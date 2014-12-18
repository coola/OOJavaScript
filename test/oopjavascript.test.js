/**
 * Created by michal.kulinski on 2014-12-18.
 */
describe("A suite", function() {
    it("contains spec with an expectation", function() {
        expect(true).toBe(true);
    });
});

describe("A dolar", function(){

    it("should exist", function(){
        var dollar = new Dollar(5);
        expect(dollar).not.toBeNull();
    });

    it("should have access to ammount", function(){

        var dollar = new Dollar(5);
        expect(dollar.ammount).not.toBeUndefined();
    });

    it("should have be assignable", function(){

        var dollar = new Dollar(5);
        dollar.ammount = 6;
        expect(dollar.ammount).not.toBeUndefined();
        expect(dollar.ammount).toEqual(6);
    });

    it("should be equals to itself", function(){
        var dollar = new Dollar(5);
        expect(dollar.equals(dollar)).toBe(true);

    });

    it("should be equals to another dollar", function(){
        var dollar1 = new Dollar(234);
        var dollar2 = new Dollar(234);
        expect(dollar1.equals(dollar2)).toBe(true);
    });

    it("must be multiplied", function(){
        var two = new Dollar(2);
        expect(two.times(3).ammount).toBe(6);
    });

    it("should not be equals to euro", function(){
        var twoDollar = new Dollar(2);
        var twoEuro = new Euro(2);
        expect(twoDollar.equals(twoEuro)).toBe(false);
    });

    it("should stay dollar after multiplication", function(){
        var twoDollar = new Dollar(2);
        expect(twoDollar.times(4).code).toBe("USD");
    });


});

describe("Euro", function(){
    it("should be still euro after addition", function(){
        var hundredEuro = new Euro(100);
        expect(hundredEuro.add(100).code).toBe("EUR");
    });
});

describe("Money", function(){
    it("should have addition", function(){
        var twoDollar = new Dollar(2);
        expect(twoDollar.add(3).ammount).toBe(5);

    });

    it("and its test for simple addition", function(){
        expect(new Dollar(5).add(new Dollar(5))).not.toBeUndefined();
        expect(new Dollar(5).add(5).ammount).toBe(10);

    });

});

describe("Bank", function(){

    it("should have default currency PLN", function(){
        var bank = new Bank();
        expect(bank).not.toBeUndefined();
    });

    it("should have addition two same default currencies", function(){
        var bank = new Bank();
        expect(bank.add(new Zloty(4), new Zloty(5))).toBe(9);
    });

    it("should have addition two different currencies", function(){
        var bank = new Bank();
        expect(bank.add(new Zloty(1), new Dollar(1))).toBe(4);
    });

    it("should have addition two different not default currencies", function(){
        var bank = new Bank();
        expect(bank.add(new Euro(10), new Dollar(10))).toBe(70);
    });

    it("should have multiplier for two different not default currencies", function(){
        var bank = new Bank();
        expect(bank.multiplie(new Euro(1), new Dollar(1))).toBe(12);
    });

    it("final goal test", function(){
        var bank = new Bank();
        expect(bank.add(new Euro(1), new Dollar(1))).toBe(7);
       // expect(bank.add(new Zloty(1), new Dollar(2))).toBe();
    });

});