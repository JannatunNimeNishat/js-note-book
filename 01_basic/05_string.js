const gameName = new String("Counter-Strike");
//we can access the functions of string through new keyword.
console.log(gameName.length);
console.log(gameName[0])
console.log(gameName.toLocaleLowerCase())
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf("e"))

const newSubstringOfGameName = gameName.substring(0,4)
console.log(newSubstringOfGameName)