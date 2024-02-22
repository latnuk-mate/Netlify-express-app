import express from 'express';
import ServerlessHttp from 'serverless-http';
import ejs from 'ejs'

// if you want your app run locally then run (node index.js)
export const app = express(); // run the express api

// for netlify use...
app.set('views', 'views');
app.set('view engine', 'ejs');


const router = express.Router();

router.get('/' , (req,res)=>{
    res.render('index');
})

router.get('/git', (req,res)=>{
    res.json({"repo" : "added"})
})

app.use("/api", router);

export const handler = ServerlessHttp(app);
