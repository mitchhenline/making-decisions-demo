/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 
let jonSnowAttack = 45
let jamieLannisterAttack = 80

if (jonSnowAttack > jamieLannisterAttack) {
console.log('Jon Snow has better attack than Jamie Lannister!')
} else if (jonSnowAttack < jamieLannisterAttack){
    console.log('Jamie Lannister has better attack than Jon Snow!')
} else {
    console.log('The two are evenly matched!')
};

let jonSnowHealth = 100
let jonSnowDefense = 0

if (jonSnowHealth <= jamieLannisterAttack) {
    console.log('Jon Snow has been slain!')
} else {
    jonSnowHealth = jonSnowHealth - jamieLannisterAttack
    console.log(`Jon Snow's health is down to ${jonSnowHealth}`)
};

jonSnowDefense += 25

if (jonSnowHealth <= jamieLannisterAttack - jonSnowDefense) {
    console.log("Jon Snow has been slain!")
} else {
    jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense)
    console.log(`Jon Snow's health is down to ${jonSnowHealth}.`)
};

if (jonSnowHealth + 50 >= 100) {
    jonSnowHealth = 100
} else {
    jonSnowHealth += 50
};

console.log("Jon Snow's health after the health kit is " + jonSnowHealth);

let coinLandHeads = true;

if (coinLandHeads) {
    console.log("The fight continues")
} else {
    console.log("Jon is allowed to run away")
};

//Jamie attacks Jon five times
for (let i = 0; i < 5; i++) {
    jonSnowHealth -= jamieLannisterAttack - jonSnowDefense
    console.log("Jon Snow's health is now " + jonSnowHealth)
    if (i <= 0)
    console.log('Jon Snow is dead')
    break;
}

//assignment 2
//write same for loop as a while loop

//need help with  while loop

while (jonSnowHealth > 0){
    console.log("Jon Snow's health is now " + jonSnowHealth)
    if (jonSnowHealth <= 0)
    console.log('He dead')
    break;
}


/*my own practice stuff below

let jamieLannisterHealth = 100
let jamieLannisterDefense = 0

if (jamieLannisterHealth <= jonSnowAttack) {
    console.log('Jamie Lannister has been slain!')
} else {
    jamieLannisterHealth = jamieLannisterHealth - jonSnowAttack
    console.log("Jamie Lannister's health is reduced.")
}; */