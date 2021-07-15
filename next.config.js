module.exports = {
	async rewrites() {
		return [
			{
				source: "/api/:path*",
				destination: "https://audiophile-ecommerce.herokuapp.com/:path*"
			}
		];
	}
};
