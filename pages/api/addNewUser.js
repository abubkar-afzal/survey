//pages/api/saveData.js

import { MongoClient } from "mongodb";
import newuserSchema from "@/models/NewUserSchema";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const client = new MongoClient(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    //Data
      let newuser = new newuserSchema(req.body);
      newuser.save()
    
    try { console.log(newuser)
      await client.connect();

      // Choose a name for your database
      const database = client.db("survey");

      // Choose a name for your collection
      const collection = database.collection("users");

      await collection.insertOne(newuser);

      res.status(201).json({ message: "account created!" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Something went wrong!" }, error);
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ message: "Method not allowed!" });
  }
}
