const getRandomLamp = (lampItems) => {
  const length = lampItems.length;
  const randomIndex = Math.floor(Math.random() * length);
  return lampItems[randomIndex];
};

const getBulb = () => {
  console.log("choose lamp");
  const lampTypes = ["blue", "yellow", "rainbow", "white"];
  const randomLamp = getRandomLamp(lampTypes);
  console.log(`pick ${randomLamp} for bulb changing`);
};

// experts.getLamp =getLamp;
