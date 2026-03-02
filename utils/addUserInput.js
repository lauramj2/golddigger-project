import path from "node:path"
import fs from "node:fs/promises"
import { getData } from "./getData.js"

export async function addUserInput(newData) {
    const pathJSON = path.join('data', 'userData.json')
    
    const data = await getData()
    data.push({
        ...newData,
        "time of purchase": new Date().toISOString()
    })

    console.log(data)

    await fs.writeFile(pathJSON, JSON.stringify(data, null, 2))
}