const express = require("express");
const app = express();
const PORT = 4000;
app.use(express.json());

app.post("/hello", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});
//response.send(new Date())
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

//forest app
app.get("/forest", (request, response) => {
  console.log("request is", request);
  console.log("query is", request.query);

  let daylight = request.query.daylight;

  if (daylight === "true") {
    response.send("You are in a deep, decently lit wood...");
  } else {
    response.send("You are in a deep, dark wood...");
  }
});

//Hello world
app.get("/hello", (req, res) => {
  console.log("reached this endpoint");
  console.log("ExpressJS Rulez!!!");
  const messageJSON = [
    { message: "Hello World!" },
    {
      Hello: "World",
    },
    { currentDate },
  ];
  res.send(messageJSON);
});

/*testing
const { datafile } = require("./data");
app.get("/test", (req, res) => {
  res.status(200).json({ success: true, data: datafile });
});*/

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
//https://gist.github.com/gregfenton/6660d8541ecf6de84a1e2bf75809326f
