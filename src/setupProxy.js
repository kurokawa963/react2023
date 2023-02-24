const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        "/dev/users",
        createProxyMiddleware({
            target: "https://museumcollection.tokyo/works/?keyword=${keyword}&output=json",
            changeOrigin: true,
        })
    );
};