
console.log("0");
console.log("nilesh\'".length);

const sentence = "    nilesh is a good boy     ";
const word = "boy";

console.log("1");
console.log("includes:", sentence.includes(word));

console.log("2");
console.log("indexOf:", sentence.indexOf(word));

console.log("3");
console.log("lastIndexOf:", sentence.lastIndexOf(word));

console.log("4");
console.log("startsWith:", sentence.startsWith(word));

console.log("5");
console.log("endsWith:", sentence.endsWith(word));

console.log("6");
console.log("repeat(3):", sentence.repeat(3));

console.log("7");
console.log("slice(0,8):", sentence.slice(0, 8));

console.log("8");
console.log("substring(0,5):", sentence.substring(0, 5));

console.log("9");
console.log("split(' '):", sentence.split(" "));

console.log("10");
console.log("trim():", sentence.trim());

console.log("11");
console.log("trimStart():", sentence.trimStart());

console.log("12");
console.log("trimEnd():", sentence.trimEnd());

console.log("13");
console.log("padStart(20, 'Nilesh'):", sentence.padStart(20, "Nilesh"));// This will pad the string to a total length of 20 characters, using "Nilesh" as padding

console.log("14");
console.log("padEnd(20, 'Nilesh'):", sentence.padEnd(20, "Nilesh"));

console.log("15");
console.log("charAt(0):", sentence.charAt(0));

console.log("16");
console.log("charCodeAt(0):", sentence.charCodeAt(0));

console.log("17");
console.log("concat(' is a good boy'):", sentence.concat(" is a good boy"));

console.log("18");
console.log("replace('good', 'bad'):", sentence.replace("good", "bad"));

console.log("19");
console.log("toLowerCase():", sentence.toLowerCase());

console.log("20");
console.log("toUpperCase():", sentence.toUpperCase());

console.log("21");
console.log("toLocaleLowerCase():", sentence.toLocaleLowerCase());

console.log("22");
console.log("toLocaleUpperCase():", sentence.toLocaleUpperCase());// This method converts the string to uppercase based on the locale settings of the environment, which can be useful for internationalization.