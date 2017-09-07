var Ninja = /** @class */ (function () {
    function Ninja() {
    }
    Ninja.prototype.attack = function (f) { };
    Ninja.prototype.defend = function (f) { };
    Ninja.prototype.heal = function (f) { };
    Ninja.prototype.throw = function (f) { };
    Ninja.prototype.jump = function (f) { };
    return Ninja;
}());
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.eat = function () { };
    Person.prototype.move = function () { };
    return Person;
}());
var n = new Ninja();
var p = new Person();
var f = n;
//# sourceMappingURL=interface.js.map