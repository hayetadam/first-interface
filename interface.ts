interface Fighter{
    attack(f :Fighter);
    defend(f :Fighter);
    heal (f : Fighter);
}

class Ninja {
    attack(f :Fighter) {}
    defend(f :Fighter) {}
    heal(f :Fighter) {}
    throw(f :Fighter) {}
    jump(f :Fighter) {}
}
class Person {
    eat() {}
    move() {}
    
}
let n = new Ninja();
let p = new Person();
let f: Fighter = n;