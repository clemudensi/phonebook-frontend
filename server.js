/**
 * Created by SLEEK on 11/30/2017.
 */
const express = require('express');
const app = express();


const port = process.env.PORT || 8000;


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.use(express.static("./public"));
app.listen(port, function(){
    console.log('App is running on port 8000');
});