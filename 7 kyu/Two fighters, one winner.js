//https://www.codewars.com/kata/577bd8d4ae2807c64b00045b/
/*
Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

Your function also receives a third argument, a string, with the name of the fighter that attacks first.
*/

function declareWinner(fighter1, fighter2, firstAttacker) {
  while(fighter1.health > 0 && fighter2.health > 0){
    switch(firstAttacker){
      case fighter1.name:
        fighter2.health -= fighter1.damagePerAttack;
        firstAttacker = fighter2.name;
        break;
      case fighter2.name:
        fighter1.health -= fighter2.damagePerAttack;
        firstAttacker = fighter1.name;
        break;
    }
    if(fighter1.health <= 0){
      return fighter2.name;
    } else if(fighter2.health <= 0){
      return fighter1.name;
    }
  }
}