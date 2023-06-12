const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
    transpileDependencies: true,

    outputDir: "../boot/src/main/resources",

    devServer: {
        proxy: {
            "/hi": {
                target: "http://localhost:9001",
                ws: true,
                changeOrigin: true,
            },
        },
    },
});
