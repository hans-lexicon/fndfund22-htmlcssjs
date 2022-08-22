function showHide(element, show) {
    if (!show) {
        element.style.display = "none"
    } else {
        element.style.display = "block"
    }
}
showHide(document.getElementById('result'), true)



function isNullOrEmpty(value) {
    if (value.length === 0)
        return true
    else
        return false
}

function isMinimumLength(value, minLength) {
    if (value.length >= minLength) {
        return true
    } else {
        return false
    }
}



let firstName = "hans"

let isnull = isNullOrEmpty(firstName)
console.log(isnull)

let meetminimum = isMinimumLength(firstName, 2)
console.log(meetminimum)

