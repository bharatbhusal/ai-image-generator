import React, { useState } from "react";
import { RiAiGenerate } from "react-icons/ri";
import { FiSave } from "react-icons/fi";
import DEFAULT_IMG from "./assets/img/default.png";
import { generateImage } from "./utils/imageApi";
import { saveImage } from "./utils/fileSaver";
import { ScaleLoader } from "react-spinners";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ImageGenerator.css";

const ImageGenerator = () => {
	const [prompt, setPrompt] = useState("");
	const [resolution, setResolution] = useState("1024x1024");
	const [imageData, setImageData] = useState(null);
	const [loading, setLoading] = useState(false);

	const handleGenerateImage = async () => {
		if (!prompt.trim()) {
			toast.error("Prompt cannot be empty");
			return;
		}

		setLoading(true);
		try {
			const generatedImageData = await generateImage({
				prompt,
				resolution,
			});
			setImageData(generatedImageData);
		} catch (error) {
			console.error("Error generating image:", error);
			toast.error(
				error?.response?.data?.error?.message ||
					"Error generating image. Please try again or try with a different prompt."
			);
		} finally {
			setLoading(false);
			setResolution("1024x1024");
		}
	};

	return (
		<div className="image-generator-container">
			<h1 className="title">Imagine Image</h1>
			<div className="image-container">
				<img
					src={
						imageData
							? `data:image/png;base64,${imageData}`
							: DEFAULT_IMG
					}
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

				<div className="resolution-buttons">
					<button
						onClick={() => setResolution("1024x1024")}
						className={`resolution-button ${
							resolution === "1024x1024" ? "active" : ""
						}`}
					>
						Square
					</button>
					<button
						onClick={() => setResolution("1792x1024")}
						className={`resolution-button ${
							resolution === "1792x1024" ? "active" : ""
						}`}
					>
						Wide
					</button>
					<button
						onClick={() => setResolution("1024x1792")}
						className={`resolution-button ${
							resolution === "1024x1792" ? "active" : ""
						}`}
					>
						Tall
					</button>
				</div>
				<div className="generate-save-buttons">
					<button
						onClick={handleGenerateImage}
						className="generate-button"
						disabled={loading}
					>
						{loading ? (
							<ScaleLoader color="white" height={20} width={1} />
						) : (
							<RiAiGenerate />
						)}
					</button>
					{imageData && (
						<button
							onClick={() => saveImage(imageData)}
							className="save-button"
						>
							<FiSave />
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default ImageGenerator;
