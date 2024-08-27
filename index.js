const express = require('express')
const mongoose = require('mongoose');
const Product=require('./model/product.model.js');
const productRoute = require('./routes/product.route.js');  // Assuming the file is in a routes folder
const app = express()

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use("/api/products",productRoute);


app.get('/',(req,res)=>{
    res.send('Hello from node API server ');
});
//database connection 
mongoose.connect("mongodb+srv://ksaud1885:mongodb123@cluster0.cbsel.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(3000,() =>{
        console.log('Server is running on port 3000')
    });
})
.catch((error) => {
    console.log('Error connecting to MongoDB:', error);
});





