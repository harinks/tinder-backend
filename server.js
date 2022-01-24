import express  from "express";
import mongoose  from "mongoose";
import Card from "./dbCards.js";

//add config
const app = express();
const port = process.env.PORT || 3001;
const url = "mongodb+srv://admin:hari1999@cluster0.zj57o.mongodb.net/tinderdb?retryWrites=true&w=majority"
//middleware

//db config
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//api endpoint
app.get('/', function(req,res){
    res.status(200).send("hello world");
})

app.post('/tinder/card', function(req,res){
    const dbCard = req.body;

    Card.create(dbCard, function(err,data){
        if(err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})
//listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));