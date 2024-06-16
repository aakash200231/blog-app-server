import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

import Connection from './database/db.js';
import Router from './routes/route.js';

const PORT = 8000;


dotenv.config();

const app = express();
const corsConfig = {
    origin : "*",
    credential: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
};
app.options("",cors(corsConfig));
app.use(cors(corsConfig));
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))

app.use('/',Router);




const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
 

Connection(USERNAME,PASSWORD);

app.listen(PORT, () => console.log(`server is running on ${PORT}`));