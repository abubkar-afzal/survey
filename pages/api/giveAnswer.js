import { MongoClient } from "mongodb";
import answerSchema from "@/models/AnswerSchema";
var jwt = require("jsonwebtoken");

export default async function handler(req, res) {
  if (req.method === "POST") {
    const client = new MongoClient(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    //jwt
    const token = req.body.token;
    const tokenData = jwt.verify(token, process.env.JWTSECRET);
    let userName = tokenData.name;
    let userEmail = tokenData.email;
    let userPhone = tokenData.phone;
    let userOccoupation = tokenData.occoupation;
    let userAddress = tokenData.address;
    //request body
    const questionId = req.body.QA.question_id;
    const questionAnswer = req.body.QA.question_answer;
    const questionLabel = req.body.QA.question_label;
    const questionTitle = req.body.QA.question_title;

    try {
      
      await client.connect();

      // Choose a name for your database
      const database = client.db("survey");

      // Choose a name for your collection
      const collection = database.collection("answers");

      let answerStructure = new answerSchema({
        user_name: userName,
        user_occoupation: userOccoupation,
        question_id: questionId,
        question_label: questionLabel,
        question_title: questionTitle,
        question_answer: questionAnswer,
        user_address: userAddress,
        user_phone: userPhone,
        user_email: userEmail,
      });
      answerStructure.save();

      const answer = await collection.insertOne({answerStructure});

      res.status(201).json({ success: true ,answer});
    } catch (error) {
      res.status(500).json({ message: "Something went wrong!" }, error);
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ message: "Method not allowed!" });
  }
}
