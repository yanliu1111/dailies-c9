import express from "express";
export const drinkRouter = express.Router;
let sandwiches = [
  {
    name: "cock",
  },
  {
    name: "shirly temple ",
  },
  {
    name: "manhattan",
  },
  {
    name: "ale",
  },
];
//list all sandwiches
drinkRouter.get("/", (req, res) => {
  res.send(sandwiches);
});
//post for creating sandwiches
//create a new sandwich
router.post("/", (req, res) => {
  const sandwich = req.body;
  sandwiches.push(sandwich);
  // console.log(sandwich.name);
  res.send();
});
//delete a  sandwich
//filter what to keep
router.delete("/", (req, res) => {
  const sandwich = req.body;
  console.log(sandwich);
  sandwiches = sandwiches.filter((s) => s.name !== sandwich.name);

  res.send();
  //   const filterSandwiches = sandwiches.filter(
  //     (sandwich) => sandwich.ingredients.length <= 3
  //   );
  //   console.log("Filtered: ", filterSandwiches);
  //   res.send("Original: ", sandwiches);
});
