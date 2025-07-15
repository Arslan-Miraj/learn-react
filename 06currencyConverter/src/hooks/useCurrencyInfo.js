import { useState, useEffect } from "react"

function useCurrencyInfo(currency) {
    const [currencyInfo, setCurrencyInfo] = useState({})
    useEfect (() => {
        let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
        fetch(url)
        .then((res) => res.json())
        .then((res) => { setCurrencyInfo(res[currency]) })
        console.log(currencyInfo)
    }, [currency])
    
    return currencyInfo
}

export default useCurrencyInfo