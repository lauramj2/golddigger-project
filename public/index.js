const form = document.getElementById("form")
const input = document.getElementById("investment-amount")
const summary = document.getElementById("summary")
const sumBtn = document.getElementById("sum-btn")
const priceDisplay = document.getElementById("price-display")
const investmentSummary = document.getElementById("investment-summary")

//fetch data from server (GET req) and update dom
async function updateGoldPrice() {
    try {
        const res = await fetch("/api")
        const data = await res.json()
        priceDisplay.textContent = data.goldPrice
    } catch (err) {
        console.error(err)
    }
}

updateGoldPrice()

setInterval(() => {
    updateGoldPrice()
}, 10000)

form.addEventListener("submit", async function (e) {
    e.preventDefault()

    //get user input
    const investmentAmount = input.value

    //error is nothing is entered
    if (!investmentAmount) return alert("Enter an amount")
    
    //calculate ounces bought
    const ounces = (investmentAmount / Number(priceDisplay.textContent)).toFixed(2)

    //update investment summary
    investmentSummary.innerHTML = `You just bought ${ounces} ounces for $${input.value}. 
                                    You will receive documentation shortly.`

    //store user input in an object
    const data = {
                "amount paid": `$${investmentAmount}`, 
                "price per oz": `$${priceDisplay.textContent}`, 
                "gold sold": `${ounces} Oz`
                }

    //send data object to server
    try {
        const response = await fetch("/api", {
            method: "POST", 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        })

        //handle server response, covert to JSON
        //result contains whatever is returned from sever
        // const result = await response.json()

        //show modal if response is ok
        if (response.ok) {
            summary.showModal()
        }
    } catch (err) {
        console.log(err)
    }
    //clear input
    input.value = ""
})

sumBtn.addEventListener("click", () => {
    summary.close()
})