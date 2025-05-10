export function trunction(text, length, replaceWith = "...") {
    if (length < 5) {
        return text?.split(" ").slice(0, length).join(" ")
    } else if (length > 5 && text?.length > length) {
        return text?.slice(0, length) + replaceWith
    } else {
        return text
    }
}


export function discountDegree(price, precent) {
    const discount = Math.round((price * precent) / 100)
    return price + discount
}

// export function slicingText(text, length) {
//     return text.length > length ? text.slice
// }

export function getName(name) {
    let words = name.trim().split(" ")
    let firstLetter = words[0][0]
    let lasLetter = words[1][0]
    return firstLetter+lasLetter
}