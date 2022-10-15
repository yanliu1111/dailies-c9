let currentDate = new Date().toLocaleDateString("en-us", {
  month: "long",
  day: "2-digit",
  year: "numeric",
  weekday: "long",
  hour: "2-digit",
  hour12: true,
  second: "2-digit",
  minute: "2-digit",
});

const data = [
  {
    hello: world,
  },
  {
    currentDate,
  },
];
