import React, { useState } from "react";
import { RiAiGenerate } from "react-icons/ri";
import { FiSave } from "react-icons/fi";
import DEFAULT_IMG from "./assets/img/default.png";
import axios from "axios";
import "./ImageGenerator.css"; // Import the CSS file

const ImageGenerator = () => {
	const [prompt, setPrompt] = useState("");
	const [imageUrl, setImageUrl] = useState();
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
		<div className="image-generator-container">
			<h1 className="title">AI Image Generator</h1>
			<div className="image-container">
				<img
					src={imageUrl ? imageUrl : DEFAULT_IMG}
					alt="Generated AI"
					className="generated-image"
				/>
			</div>

			<div className="prompt-container">
				<input
					type="text"
					value={prompt}
					onChange={(e) => setPrompt(e.target.value)}
					placeholder="Enter your prompt"
					className="prompt-input"
				/>
				<button
					onClick={handleGenerateImage}
					className="generate-button"
					disabled={loading}
				>
					{loading ? "Generating..." : <RiAiGenerate />}
				</button>
				{imageUrl && (
					<button
						onClick={handleSaveImage}
						className="save-button"
					>
						<FiSave />
					</button>
				)}
			</div>
		</div>
	);
};

export default ImageGenerator;
