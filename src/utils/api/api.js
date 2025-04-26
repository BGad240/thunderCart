const URL = `https://dummyjson.com/products`

export async function getAllProducts() {
    try {
        const res = await fetch(URL)
        const data = await res.json()
        return data
    } catch (error) {
        console.error(error)
        return []
    }
} 

export async function getPopular() {
    try {
        const res = await fetch(URL)
        const data = await res.json()
        return data.products
        console.log(data.products)
    } catch (error) {
        console.error(error)
        return []
    }
}

