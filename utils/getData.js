import path from "node:path"
import fs from "node:fs/promises"

export async function getData() {
    const pathJSON = path.join("data", "userData.json")
    try {
        const data = await fs.readFile(pathJSON)
        const parsedData = JSON.parse(data)
        return parsedData
    }
    catch (err) {
        if (err.code === "ENOENT") {
            //if file doesn't exist, create it
            await fs.mkdir(path.dirname(pathJSON), { recursive: true })
            await fs.writeFile(pathJSON, "[]")
            return []
        }
        throw err
    }
}

