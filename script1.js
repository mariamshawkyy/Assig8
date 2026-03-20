console.log("Hello World!");

let favoriteFoods = ["Ramen", "Sushi", "Tacos", "Pizza", "Pasta", "Ice Cream"];

for (let i = 0; i < favoriteFoods.length; i++) {
    console.log("One of my favorite foods is " + favoriteFoods[i] + ".");
}

for (let i = 0; i < favoriteFoods.length; i++) {
    console.log("My #" + (i + 1) + " favorite food is " + favoriteFoods[i]);
}

function printFoodRecommendation(foodName) {
    console.log("Have you ever tried " + foodName + "?");
    console.log("I always recommend " + foodName + " to friends.");
    console.log("Trust me — " + foodName + " is delicious.");
}

printFoodRecommendation("Ramen");
printFoodRecommendation("Sushi");
printFoodRecommendation("Tacos");

let friendFavorites = [
    "Pizza", "Sushi", "Pasta", "Falafel", "Burgers", "Ramen", "Pad Thai", "Curry", "Pho", "Nachos",
    "Gnocchi", "Donuts", "Steak", "Lasagna", "Biryani", "Tacos", "Croissant", "Churros", "Fried Rice", "Shawarma",
    "Miso Soup", "BBQ Ribs", "Hotpot", "Enchiladas", "Baklava", "Gyros", "Hummus", "Empanadas", "Pancakes", "Muffins",
    "Samosas", "Macarons", "Quiche", "Pierogi", "Arepas", "Okonomiyaki", "Ceviche", "Brisket", "Bao Buns", "Poutine",
    "Clam Chowder", "Fajitas", "Canelé", "Kimchi", "Tamales", "Omelette", "Biscuits", "Tempura", "Spring Rolls", "Crepes"
];

let foodsWithA = [];
for (let i = 0; i < friendFavorites.length; i++) {
    if (friendFavorites[i].toLowerCase().includes("a")) {
        foodsWithA.push(friendFavorites[i]);
    }
}
console.log(foodsWithA);

let longFoodNames = [];
let shortFoodNames = [];
for (let i = 0; i < friendFavorites.length; i++) {
    if (friendFavorites[i].length > 6) {
        longFoodNames.push(friendFavorites[i]);
    } else {
        shortFoodNames.push(friendFavorites[i]);
    }
}
console.log(longFoodNames);
console.log(shortFoodNames);

if (longFoodNames.length > shortFoodNames.length) {
    console.log("There are more long-named foods.");
} else {
    console.log("There are more short-named foods.");
}

let longestFood = "";
for (let i = 0; i < friendFavorites.length; i++) {
    if (friendFavorites[i].length > longestFood.length) {
        longestFood = friendFavorites[i];
    }
}
console.log("The longest food name in the list is " + longestFood + " with " + longestFood.length + " characters.");