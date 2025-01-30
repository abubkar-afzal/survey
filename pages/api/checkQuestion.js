

import { MongoClient } from "mongodb";
import QuestionSchema from "@/models/QuestionSchema";
export default async function handler(req, res) {
  if (req.method === "POST") {
    const client = new MongoClient(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    //Data
      let newquestion = new QuestionSchema(req.body);
      newquestion.save()
      console.log(req.body.question_id);

    try { console.log(newquestion)
      await client.connect();

      // Choose a name for your database
      const database = client.db("survey");

      // Choose a name for your collection
      const collection = database.collection("questions");
      const id = parseInt(req.body.question_id)
      let check = await collection.findOne({question_id:id});
      if(check){
        res.status(201).json({ success : true });

      }else{
        res.status(201).json({ success : false });

      }
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
