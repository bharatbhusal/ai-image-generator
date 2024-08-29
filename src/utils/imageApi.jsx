import axios from "axios";

export const generateImage = async (prompt) => {
	try {
		const response = await axios.post(
			"https://api.openai.com/v1/images/generations",
			{
				model: "dall-e-3",
				prompt,
				n: 1,
				size: "1792x1024",
				response_format: "b64_json",
			},
			{
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
				},
			}
		);

		// Extract base64 image data from response
		const base64Data = response.data.data[0].b64_json;
		return base64Data;
	} catch (error) {
		throw error;
	}
};
