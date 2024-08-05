const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes/routes")
const bodyParser = require('body-parser');
const fileUpload = require("express-fileupload");
const {cloudinaryConnect }= require("./config/Cloudinary");

require('dotenv').config();
const PORT = process.env.PORT || 4000;

//cookie-parser - what is this and why we need this ?
const cookieParser = require("cookie-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(
	fileUpload({
		useTempFiles:true,
		tempFileDir:"/tmp",
	}))

app.use(express.json());
app.use(
	cors({
		origin:"http://localhost:3000",
		credentials:true,
	})
)

// console.log("img",process?.env?.API_KEY)

require("./config/database").connect();
cloudinaryConnect()

app.use("/fah/v1", routes);
app.get("/", (req, res) => {
	return res.status(200).json({
		success: true,
		message:"connected to fah backend"
	})
})


app.listen(PORT, () => {
    console.log(`App is listening at ${PORT}`);
})