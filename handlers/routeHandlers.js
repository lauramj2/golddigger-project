import { parseJSONBody } from "../utils/parseJSONBody.js"
import { sanitizeInput } from "../utils/sanitizeInput.js"
import { sendResponse } from "../utils/sendResponse.js"
import { addUserInput } from "../utils/addUserInput.js"
import { getGoldPrice } from "../utils/getGoldPrice.js"
// import { getData } from "../utils/getData.js"

export async function handleGet(res) {
    try {
        // const data = await getData()
        const goldPrice = getGoldPrice()
        // const response = {goldPrice, data}
        // console.log("Response:", response)
        sendResponse(res, 200, "application/json", JSON.stringify({goldPrice}))
    } catch (err) {
        sendResponse(res, 500, "application/json", JSON.stringify({error: err.message}))
    }
}

export async function handlePost(req, res) {
    try {
        const parsedBody = await parseJSONBody(req)
        const sanitizedBody = sanitizeInput(parsedBody)
        await addUserInput(sanitizedBody)
        sendResponse(res, 201, "application/json", JSON.stringify(sanitizedBody))
    }
    catch (err) {
        sendResponse(res, 400, "application/json", JSON.stringify({error: err.message}))
    }
}