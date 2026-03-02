import http from "node:http"
// import  fs from "node:fs"
// import path from "node:path"
// import { fileURLToPath } from "node:url"
import { serveStatic } from "./utils/serveStatic.js"
import { handleGet, handlePost } from "./handlers/routeHandlers.js"

const PORT = 3000

// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)

// const __filename = import.meta.filename
const __dirname = import.meta.dirname

const server = http.createServer(async (req, res) => {
    if (req.url === "/api") {
        if (req.method === "GET") {
            return await handleGet(res)
        }
        else if (req.method === "POST") {
            return await handlePost(req, res)
        }
    } else if (!req.url.startsWith("/api")) {
        return await serveStatic(req, res, __dirname)
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' })
        res.end('Not Found')
    }
})

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))