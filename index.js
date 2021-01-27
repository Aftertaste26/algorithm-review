const { questionInt, question } = require("readline-sync");
const generateWafer = require("./wafer3D");
const poker = require("./poke");
const print = console.log;

print("//======================//");
print("//=====  Activity  =====//");
print("//======================//");

print("option:\n [1]: I'm hungry \n [2]: Poke-poke");
const key = question(": > ");

switch (key) {
  case "1":
    const n = questionInt("Enter a number between 4 and 100 (inclusive): > ");
    try {
      print(generateWafer(n));
    } catch (error) {
      print(error);
    }
    break;

  case "2":
    let cards = [];
    for (let index = 0; index < 5; index++) {
      cards.push(question("Enter a card: > "));
    }
    try {
      print(poker(cards));
    } catch (error) {
      print(error);
    }
    break;
}
