let goldPrice = 2050

export function getGoldPrice() {
    const volatility = 0.002
    const drift = 0.0001

    const randomShock = (Math.random() - 0.5) * volatility
    goldPrice = goldPrice * (1 + drift + randomShock)

    return goldPrice.toFixed(2)
}
