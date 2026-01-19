export async function update() {
    const url = "https://www.goldapi.io/api/XAU/USD"
    const options = {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                        }
                    }
    fetch(url, options)
        .then(res => res.json())
        .then(data => console.log(data))
}
