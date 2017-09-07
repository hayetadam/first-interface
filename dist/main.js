var Tree = /** @class */ (function () {
    function Tree(height, species, color, age) {
        this.height = height;
        this.species = species;
        this.color = color;
        this.age = age;
    }
    Tree.prototype.render = function () {
        // display a tree emoji for spruce, oak, palm tree
        //the age of tree and the color
        // exemple: '🌲 2 meters green'
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
        console.log(emoji + ' ' + this.age + ' ans ' + this.height + ' mètres');
    };
    return Tree;
}());
var trees = [];
trees.push(new Tree(2, 'spruce', 'dark green', 4));
trees.push(new Tree(2, 'oak', 'orange', 10));
trees.push(new Tree(2, 'palm', 'green', 5));
for (var _i = 0, trees_1 = trees; _i < trees_1.length; _i++) {
    var t = trees_1[_i];
    t.render();
}
//# sourceMappingURL=main.js.map