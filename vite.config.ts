import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    root: path.resolve(__dirname, "example"), // 默认 example 是项目根目录，在这里获取到 index.html
    server: {
        port: 3000,
        open: true,
    },
});
