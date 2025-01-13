# React + Vite

# QR-Code-Scanner in einer React-Anwendung

npm install @cmdnio/react-qr-reader

HTTPS aktivieren (für Kamera auf mobilen Geräten):

npm install --save-dev vite-plugin-mkcert
Bearbeite die Datei vite.config.js:

js
Code kopieren
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mkcert from "vite-plugin-mkcert";

export default defineConfig({
plugins: [react(), mkcert()],
server: {
https: true,
},
});

Öffne die URL in deinem Browser:
Auf deinem Computer: https://localhost:5173/
Auf deinem Mobilgerät (im gleichen Netzwerk): https://<Deine IP>:5173/
Scanne einen QR-Code mit der Kamera. Der erkannte Text wird auf der Seite angezeigt.
