import express from "express";
import fetch from "node-fetch";

const PORT = 5000;
const app = express();
import dotenv from "dotenv";
dotenv.config();
app.get("/slow", (req, res) => {
  console.log("delay for 3 seconds");
  setTimeout(() => {
    let seconds = new Date().getTime();
    res.send({ currentTime: seconds });
  }, 3000);
});
const weatherUrl = process.env.WEATHER_URL;
//create getWeather function
const getWeather = async () => {
  const response = await fetch(weatherUrl);
  const data = await response.json();
  return {
    conditions: data.weather[0].main,
    temperature: data.main.temp,
  };
  // return { conditions: "cloudy", temperature: -1 };
};

app.get("/weather", async (req, res) => {
  try {
    const currentWeather = await getWeather();
    res.send(currentWeather);
  } catch (error) {
    console.log(err.message);
    res.status(500).send({ error: "Something went wrong" });
  }
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
