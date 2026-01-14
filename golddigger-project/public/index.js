// setInterval(function() {
//     const url = "https://www.goldapi.io/api/XAU/USD"
//     const options = {
//                     method: "GET",
//                     headers: {"Content-Type": "application/json", "x-access-token": "goldapi-1j6sie19midm0j6a-io"}
//                     }
//     fetch(url, options)
//         .then(res => res.json())
//         .then(data => document.getElementById("price-display").innerHTML = data.price)
//         .catch(error => console.log('error', error))
// }, 100000)
// import { handlePost } from "../handlers/routeHandlers.js"

const form = document.getElementById("form")
const input = document.getElementById("input")

form.addEventListener("submit", async function (e) {
    e.preventDefault()
    try {
        const response = await fetch("/api", {method: "POST", headers: {"Content-Type": "application/json"}})
        const data = await response.json()
    }
    catch (err) {
        console.log(err)
    }
})