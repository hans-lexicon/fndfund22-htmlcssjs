/*
        Programmeringsspråk                     Skriptspråk
        (kompilator)                            (runtime env.)
        skapar körbara filer (.exe)             (kör en fil i ett program/runtime env.)
        ----------------------------------------------------------------------------------
        C/C++/C#/Java/VB                        JavaScript/PS/Python
                                                .js  -> js-motor (edge.exe/chrome.exe/firefox.exe)
                                                .ps1 -> powershell.exe/cmd.exe
                                                .py  -> py.exe

        console.log("information")
        console.warn("varningsmeddelande")
        console.error("felmeddelande")

        DOM - Document Object Model         document.
        BOM - Browser Object  Model         window.

        document.getElementById('result')
        document.getElementsByClassName('box')
        document.getElementsByName('newsletter')
        document.getElementsByTagName('div')

        document.querySelector('#id')
        document.querySelector('.className')
        document.querySelectorAll('.className')


        DATA TYPES
        --------------------------------------------------------------
        String              för text
        Number              heltal, decimaltal
        Boolean             true/false
        Undefined           odefinerat -> hittas inte eller du har inte definerat upp det
        Null                ingenting
        Object              objekt dvs en samling av flera olika värden


        DEKLARERING AV VARIABLER    (camelCase)
        --------------------------------------------------------------------------------------
                       firstName = "Hans"                   gör inte så här
        var            var firstName = "Hans"               undvik detta om du kan
        let            let firstName = "Hans"               gör helst såhär
        const          const pi = 3.14                      endast vid statiska värden

*/


// STRING
let firstName = "Hans"
let lastName  = 'Mattin-Lassei'
let address   = `Nordkapsvägen 1`      // shift + ´

var sentence = "Hej jag heter Hans Mattin-Lassei och bor på adressen Nordkapsvägen 1."
var sentence = 'Hej jag heter ' + firstName +' '+ lastName + 'och bor på adressen '+ address +'.'
var sentence = `Hej jag heter ${firstName} ${lastName} och bor på adressen ${address}.`

// NUMBER
var value = 1
var value = 1.1

// BOOLEAN
var isEnabled = true
var isEnabled = false

// UNDEFINED
var test 




// IF-STATEMENTS

if (true) { /*DO THIS*/}
if (true) { /*DO THIS*/ } else {  /*DO THIS*/ }
if (true) { /*DO THIS*/ } else if (true){  /*DO THIS*/ } else {  /*DO THIS*/ }

let number = "2"

// if (number === 1) { 
//         console.log('numret är ett') 
// } else if (number === 2) { 
//         console.log("numret är två") 
// } else { 
//         console.log("numret är varken ett eller två") 
// }

/*
        OPERATORS
        --------------------
        ==              lika med
        ===             lika med och samma datatyp
        !=              inte lika med
        !==             inte lika med och inte samma datatyp
        <               mindre än
        <=              mindre än eller lika med
        <==             mindre än eller lika med och samma datatyp
        >               större än
        >=              större än eller lika med
        >==             större än eller lika med och samma datatyp

        let exampleValue = "50" 

        if (exampleValue != 50)
                console.log('påståendet är sant')
*/

// SWITCH
let exampleValue = 10

switch(exampleValue) {
        case 50:
                console.log('talet är femtio')
                break;
        case 60:
                console.log('talet är sextio')
                break;
        default:
                console.log('talet är något annat')
                break;
}
