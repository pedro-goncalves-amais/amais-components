import { resolve } from "path";
import { defineConfig } from "vite";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import path from "path";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    build: {
        lib: {
            entry: resolve(__dirname, "src/components/index.js"),
            name: "AmaisComponents",
            // the proper extensions will be added
            fileName: "amais-components",
        },
        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: ["vue"],
            output: {
                // Provide global variables to use in the UMD build
                // for externalized deps
                globals: {
                    vue: "Vue",
                },
            },
        },
    },
    plugins: [
        vue(),
        createSvgIconsPlugin({
            // Specify the icon folder to be cached
            iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
            // Specify symbolId format
            symbolId: "[name]",
            /**
             * custom insert position
             * @default: body-last
             */
            inject: "body-last",

            /**
             * custom dom id
             * @default: __svg__icons__dom__
             */
            customDomId: "__svg__icons__dom__",
        }),
    ],
});
