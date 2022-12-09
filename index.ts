import express from 'express';
import bodyParser from "body-parser";
import morgan from "morgan"

const app = express();

app.use(bodyParser.json());
app.use(morgan('common'))
app.get('/', (req, res) => {
    res.json({
        message: "Hello Strange! How are you?",
    })
})

app.listen(3000, () => {
    console.log("App listening on port 3000")
})