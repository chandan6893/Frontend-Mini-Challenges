const input=document.querySelector("input");
const lowerCase=document.querySelector("#lowerCase span")
const upperCase = document.querySelector("#upperCase span");
const camelCase = document.querySelector("#camelCase span");
const pascalCase = document.querySelector("#pascalCase span");
const snakeCase = document.querySelector("#snakeCase span");
const kebabCase = document.querySelector("#kebabCase span");
const trim = document.querySelector("#trim span");





function toCamelCase(string) {
    if(!string) return string;
  const wordsArray = string.split(" ");
//   console.log(wordsArray);

  const finalWordArray = wordsArray.map((word, index) => {
    if (!word) return word;
    if (index === 0) return word;
    return word[0].toUpperCase() + word.slice(1, word.length);
 
  });

//   console.log(finalWordArray.join(""));
  camelCase.innerText = finalWordArray.join("");
}

function toPascalCase(string){
    const wordsArray = string.split(" ");
    // console.log(wordsArray);

    const finalWordArray = wordsArray.map((word, index) => {
      if(!word) return word
      return word[0].toUpperCase() + word.slice(1, word.length);
    });

    // console.log(finalWordArray.join(""));
    pascalCase.innerText = finalWordArray.join("");
}

function toSnakeCase(str){
    // const wordsArray=str.split(' ').join("_")
    // return wordsArray;
    return str.replaceAll(" ", "_");
}

function toKebabCase(str) {
//   const wordsArray = str.split(" ").join("-");
//   return wordsArray;
return str.replaceAll(" ","-")
}

function toTrim(str){
    return str.replaceAll(" ", "");
}

input.addEventListener("input",()=>{
    lowerCase.innerText=input.value.trim().toLowerCase();
    upperCase.innerText = input.value.trim().toUpperCase();
    toCamelCase(input.value.trim().toLowerCase());
    toPascalCase(input.value.trim().toLowerCase());
    snakeCase.innerText = toSnakeCase(input.value.trim());
    kebabCase.innerText = toKebabCase(input.value.trim());
    trim.innerText = toTrim(input.value.trim());
})