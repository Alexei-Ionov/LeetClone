const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./Routes/router')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

const coorsOptions = {
    origin:'*', 
    credentials: 'true', 
    optionSuccessStatus: 200
}

app.use(cors(coorsOptions));

app.use('/', router)



const port = 4000;
const server = app.listen(port, () => { 
    console.log(`server running on ${port}`);
})