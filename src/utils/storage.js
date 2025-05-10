import Swal from "sweetalert2"

export const saveItem = (order) => {
    let existingOrders = []

    const ordersFromStorage = localStorage.getItem("orders")
    if (ordersFromStorage) {
        try {
            existingOrders = JSON.parse(ordersFromStorage)
        } catch (error) {
            console.error("Error while loading data", error)
            existingOrders = []
        }
    }

    existingOrders.push(order)
    localStorage.setItem("orders", JSON.stringify(existingOrders))

    Swal.fire({
        icon: 'success',
        title: 'Product Delivered',
        text: "You Own This Product Now",
        confirmButtonText: "Ok"
    })
}


export const getOrders = () => {
    try {
        const data = localStorage.getItem('orders');
        return data ? JSON.parse(data) : [];
    } catch (e) {
        console.error('Error on getting data:', e);
        return [];
    }
};

export const saveWhishList = (product) => {
    let existingWishes = []

    const whishedInStorage = localStorage.getItem('wishlist')

    if (whishedInStorage) {
        try {
            existingWishes = JSON.parse(whishedInStorage)
        } catch (error) {
            console.error('error in get wishes: ', error)
            existingWishes = []
        }
    }
    const isAlreadyAdded = existingWishes.some(item => item.id === product.id)

    if (!isAlreadyAdded) {
        existingWishes.push(product)
        localStorage.setItem("wishlist", JSON.stringify(existingWishes))
    }
}


export const getWishes = () => {
    try {
        const data = localStorage.getItem('wishlist')
        return data ? JSON.parse(data) : []
    } catch (error) {
        console.error(error)
        return []
    }
}


export const removeItem = (id) => {
    let products = JSON.parse(localStorage.getItem('wishlist')) || []
    products = products.filter(product=> product.id !==id)
    localStorage.setItem('wishlist', JSON.stringify(products))
    return products
}