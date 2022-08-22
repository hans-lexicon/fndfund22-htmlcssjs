document.getElementById('regform').addEventListener('submit', function(event) {
    event.preventDefault()

    let firstName = event.target['firstName'].value
    let error = ""

    if(isNullOrEmpty(firstName))
        error = "Du måste ange ett värde"
    else
        if(notMinimum(firstName, 2)) 
            error = "Du måste ange minst 2 tecken"

    document.getElementById('firstName-error').innerText = error
})



function isNullOrEmpty(value) {
    if(value.length === 0)
        return true
    else
        return false
}

function notMinimum(value, min) {
    if(value.length < min)
        return true
    else
        return false
}