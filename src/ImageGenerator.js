import React, { useState } from "react";
import axios from "axios";

const ImageGenerator = () => {
	const [prompt, setPrompt] = useState("");
	const [imageUrl, setImageUrl] = useState("");
	const [loading, setLoading] = useState(false);

	const handleGenerateImage = async () => {
		if (!prompt) return;
		setLoading(true);
		try {
			const response = await axios.post(
				"https://api.openai.com/v1/images/generations",
				{
					model: "dall-e-3",
					prompt,
					n: 1,
					size: "1024x1024",
				},
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
					},
				}
			);
			console.log(response.data);
			const imageData = response.data.data[0];
			setImageUrl(imageData.url);
		} catch (error) {
			console.error("Error generating image:", error);
		} finally {
			setLoading(false);
		}
	};

	const handleSaveImage = () => {
		if (!imageUrl) return;
		const link = document.createElement("a");
		link.href = imageUrl;
		link.download = "ai-generated-image.png";
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return (
		<div style={{ textAlign: "center", marginTop: "50px" }}>
			<h1>AI Image Generator</h1>
			<input
				type="text"
				value={prompt}
				onChange={(e) => setPrompt(e.target.value)}
				placeholder="Enter your prompt"
				style={{
					padding: "10px",
					width: "300px",
					marginBottom: "20px",
				}}
			/>
			<div>
				<button
					onClick={handleGenerateImage}
					style={{ padding: "10px 20px", marginRight: "10px" }}
				>
					{loading ? "Generating..." : "Generate Image"}
				</button>
				{imageUrl && (
					<button
						onClick={handleSaveImage}
						style={{ padding: "10px 20px" }}
					>
						Save Image
					</button>
				)}
			</div>
			{imageUrl && (
				<div style={{ marginTop: "20px" }}>
					<img
						src={imageUrl}
						alt="Generated AI"
						style={{ maxWidth: "100%", borderRadius: "10px" }}
					/>
				</div>
			)}
		</div>
	);
};

export default ImageGenerator;
