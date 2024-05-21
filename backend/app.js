const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const userRoutes= require("./routes/user-route");
var cors = require("cors");

app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
  res.send("Running");
});
app.use(userRoutes);

//connexion à mongoDB
async function connectDB(){
    await mongoose.connect("mongodb+srv://mouna:mouna123456@cluster0.wwhdyld.mongodb.net/UsersDb?retryWrites=true&w=majority");
 }
 connectDB().catch((err)=>console.error(err));
app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})