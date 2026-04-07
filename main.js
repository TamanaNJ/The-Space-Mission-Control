let name = prompt("Enter your name:");
let age = Number(prompt("Enter your age:"));
let favoritePlanet = prompt("What is your favorite planet?");

alert(`Welcome ${name}! At ${age}, you're ready to explore Mars! 🌌`);

let supplies = ["Fuel Tank", "Oxygen Cylinder", "Food Pack", "Space Suit"];

let spaceship = {
  "Fuel Tank": { quantity: 3, status: "full" },
  "Oxygen Cylinder": { quantity: 5, status: "full" },
  "Food Pack": { quantity: 10, status: "ready" },
  "Space Suit": { quantity: 2, status: "ready" },
};

let missionPoints = 0;

for (let i = 1; i <= 3; i++) {
  let accept = prompt(
    `Mission ${i}: A new mission task is available! Accept? (yes/no)`,
  ).toLowerCase();

  if (accept === "yes") {
    let supplyList = supplies.map((item) => `- ${item}`).join("\n");
    let choice = prompt(
      `Available supplies:\n${supplyList}\n\nWhich supply do you want to use?`,
    );

    // Normalize input
    choice = choice.toLowerCase();

    let foundItem = supplies.find((item) => item.toLowerCase() === choice);

    if (foundItem && spaceship[foundItem].quantity > 0) {
      spaceship[foundItem].quantity--;
      missionPoints += 10;

      alert(`${foundItem} used successfully! ✅\nYou earned 10 points.`);
    } else {
      alert("❌ Not enough supplies!");
    }
  } else {
    alert("Mission skipped.");
  }
}

function refillSupply(itemName, amount) {
  let foundItem = supplies.find(
    (item) => item.toLowerCase() === itemName.toLowerCase(),
  );

  if (foundItem) {
    spaceship[foundItem].quantity += amount;
    alert(`${foundItem} refilled by ${amount} units.`);
  } else {
    alert("Invalid supply name!");
  }
}

// Allow refill 2 times
for (let i = 0; i < 2; i++) {
  let item = prompt("Enter supply name to refill:").toLowerCase();
  let amount = Number(prompt("Enter amount to refill:"));

  refillSupply(item, amount);
}

let report = "📊 Mission Report:\n\n";

for (let item in spaceship) {
  let { quantity, status } = spaceship[item]; // destructuring
  report += `${item}: Quantity = ${quantity}, Status = ${status}\n`;
}

report += `\n⭐ Total Mission Points: ${missionPoints}\n`;

alert(report);

// Final message
alert(
  `Great job, ${name}! You completed 3 missions and earned ${missionPoints} points! 🚀`,
);
