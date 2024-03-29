let hero = "Spider Man boladão"
let heroXP = 9001
let ranks = ["Ferro", "Bronze", "Prata", "Ouro", "Plantina", 
"Ascendente", "Imortal", "Radiante"]

console.log(ranks[1])

if(heroXP <= 1000){
    console.log("O Herói de nome " + hero + " " + "está no nível " +
    ranks[0])}
    else if((heroXP >= 1001) && (heroXP <= 2000)){
        console.log("O Herói de nome " + hero + " " + "está no nível " +
        ranks[1])}
    else if((heroXP >= 2001) && (heroXP <= 5000)){
        console.log("O Herói de nome " + hero + " " + "está no nível " +
        ranks[2])}
    else if((heroXP >= 5001) && (heroXP <= 7000)){
        console.log("O Herói de nome " + hero + " " + "está no nível " +
        ranks[3])}
    else if((heroXP >= 7001) && (heroXP <= 8000)){
        console.log("O Herói de nome " + hero + " " + "está no nível " +
        ranks[4])}
    else if((heroXP >= 8001) && (heroXP <= 9000)){
        console.log("O Herói de nome " + hero + " " + "está no nível " +
        ranks[5])}    
    else if((heroXP >= 9001) && (heroXP <= 10000)){
        console.log("O Herói de nome " + hero + " " + "está no nível " +
        ranks[6])}
    else if(heroXP >= 10001){
        console.log("O Herói de nome " + hero + " " + "está no nível " +
        ranks[7])}