export const saveImage = (
	base64Data,
	fileName = "downloaded-image.png"
) => {
	try {
		// Create a link element
		const a = document.createElement("a");
		a.href = `data:image/png;base64,${base64Data}`;
		a.download = fileName;

		// Append to the body and trigger click to download
		document.body.appendChild(a);
		a.click();

		// Clean up
		document.body.removeChild(a);
	} catch (error) {
		console.error("Image download failed:", error);
	}
};
