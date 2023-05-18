function heroes() {
  // Mage object
  const mageHero = {
    // proto for mage
    mageProto: {
      cast: function (spellName) {
        this.mana -= 1;
        console.log(`${this.name} cast ${spellName}`);
      },
    },

    // constructor for mage
    mage: function (name) {
      const mageObj = {
        ...this.mageProto,
        name,
        mana: 100,
        health: 100,
      };

      return mageObj;
    },
  };

  // Fighter object
  const fighterHero = {
    // proto for mage
    fightProto: {
      fight: function () {
        this.stamina -= 1;
        console.log(`${this.name} slashes at the foe!`);
      },
    },

    // constructor for fighter
    fighter: function (name) {
      const fighterObj = {
        ...this.fightProto,
        name,
        stamina: 100,
        health: 100,
      };

      return fighterObj;
    },
  };

  // All heroes
  const allHeroes = {
    ...mageHero,
    ...fighterHero,
  };

  return allHeroes;
}

let create = heroes();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball");
scorcher.cast("thunder");
scorcher.cast("light");

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight();
console.log(scorcher2.stamina);
console.log(scorcher.mana);
//          Scorcher cast fireball
//          Scorcher cast thunder
//          Scorcher cast light
//          Scorcher 2 slashes at the foe!
//          99
//          97
