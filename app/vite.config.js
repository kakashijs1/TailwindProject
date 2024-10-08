import { defineConfig } from "vite";

export default defineConfig({
    root: "./src",  // ระบุ root ของโปรเจกต์
    build: {
        outDir: "../dist",  // โฟลเดอร์ที่เก็บผลลัพธ์การ build
        emptyOutDir: true,  // ล้างโฟลเดอร์ dist ก่อนที่จะ build ใหม่
        rollupOptions: {
            input: './src/index.html'  // ระบุไฟล์เริ่มต้นถ้ามีหลาย entry points
        }
    },
    server: {
        port: 3000,  // ตั้งค่า port ของ dev server (เปลี่ยนได้ตามความต้องการ)
        open: true,  // เปิด browser อัตโนมัติเมื่อเริ่ม dev server
    }
});
