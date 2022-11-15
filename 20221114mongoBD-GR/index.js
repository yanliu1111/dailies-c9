import mongoose from "mongoose";
import dotenv from "dotenv";
import { CLIENT_RENEG_LIMIT } from "tls";
dotenv.config();

async function main() {
  //   console.log(process.env.MONGODB_USER);//for checking connection successful

  await mongoose.connect(process.env.MONGODB_URI, {
    dbName: process.env.MONGODB_DBNAME,
    user: process.env.MONGODB_USER,
    pass: process.env.MONGODB_PSSWORD,
  });

  console.log(`Connect to MongoDB database'${process.env.MONGODB_DBNAME}'`);

  const personSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number,
  });
  const Person = mongoose.model("Person", personSchema);

  const bob = new Person({
    firstName: "Bill",
    lastName: "Developer",
    age: 40,
  });

  await bob.save();
  console.log("Successfully save Bob");

  await Person.updateMany(
    {
      age: { $lte: 50 },
    },
    {
      lastName: "Mask",
    }
  );

  const maskPeople = await Person.find({
    age: { $lte: 50 },
  });
  console.log(maskPeople);

  const bill = await Person.findById("6372a5108d850284bc1fb09c");
  bill.age++;
  await bill.save();
  console.log(bill);
  await Person.findByIdAndUpdate("63728df2212a6bf1fab0f79b", {
    age: 29,
  });
  console.log("Successfully update Bob");
}
main().catch((err) => console.error(err));
