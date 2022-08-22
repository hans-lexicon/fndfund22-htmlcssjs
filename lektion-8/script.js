function IsValid(value, regEx) {
    if (regEx.test(value))
       return true
    
    return false    
}

function validate(event) {    
    switch(event.type) {
        case "keyup":
            validateElement(event.target)
            break;

        case "submit":
            for (let element of event.target) {
                validateElement(element)
            }

            break;
    }
}

function validateElement(element) {
    let error = ""

    if (element.required) {
        switch(element.type) {
            case "text":
                switch(element.id) {
                    case "firstName":
                        if (!IsValid(element.value, /^([a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ'`'\-]{2,})+$/))
                            error = 'Du måste ange ett giltigt förnamn'
                        else
                            error = ''
                        break;
    
                    case "lastName":
                        if (!IsValid(element.value, /^([ a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ'`'\-]{2,})+$/))
                            error = 'Du måste ange ett giltigt efternamn'
                        else
                            error = ''
                        break;
                }
                break;
    
            case "email":
                if (!IsValid(element.value, /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
                    error = 'Du måste ange en giltig e-postadress'
                else
                    error = ''
                break;
    
            case "password":
                if (!IsValid(element.value, /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/))
                    error = 'Du måste ange ett giltigt lösenord'
                else
                    error = ''
                break;
        }
    
        document.getElementById(`${element.id}-error`).innerText = error      
    }
}

function handleSignUp(event) {
    event.preventDefault()
    document.getElementById('response-error').innerText = ''

    // validate form data
    validate(event)
        
    // send data to web api
    let json = JSON.stringify({
        firstName: event.target[0].value,
        lastName: event.target[1].value,
        email: event.target[2].value,
        password: event.target[3].value
    })

    fetch('https://localhost:7166/api/auth/signup', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: json
    })
    .then(res => {
        if (res.status === 400) {
            document.getElementById('response-error').innerText = 'Du måste fylla i alla obligatoriska fält!'
            document.getElementById('response-error').classList.add('text-danger')
        }

        if (res.status === 409) {
            document.getElementById('response-error').innerText = 'Det finns redan en användare med samma e-postadress'
            document.getElementById('response-error').classList.add('text-danger')
        }

        if (res.status === 200) {
            window.location.replace('signin.html')
        }  
    })

}

function handleSignIn(event) {
    event.preventDefault()
    document.getElementById('response-error').innerText = ''   

    // validate form data
    validate(event)
    
    // send data to web api
    let json = JSON.stringify({
        email: event.target[0].value,
        password: event.target[1].value
    })

    fetch('https://localhost:7166/api/auth/signin', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: json
    })
    .then(async res => {
        if(res.status === 400) throw new Error(await res.text()) 
        else  
            return res.text()
    })
    .then(data => {
        sessionStorage.setItem('token', data)
        window.location.replace('account.html')
    })
    .catch(async error => {
        document.getElementById('response-error').innerText = await error.message
        document.getElementById('response-error').classList.add('text-danger')
    })
}

function handleSignOut() {
    sessionStorage.removeItem('token')
    window.location.replace('signin.html')
}

function isSignedIn() {
    let token = sessionStorage.getItem('token')
    if (token === null || token === undefined)
        window.location.replace('signin.html')
}



