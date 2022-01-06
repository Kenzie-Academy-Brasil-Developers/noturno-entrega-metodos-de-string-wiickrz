const result = document.getElementById("textContent")
const btnUpperCase = document.getElementById("toUpperCase")
const btnLowerCase = document.getElementById("toLowerCase")
const btnReplace = document.getElementById("replace")
const btnConcat = document.getElementById("concat")
const btnSplit = document.getElementById("split")


// UpperCase
const upperCase = () => {
    let inputSelect = document.querySelector("#stringInput").value
    let output = inputSelect.toUpperCase()
    result.innerText = output
    return output
}
btnUpperCase.addEventListener("click", upperCase)

// LowerCase
const lowerCase = () => {
    let inputSelect = document.querySelector("#stringInput").value
    let output = inputSelect.toLowerCase()
    result.innerText = output
    return output
}
btnLowerCase.addEventListener("click", lowerCase)

// Replace
const replaceStr = () => {
    let inputSelect = document.querySelector("#stringInput").value
    let output = inputSelect.replaceAll(".","").replaceAll("-","")
    result.innerText = output
    return output
}
btnReplace.addEventListener("click", replaceStr)

// Concat
const concatenate = () => {
    let inputSelect = document.querySelector("#stringInput").value
    let output = inputSelect.concat(" - I Love JS")
    result.innerText = output
    return output
}
btnConcat.addEventListener("click", concatenate)

// Split
const splitText = () => {
    let inputSelect = document.querySelector("#stringInput").value
    let output = inputSelect.split('')
    result.innerText = output
    return output
}
btnSplit.addEventListener("click", splitText)