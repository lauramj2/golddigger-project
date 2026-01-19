import path from "node:path"
import fs from "node:fs/promises"
import { getData } from "./getData.js"

export async function addUserInput(newData) {
    try {
        const data = await getData()
        data.push(newData)

        const pathJSON = path.join('data', 'userData.json')

        await fs.writeFile(pathJSON, JSON.stringify(data))
    }
    catch (err) {
        throw new Error(err)
    }
}