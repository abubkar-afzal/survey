//pages/api/saveData.js

import { MongoClient } from "mongodb";
import questionSchema from "@/models/QuestionSchema";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const client = new MongoClient(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    //Data
      let question = new questionSchema(req.body);
      question.save()
    
    try { 
      await client.connect();

      // Choose a name for your database
      const database = client.db("survey");

      // Choose a name for your collection
      const collection = database.collection("questions");

      await collection.insertOne(question);

      res.status(201).json({success:true});
    } catch (error) {
      res.status(500).json({ message: "Something went wrong!" }, error);
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ message: "Method not allowed!" });
  }
}
