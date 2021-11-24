//write a program that takes a single parameter from the command line, a number, and rolls that many six-sided dice
const rolls = process.argv.slice(2);

const rollDice = () => {
  let newRoll = [];
  let join = "";
  for (let i=0; i < rolls; i++) {
    let randomNum = Math.floor(Math.random() * 6) + 1;
    newRoll.push(randomNum);
  }
  join = newRoll.join(", ");
  console.log(`rolled ${rolls} dice: ${join}`);
};
rollDice();

