const form = document.getElementById("form")
const input = document.getElementById("investment-amount")
const summary = document.getElementById("summary")
const sumBtn = document.getElementById("sum-btn")

form.addEventListener("submit", async function (e) {
    e.preventDefault()

    const investmentAmount = input.value

    if (!investmentAmount) return alert("Enter an amount")

    const data = {amount: investmentAmount}

    try {
        const response = await fetch("/api", {
            method: "POST", 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        })

        const result = await response.json()

        if (response.ok) {
            summary.showModal()
        }
    }
    catch (err) {
        console.log(err)
    }
    input.value = ""
})

sumBtn.addEventListener("click", () => {
    summary.close()
})