//pages/api/saveData.js

import { MongoClient } from "mongodb";
import newuserSchema from "@/models/NewUserSchema";
var jwt = require("jsonwebtoken");

export default async function handler(req, res) {
  if (req.method === "POST") {
    const client = new MongoClient(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    //Data
    let newuser = new newuserSchema(req.body);
    newuser.save();

    try {
      console.log(newuser);
      await client.connect();

      // Choose a name for your database
      const database = client.db("survey");

      // Choose a name for your collection
      const collection = database.collection("users");

      const add = await collection.insertOne(newuser);
      const newtoken = await collection.findOne({"user_email":newuser.user_email});
      var token = jwt.sign(
        { 
          _id: newtoken._id,
          email: newtoken.user_email,
          name: newtoken.user_name,
          password: newtoken.user_password,
          phone: newtoken.user_phone,
          address: newtoken.user_address,
          occoupation: newtoken.user_occoupation,
          bd: newtoken.user_bd,
        },
        process.env.JWTSECRET,
        { expiresIn: "10d" }
      );
      res.status(201).json({ success: true, token });
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
