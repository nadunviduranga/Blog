const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const cors = require('cors')
const authController = require('./controllers/authController')
const blogController = require('./controllers/blogController')
const app = express()
const multer = require('multer')


//! connect db
// mongoose.connect(process.env.MONGO_URL, () => console.log("MongoDB has benn started successfully"))
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

async function connectToMongoDB() {
    try {
        await mongoose.connect(process.env.MONGO_URL, options);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

mongoose.set('strictQuery' , false);
connectToMongoDB();

//! routes
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use('/auth', authController)
app.use('/blog', blogController)


//! connect server
app.listen(process.env.PORT, () => console.log("Server has been started successfully"))

/ multer
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'public/images')
    },
    filename: function(req, file, cb){
        cb(null, req.body.filename)
    }
})

const upload = multer({
    storage: storage
})

app.post('/upload', upload.single("image"), async(req, res) => {
    return res.status(200).json({msg: "Successfully uploaded"})
})
