import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const isDev = mode === "development"; // 是否为开发环境
    return {
        plugins: [
            react(),
            dts({
                outDir: path.resolve(__dirname, "dist/types"), // types 输出目录
                insertTypesEntry: true, // 生成 types.ts 入口文件
                include: ["packages/**/*.ts", "packages/**/*.tsx"], // 包含的文件
                rollupTypes: true, // 使用 rollup 打包 types
            }),
        ],
        // 开发环境默认 example 是项目根目录，在这里获取到 index.html | 构建环境下则为项目根目录
        root: isDev ? path.resolve(__dirname, "example") : undefined,
        server: {
            port: 3000,
            open: true,
        },
        build: {
            outDir: path.resolve(__dirname, "dist"), // 构建输出目录
            emptyOutDir: true, // 构建时清空目标目录
            // 构建库模式配置
            lib: {
                entry: path.resolve(__dirname, "packages/index.ts"), // 构建入口
                name: "d_ui", // 构建后的文件名
                formats: ["es", "cjs", "umd", "iife"], // 构建格式
                fileName: format => `d_ui.${format}.js`, // 构建后的文件名
            },
            // rollup 配置
            rollupOptions: {
                external: ["react", "react-dom"], // 忽略的依赖，不会打包进库中
                // 输出配置
                output: {
                    // 全局变量
                    globals: {
                        react: "React",
                        "react-dom": "ReactDOM",
                    },
                },
            },
        },
    };
});
