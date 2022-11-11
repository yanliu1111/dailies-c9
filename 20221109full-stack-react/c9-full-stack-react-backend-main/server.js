import express from "express";
import fetch from "node-fetch";
const PORT = 5001;
const app = express();
app.get("/slow", (req, res) => {
  console.log("delay for 3 seconds");
  setTimeout(() => {
    let seconds = new Date().getTime();
    res.send({ currentTime: seconds });
  }, 3000);
});
const weatherUrl = null;
// ask George how to get your weatherURL for this to work :)
const getWeather = async () => {
  const response = await fetch(weatherUrl);
  const data = await response.json();
  return {
    conditions: data.weather[0].description,
    temperature: data.main.temp,
  };
  return { conditions: "cloudy", temperature: -23 };
};
app.get("/weather", async (req, res) => {
  try {
    const currentWeather = await getWeather();
    res.send(currentWeather);
  } catch (err) {
    console.log(err.message);
    res.status(500).send();
  }
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
