/*
Given two Arrays in which values are the power of each soldier, return true if you survive the attack or false if you perish.

    CONDITIONS

Each soldier attacks the opposing soldier in the same index of the array. The survivor is the number with the highest value.
If the value is the same they both perish
If one of the values is empty(different array lengths) the non-empty value soldier survives.
To survive the defending side must have more survivors than the attacking side.
In case there are the same number of survivors in both sides, the winner is the team with the highest initial attack power.
If the total attack power of both sides is the same return true.
The initial attack power is the sum of all the values in each array.
*/

function hasSurvived(attackers, defenders){
    let attackersSurvivors=0;
    let defendersSurvivors=0;
    let attackersTeam = attackers;
    let defendersTeam = defenders;

    while (attackersTeam.length !== defendersTeam.length){
        if (attackersTeam.length < defendersTeam.length){
            attackersTeam.push(0);
            continue;
        }
            defendersTeam.push(0);
    }

    for (let i=0; i<attackersTeam.length; i++){
        if(attackersTeam[i] > defendersTeam[i]){
            attackersSurvivors += 1;
        }
        else if (attackersTeam[i] < defendersTeam[i]){
            defendersSurvivors += 1;
        }
    }

    if (attackersSurvivors === defendersSurvivors) {
        attackersSurvivors = 0;
        defendersSurvivors = 0;

        for (let i=0; i<attackersTeam.length; i++){
            attackersSurvivors += attackersTeam[i];

        }
        for (let j=0; j<defendersTeam.length; j++){
            defendersSurvivors += defendersTeam[j];
        }
        return attackersSurvivors - defendersSurvivors <= 0;
    }

    return attackersSurvivors - defendersSurvivors < 0;
}

module.exports = hasSurvived;

