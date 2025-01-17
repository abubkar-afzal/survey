

import { MongoClient } from "mongodb";

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
            let login = await collection.findOne({"user_email":email});
            
            if(login){
                if(login.user_email===email){
                    if(login.user_password===password){
                        res.status(201).json({success:true});
                    }else{
                        console.warn("wrong entity")
                    }
                }else{
                    console.warn("some thing went wrong")
                }
            }else{
                console.warn("no user exisit")
            }

            
            res.status(200).json(login);
        
    } else {
        res.status(405).json({ message: "Method not allowed!" });
    }
}