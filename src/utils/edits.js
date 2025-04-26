export function trunction(text, length, replaceWith = "...") {
    if (length < 5) {
        return text.split(" ").slice(0, length).join(" ")
    } else if (length > 5 && text.length > length) {
        return text.slice(0, length) + replaceWith
    } else {
        return text
    }
}

// export function slicingText(text, length) {
//     return text.length > length ? text.slice
// }