module.exports = {
	async rewrites() {
		return [
			{
				source: "/:path*",
				destination: "https://audiophile-ecommerce.herokuapp.com/:path*"
			}
		];
	}
};
