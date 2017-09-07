var Tree = /** @class */ (function () {
    function Tree(height, species, color, age) {
        this.height = height;
        this.species = species;
        this.color = color;
        this.age = age;
    }
    // render displays a tree emoji for spruce, oak, palm tree.
    Tree.prototype.render = function () {
        var emoji = this.species;
        if (this.species == "spruce") {
            emoji = "🌲";
        }
        else if (this.species == "oak") {
            emoji = "🌳";
        }
        else if (this.species == "palm") {
            emoji = "🌴";
        }
        console.log(emoji + " " + this.height + " meters " + this.color);
    };
    return Tree;
}());
// Create an Animal class with a render method
// wich display the emoji associated with the species.
var Animal = /** @class */ (function () {
    function Animal(species, age) {
        this.species = species;
        this.age = age;
    }
    Animal.prototype.render = function () {
        var emoji = this.species;
        if (emoji === "goat") {
            emoji = "🐐";
        }
        else if (emoji == "leopard") {
            emoji = "🐆";
        }
        console.log(emoji + " " + this.age + " year old");
    };
    return Animal;
}());
var objects = [];
objects.push(new Tree(2, "spruce", "dark green", 3));
objects.push(new Tree(3, "oak", "orange", 10));
objects.push(new Tree(5, "palm", "green", 5));
objects.push(new Animal("goat", 2));
objects.push(new Animal("goat", 3));
objects.push(new Animal("leopard", 1));
for (var _i = 0, objects_1 = objects; _i < objects_1.length; _i++) {
    var o = objects_1[_i];
    o.render();
}
//# sourceMappingURL=main.js.map