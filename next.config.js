module.exports = {
	async rewrites() {
		return [
			{
				source: "/*",
				destination: "https://audiophile-ecommerce.herokuapp.com/*"
			}
		];
	}
};
