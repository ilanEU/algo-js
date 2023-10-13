class Pokemon {
  constructor(name,attack, defense, hp, luck) {
  this.name = name
  this.attack = attack;
  this.defense = defense;
  this.hp = hp;
  this.luck = luck;
}

isLucky() {
  return Math.floor(Math.random() * 100) <= this.luck;
}

}


attackPokemon (Pokemon) 
{
  if (this.isLucky()){
    let damages = this.attack - Pokemon.defense;
    Pokemon.hp -= damages;
    console.log(`${this.name} a attaqué ${Pokemon.name}, perdant ${damages} hp !`);
  } else {

    console.log(`${this.name} a raté son attaque !`);
  }
}



let percent = 75
let isLucky = Math.floor(Math.random() * 100) <= percent;

console.log(tortipousse.isLucky);

 if (isLucky){
  console.log("attaque");
 } else {
  console.log("la gêne");
 }


while (this.hp > 0) {
  
}

let Tortipousse = new Pokemon("Tortipousse", 7, 10, 30, 70);
Tortipousse.getAttack();
Tortipousse.getName();
Tortipousse.getHp();
Tortipousse.getLuck();
Tortipousse.getDefense();

let Tiplouf = new Pokemon("Tiplouf", 8, 9, 25, 85);
Tortipousse.getAttack();
Tortipousse.getName();
Tortipousse.getHp();
Tortipousse.getLuck();
Tortipousse.getDefense();
