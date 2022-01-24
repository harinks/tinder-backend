import express  from "express";
import mongoose  from "mongoose";
import Cards from "./dbCards.js";
import cors from "cors";

//add config
const app = express();
const port = process.env.PORT || 3001;
const url = "mongodb+srv://admin:hari1999@cluster0.zj57o.mongodb.net/tinderdb?retryWrites=true&w=majority"

//middleware
app.use(express.json())
app.use(cors());

//db config
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//api endpoint
app.get('/', function(req,res){
    res.status(200).send("hello world");
})

app.post('/tinder/cards', function(req,res){
    const dbCard = req.body;

    Cards.create(dbCard, function(err,data){
        if(err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

app.get('/tinder/cards', function(req,res){
    Cards.find(function(err,data){
        if(err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})
//listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));