import express from "express";
import { generateImage } from "./imageController.js";
import cors from "cors";

const app = express();
const port = 8080;

app.use(
	cors({
		origin: "https://imagine-image.vercel.app/",
	})
);
app.use(express.json());
app.post("/generate", generateImage);

app.listen(port, () => {
	console.log(
		`Server is running on http://localhost:${port}`
	);
});
