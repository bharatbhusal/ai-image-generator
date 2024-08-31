// Helper function to generate the file name
export const fileNameGenerator = () => {
	const now = new Date();
	const year = now.getFullYear();
	const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
	const day = String(now.getDate()).padStart(2, "0");
	const hours = String(now.getHours()).padStart(2, "0");
	const minutes = String(now.getMinutes()).padStart(2, "0");
	const seconds = String(now.getSeconds()).padStart(2, "0");

	return `ai_image_${year}${month}${day}_${hours}${minutes}${seconds}.png`;
};
