const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
    transpileDependencies: true,

    outputDir: "../springboot/src/main/resources/static",

    devServer: {
        proxy: {
            "/": {
                target: "http://localhost:9001",
                ws: true,
                changeOrigin: true,
            },
        },
    },
});
