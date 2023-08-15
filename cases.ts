let myName = "tooba"
let lowercase : string = myName.toLowerCase()
let uppercase : string = myName.toUpperCase()
let titlecase : string = myName.replace(/\b\w/g, (char) => char.toUpperCase());
console.log("original name:-" , myName)
console.log("lower case:-" , lowercase)
console.log("upper case:-" , uppercase)
console.log("title case:-" , titlecase)
