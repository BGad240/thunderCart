const URL = `https://dummyjson.com/products/category/tops`
const SORTURLCAT = `https://dummyjson.com/products/category`
const URLALL = `https://dummyjson.com/products`
const URLCAT = `https://dummyjson.com/products/categories`



export async function getAllProducts() {
    try {
        const res = await fetch(URLALL)
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


export async function getCat() {
    try {
        const res = await fetch(URLCAT)
        const data = await res.json()
        return data
        console.log(data)
    } catch (error) {
        console.error(error)
        return []
    }

}


export async function getByCategory(cateName) {
    try {
        const res = await fetch(`${SORTURLCAT}/${cateName}`)
        const data = await res.json()
        console.log(data.products)
        return data.products

    } catch (error) {
        console.error(error)
    }
}


export async function getProductId(id) {
    try {
        const res = await fetch(`${URLALL}/${id}`)
        const data = await res.json()
        console.log(data)
        return data
    } catch (error) {
        console.error(error)
        return []
    }
}