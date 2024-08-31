import axios from "axios";

export const generateImage = async ({
	prompt,
	resolution,
}) => {
	try {
		const response = await axios.post(
			process.env.REACT_APP_SERVER_API,
			{
				prompt,
				resolution,
			}
		);

		// Extract base64 image data from response
		const data = response.data.imageData;
		return data;
	} catch (error) {
		throw error;
	}
};
