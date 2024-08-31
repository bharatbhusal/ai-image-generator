import OpenAI from "openai";
import "dotenv/config";

export const generateImage = async (req, res) => {
	try {
		const openai = new OpenAI({
			organization: process.env.OPENAI_ORGANIZATION_ID,
			project: process.env.PROJECT_ID,
			apiKey: process.env.OPENAI_API_KEY,
		});

		const imageResponse = await openai.images.generate({
			model: "dall-e-3",
			prompt: req.body.prompt,
			n: 1,
			size: "1792x1024",
			response_format: "b64_json",
		});

		const imageData = imageResponse.data[0].b64_json;
		res.status(200).json({ imageData: imageData });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};
