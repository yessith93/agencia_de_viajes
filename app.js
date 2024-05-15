// app.js
import express from 'express';
const app = express();
app.use(express.static('public'));

//add body parser to read data from forms 
app.use(express.urlencoded({extended:true}))
export default app;
