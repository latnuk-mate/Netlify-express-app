import express from 'express';
import ServerlessHttp from 'serverless-http';
import { fileURLToPath } from 'url'
import { dirname } from 'path'
const filePath = dirname(fileURLToPath(import.meta.url))


// if you want your app run locally then run (node index.js)
export const app = express(); // run the express api

// for netlify use...
app.set('views', 'views');
app.set('view engine', 'ejs');


const router = express.Router();

// for rendering static files here...
router.use('/static' , express.static(filePath + "/public"))

router.get('/' , (req,res)=>{
    res.render('index');
})

router.get('/git', (req,res)=>{
    res.json({"repo" : "added"})
})


app.use("/api", router);


export const handler = ServerlessHttp(app);
