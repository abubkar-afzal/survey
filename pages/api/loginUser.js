import { MongoClient } from "mongodb";
var jwt = require("jsonwebtoken");

export default async function handler(req, res) {
  if (req.method === "POST") {
    const client = new MongoClient(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await client.connect();

    // Choose a name for your database
    const database = client.db("survey");

    // Choose a name for your collection
    const collection = database.collection("users");

    let email = req.body.user_email;
    let password = req.body.user_password;
    let login = await collection.findOne({ user_email: email });

    if (login) {
      if (login.user_email === email) {
        if (login.user_password === password) {
          var token = jwt.sign(
            {
              _id: login._id,
              email: login.user_email,
              name: login.user_name,
              password,
              password: login.user_password,
              phone: login.user_phone,
              address: login.user_address,
              occoupation: login.user_occoupation,
              bd: login.user_bd,
              photo: login.user_photo,
            },
            process.env.JWTSECRET,
            { expiresIn: "30d" }
          );
          res.status(201).json({ success: true, token });
        } else {
          res.status(400).json({ success: false });
        }
      } else {
        res.status(400).json({ success: false });
      }
    } else {
      console.warn("no user exisit");
    }

    res.status(200).json(login);
  } else {
    res.status(405).json({ message: "Method not allowed!" });
  }
}
