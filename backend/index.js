import express from "express";
import { generateImage } from "./imageController.js";
import cors from "cors";

const app = express();
const port = 8080;

const corsOptions = {
	origin: ["https://imagine-image.vercel.app/"],
	methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
	preflightContinue: false,
	optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.use(express.json());
app.post("/generate", generateImage);

app.listen(port, (req, res) => {
	console.log(`Server is running.`);
});
