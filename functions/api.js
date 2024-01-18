import express from 'express';
import ServerlessHttp from 'serverless-http';

// if you want your app run locally then run (node index.js)
export const app = express(); // run the express api


const router = express.Router();

router.get('/' , (req,res)=>{
    res.send("Hello! From Express.")
})

router.get('/git', (req,res)=>{
    res.sendStatus(200).json({"repo" : "added"})
})

app.use("/api", router);

export const handler = ServerlessHttp(app);
