const getRandomLamp = (lampItems) => {
  const length = lampItems.length;
  const randomIndex = Math.floor(Math.random() * length);
  return lampItems[randomIndex];
};

const getPriceValuation = (lamp) => {
  if (lamp.price > 40) {
    return `Expensive bulb, price is ${lamp.price}`;
  } else {
    return `Cheap bulb, price is ${lamp.price}`;
  }
};
// question: how do I know lamp to match price
//answer lamp is just perameter, lamp is lampTypes (under)
const getBulb = () => {
  console.log("Go to store");
  console.log("Choose a Bulb");
  const lampTypes = [
    { color: "blue", label: "therapy", price: 50 },
    { color: "yellow", label: "cooking", price: 30 },
    { color: "rainbow", label: "playing", price: 80 },
    { color: "white", label: "studying", price: 60 },
  ];
  const randomLamp = getRandomLamp(lampTypes);
  console.log(
    `Pick ${randomLamp.color} light, good for ${
      randomLamp.label
    }, "${getPriceValuation(randomLamp)}"`
  );
};
exports.getBulb = getBulb;
