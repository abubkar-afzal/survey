import { MongoClient } from "mongodb";
var jwt = require("jsonwebtoken");

export default async function handler(req, res) {
  if (req.method === "POST") {
    const client = new MongoClient(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    try {
      await client.connect();

      // Choose a name for your database
      const database = client.db("survey");

      // Choose a name for your collection
      const collection = database.collection("users");
      const name = req.body.user_name;
      const bd = req.body.user_bd;
      const password = req.body.user_password;
      const phone = parseInt(req.body.user_phone);
      const address = req.body.user_address;
      const occoupation = req.body.user_occoupation;
      const email = req.body.user_email;
      const id = req.body._id;
      var token = jwt.sign(
        {
          _id: id,
          email: email,
          name: name,
          password,
          password: password,
          phone: phone,
          address: address,
          occoupation: occoupation,
          bd: bd,
        },
        process.env.JWTSECRET,
        { expiresIn: "2d" }
      );
      console.log(phone);
      await collection.findOneAndReplace(
        { user_email: email },
        {
          
          user_email: email,
          user_name: name,
          user_bd: bd,
          user_password: password,
          user_phone: phone,
          user_address: address,
          user_occoupation: occoupation,
        },
        { new: true }
      );

      res.status(201).json({ success: true, token });
    } catch (error) {
      res.status(201).json({ success: false });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ message: "Method not allowed!" });
  }
}
