import express from "express";
import { generateImage } from "./imageController.js";
import cors from "cors";

const app = express();
const port = process.env.PORT || 8000;

const corsOptions = {
	origin: [
		"https://imagine-image.vercel.app/",
		"http://localhost:3001",
	],
	methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
	allowedHeaders: [
		"Content-Type",
		"Authorization",
		"X-CSRF-Token",
	],
	exposedHeaders: [
		"X-CSRF-Token",
		"date",
		"content-type",
		"content-length",
		"connection",
		"server",
		"x-powered-by",
		"access-control-allow-origin",
		"authorization",
		"x-final-url",
	],
	preflightContinue: false,
	credentials: true,
	optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.use(express.json());
app.post("/generate", generateImage);

app.listen(port, () => {
	console.log(`Server is running on port ${port}.`);
});
