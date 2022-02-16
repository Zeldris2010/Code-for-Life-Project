class AnimeCharacter{
    constructor(name, hometown, power, health, specialAttack, level){
        this.name = name
        this.hometown = hometown
        this.power = power
        this.health = health
        this.specialAttack = specialAttack
        this.level = level
    }
 } dodge(opponent, attack);{
        console.log(`${this.name}dodge ${opponent}s ${attack}`);
    }
    powerUp();{
        if(this.level>96){
            this.level = 100;
            console.log(`${this.name} power level is full! special Available`);
        }else{
            this.level +=4;
            console.log(`${this.name} has unleashed ${this.specialAttack}`);
        }
    } godStorm(opponent);{
        opponent.health -= 20;
        console.log(`This make white and black fire rain down. ${opponent.name}:****${opponent.AnimeCharacter}'s Health: ${opponent.health}%****`);
    }
    dazebeam(opponent);{
        opponent.health -= 10;
        console.log(`This a attack shoots a beam from the eyes which cause the opponent to have his nightmares attack him.**** ${opponent.name}'s HEALTH: ${opponent.health}% ****`);
    }
    special();{
        if(this.level == 100){
            this.level - 40;
            console.log(`${this.name} has unleashed ${this.specialAttack}`);
        }else{
            console.log(`${this.name} cant do that right now, your power level is at ${this.level}%`)
        }
    }

let Max = new AnimeCharacter("Max", "Purgatory", 196390, 135980,"Yin Yang void breaker", 100)
console.log(Max.name);
Max.dodge();
Max.PowerUp();