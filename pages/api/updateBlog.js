

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
            const collection = database.collection("blogs");
            const id = parseInt(req.body.blog_id);
            const content = req.body.blog_content;
            const title = req.body.blog_title;
            const image = req.body.blog_image;
            const slug = req.body.blog_slug;

            const update = await collection.findOneAndReplace({blog_id:id},{blog_id:id,blog_content:content,blog_title:title,blog_image:image, blog_slug:slug},{new:true});
            
            
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