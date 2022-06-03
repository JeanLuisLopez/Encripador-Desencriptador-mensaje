export function encryptor(text) {
  let textCopy = text;
  let numcar = text.length;
  let words = "";

  for (let i = 0; i < numcar; i++) {
    let car = textCopy.charAt(i);
    if (car === "a" || car === "A" || car === "á") {
      car = "ai";
    } else if (car === "e" || car === "E") {
      car = "enter";
    } else if (car === "i" || car === "I") {
      car = "imes";
    } else if (car === "o" || car === "O") {
      car = "ober";
    } else if (car === "u" || car === "U") {
      car = "ufat";
    }
    words = words + car;
  }
  return words;
}
export function dencryptor(text) {
  let textCopy = text;

  return textCopy
    .replace(/ai/g, "a")
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
}
