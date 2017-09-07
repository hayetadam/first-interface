class Tree {
    height: number;
    species: string;
    color: string;
    age: number;
    constructor(height: number, species:string, color: string, age: number){
        this.height = height;
        this.species = species;
        this.color = color;
        this.age = age;
    }
    render(){
        // display a tree emoji for spruce, oak, palm tree
        //the age of tree and the color
        // exemple: '🌲 2 meters green'
       let emoji = this.species;
       if(this.species == "spruce"){
           emoji = "🌲";
       }else if(this.species == "oak"){
           emoji = "🌳";
       }else if(this.species == "palm"){
           emoji = "🌴";
       }
       console.log(emoji + ' ' + this.age + ' ans ' + this.height + ' mètres');  
    }
}

let trees: Tree[] = [];

trees.push(new Tree(2, 'spruce', 'dark green', 4));
trees.push(new Tree(2, 'oak', 'orange', 10));
trees.push(new Tree(2, 'palm', 'green', 5));

for (let t of trees){
    t.render();
}
