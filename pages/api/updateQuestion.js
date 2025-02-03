

import { MongoClient } from "mongodb";

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
            const collection = database.collection("questions");
            const id = parseInt(req.body.question_id);
            const label = req.body.question_label;
            const title = req.body.question_title;

            const update = await collection.findOneAndReplace({question_id:id},{question_id:id,question_label:label,question_title:title},{new:true});
            
            
            res.status(201).json({success:true});
            
        } catch (error) {
            res.status(500).json({ message: "Something went wrong!" });
        } finally {
            await client.close();
        }
    } else {
        res.status(405).json({ message: "Method not allowed!" });
    }
}