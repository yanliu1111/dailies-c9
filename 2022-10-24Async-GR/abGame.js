import { appendFile } from "fs";

export async function levelOne() {
  while (gamePlay === true) {
    const response = await fetch("http//");
    const date = await response.json();
    console.log(data);
    let celebrityA = data[0];
    let celebrityB = data[1];
    if (celebrityA === celebrityB) {
      continue;
    }
    console.log(`Celebrity A: ${celebrityA}`);
    const bodyA = await got(pullImage(celebrityA).buffer());
    console.log(await termialImage.butter(bodyA, { width: "20%" }));
  }
}
if(){

}
else{
    console.log("incorrect: ");
    const postRequest = await fetch("http://localhost:3000/",{
        method:"post",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({score, newName})
    })
    break;
}

///BACKEND
app.post("/",(req,res)=>{
    let body = req.body;
    let name = body.newName;
    let score = body.score;
    users[name]=score;
    console.log(users);
})