/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 
let jonSnowAttack = 95
let jamieLannisterAttack = 35

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

/*my own stuff below

let jamieLannisterHealth = 100
let jamieLannisterDefense = 0

if (jamieLannisterHealth <= jonSnowAttack) {
    console.log('Jamie Lannister has been slain!')
} else {
    jamieLannisterHealth = jamieLannisterHealth - jonSnowAttack
    console.log("Jamie Lannister's health is reduced.")
}; */