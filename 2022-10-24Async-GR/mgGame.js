import { appendFile } from "fs";
import { userInfo } from "os";
import readlineSync from "readline-sync";
import { json } from "stream/consumers";

function timeout(func, ms) {
  setTimeout(() => {
    func;
  }, ms);
}

function byBye() {
  console.log("okay, bye");
  process.exit(0);
}

function clearConsoleAndScrollbackBuffer() {
  process.stdout.write("\u001b[3JU001B[2JU001B[1J");
}

async function welcomeScreen() {
  clearConsoleAndScrollbackBuffer();
  let welcomeResponse = await fetch("http://localhost:3500");
  let welcome = await welcomeResponse.text();
  console.log(welcome);

  let guestInfoResponse = await fetch("http://localhost:3500/guestname");
  userInfo = await guestInfoResponse.json();
  console.log(userInfo);
  readlineSync
    .keyIn('Press "S" to start', { limit: "s" }, { hideEchoback: true })
    .tolowerCase();
  gameMenu();
}
async function showTutorial() {
  clearConsoleAndScrollbackBuffer();
  let tutorialResponse = await fetch("http:localhost:3500/tutorial");
  let tutorial = await tutorialResponse.text();
  console.log(tutorial);
  setTimeout(() => {
    readlineSync
      .keyIn(
        'Press"M" to return to menu',
        { limit: "m" },
        { hideEchoback: true }
      )
      .tolowerCase();
    gameMenu();
  }, 1000);
}

async function updateUserName() {
  let newUser = { Name: "" };
  clearConsoleAndScrollbackBuffer();
  newUser.name = readlineSync.question("please enter a new name: ");
  let updateUserNameResponse = await fetch(
    "http://localhost:3500/updateUserName",
    {
      method: "PUT",
      headers: { "Content-Type": "application/jason; charset=utf-8" },
      body: JSON.stringify(newUser),
    }
  );
  userInfo = await updateUserNameResponse.json();
  console.log("Your new username is now: " + userInfo.name);
  gameMenu();
}

async function gameMenu() {
  clearConsoleAndScrollbackBuffer();
  console.log(`Welcome', ${userInfo.Name}`);
}

/////backend
import {
  startGame,
  getDifficulties,
  setDifficulty,
  giveScore,
} from "./server-function";
import { tutorial, menu } from "./server-objects.js";
import express from "express";

let userInfo = {
  Name: "Guest",
  Score: 0,
};

const app = express();
const port = 4400;
app.use(express.json());

app.get("/", (req, res) => res.send(startGame()));
app.get("/guestname", (req, res) => res.send(userInfo()));
app.get("/start", (req, res) => res.send(getDifficulties()));
app.get("/mainMenu", (req, res) => res.send(menu));
app.get("/tutorial", (req, res) => res.send(tutorial));

app.get("/getCourse", (req, res) => {
  let difficultyIndex = req.query.index;
  res.send(setDifficulty(difficultyIndex));
});

app.put("/updateUserName", (req, res) => {
  userInfo.Name = req.body.Name; //Mg got problem
  res.send(userInfo);
});

app.get("/result", (req, res) => {
  let result = req.query.yourarea;
  if (result == "Winner") {
    +userInfo.Score++;
  }
  res.send(giveScore(result));
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
export { userInfo };
