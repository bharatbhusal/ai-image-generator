const CACHE_NAME = "app-cache";
const urlsToCache = [
	"/",
	"/index.html",
	"/favicon.svg",
	"/static/js/main.1d7b5368.js",
	"/static/css/main.f60926d0.css",
	"/manifest.json",
];

self.addEventListener("install", (event) => {
	event.waitUntil(
		caches
			.open(CACHE_NAME)
			.then((cache) => cache.addAll(urlsToCache))
			.catch((error) =>
				console.error("Error caching files:", error)
			)
	);
});

self.addEventListener("fetch", (event) => {
	const requestUrl = new URL(event.request.url);
	if (requestUrl.protocol === "chrome-extension:") {
		return; // Skip caching requests with 'chrome-extension' scheme
	}

	event.respondWith(
		caches
			.match(event.request)
			.then((cachedResponse) => {
				if (cachedResponse) {
					return cachedResponse;
				}
				return fetch(event.request)
					.then((response) => {
						// Check if we received a valid response
						if (
							!response ||
							response.status !== 200 ||
							response.type !== "basic"
						) {
							return response;
						}

						const responseToCache = response.clone();
						caches
							.open(CACHE_NAME)
							.then((cache) =>
								cache.put(event.request, responseToCache)
							)
							.catch((error) =>
								console.error("Error caching response:", error)
							);

						return response;
					})
					.catch((error) => {
						console.error("Error fetching:", error);
						// Optionally return a fallback response here if fetching fails
					});
			})
			.catch((error) =>
				console.error("Error responding to fetch:", error)
			)
	);
});
