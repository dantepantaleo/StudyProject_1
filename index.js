// Create a variable to store the hero's name and XP amount.
// Use Variables, Operators, Loops, and Decision Structures.
// Then use a decision structure to display one of the following messages:

// If XP is less than 1,001 = Iron
// If XP is between 1,001 and 2,000 = Bronze
// If XP is between 2,001 and 5,000 = Silver
// If XP is between 5,001 and 7,000 = Gold
// If XP is between 7,001 and 8,000 = Platinum
// If XP is between 8,001 and 9,000 = Ascendant
// If XP is between 9,001 and 10,000 = Immortal
// If XP is greater than or equal to 10,001 = Radiant

// At the end, it should display a message:
// The Hero (hero's name) is at the (level) level



let hero = "";
let xp = "";
let nivel = "";

let heroes = [
    ["Deadpool", 999],
    ["Wolverine", 1500],
    ["Miranha", 3000],
    ["Xavier Carequinha", 6000],
    ["Besta", 7500],
    ["Ciclop", 8500],
    ["Magneto", 9500],
    ["Fênix", 10100]
];

for (let i = 0; i < heroes.length; i++) {
    hero = heroes[i][0];
    xp = heroes[i][1];

    switch (true) {
        case (xp < 1001):
            nivel = "Ferro";
            break;
        case (xp >= 1001 && xp <= 2000):
            nivel = "Bronze";
            break;
        case (xp >= 2001 && xp <= 5000):
            nivel = "Prata";
            break;
        case (xp >= 5001 && xp <= 7000):
            nivel = "Ouro";
            break;
        case (xp >= 7001 && xp <= 8000):
            nivel = "Platina";
            break;
        case (xp >= 8001 && xp <= 9000):
            nivel = "Ascendente";
            break;
        case (xp >= 9001 && xp <= 10000):
            nivel = "Imortal";
            break;
        case (xp >= 10001):
            nivel = "Radiante";
            break;
    }

    console.log("O Herói " + hero + " está no nível " + nivel);
}
