import { MongoClient } from "mongodb";
var jwt = require("jsonwebtoken");

export default async function handler(req, res) {
  if (req.method === "POST") {
    const client = new MongoClient(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    //jwt

    const token = req.body;
    const tokenData = jwt.verify(token, process.env.JWTSECRET);
    let userName = tokenData.name;
    let userEmail = tokenData.email;
   
    console.log();
   

    try {
      
      await client.connect();

      // Choose a name for your database
      const database = client.db("survey");

      // Choose a name for your collection
      const collection = database.collection("answers");

     

      const answer = await collection.find({"answerStructure.user_name":userName,"answerStructure.user_email":userEmail}).toArray();
      res.status(201).json({ success: true ,answer});
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
