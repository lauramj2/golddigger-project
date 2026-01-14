import { parseJSONBody } from "../utils/parseJSONBody.js"
import { sanitizeInput } from "../utils/sanitizeInput.js"
import { sendResponse } from "../utils/sendResponse.js"
import { addUserInput } from "../utils/addUserInput.js"
import { update } from "../data/data.js"

export async function handleGet(res) {
    const data = await update()
    const content = JSON.stringify(data)
    sendResponse(res, 200, "application/json", content)
}


export async function handlePost(req, res) {
    try {
        const parsedBody = await parseJSONBody(req)
        const sanitizedBody = sanitizeInput(parsedBody)
        await addUserInput(sanitizedBody)
        sendResponse(res, 201, "application/json", JSON.stringify(sanitizedBody))
    }
    catch (err) {
        sendResponse(res, 400, "application/json", JSON.stringify({error:err}))
    }
}