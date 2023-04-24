const encryptButton = document.getElementById('encrypt');
const decryptButton = document.getElementById('decrypt');
const copyButton = document.getElementById('btnCopy');
const textInput = document.getElementById('text');
const resultContainer = document.getElementById('rText');

text.focus();

//criptografar
document.getElementById("encrypt").addEventListener("click", function encryptText(){
    let text = textInput.value;
    if (text == "") {
        return;
    } else if (!/^[a-z]/.test(text)) {
        alert("Apenas letras minúsculas e sem acento.");
        return;
    }
    text = text.replaceAll('e', 'enter');
    text = text.replaceAll('i', 'imes');
    text = text.replaceAll('a', 'ai');
    text = text.replaceAll('o', 'ober');
    text = text.replaceAll('u', 'ufat');
    resultContainer.textContent = text;
    copyButton.classList.remove("hide");
    document.querySelector('.info-result').textContent = "";
});

//descriptografar
document.getElementById("decrypt").addEventListener("click", function decryptText(){
    let text = textInput.value.toLowerCase();
    if (text == "") {
        return;
    }
    text = text.replaceAll('enter', 'e');
    text = text.replaceAll('imes', 'i');
    text = text.replaceAll('ai', 'a');
    text = text.replaceAll('ober', 'o');
    text = text.replaceAll('ufat', 'u');
    resultContainer.textContent = text;
    copyButton.classList.remove("hide");
    document.querySelector('.info-result').textContent = "";
})

//copiar
document.getElementById("btnCopy").addEventListener("click", function copyText(){
        let textToCopy = resultContainer.textContent;
        navigator.clipboard.writeText(textToCopy)
          .then(() => alert("Seu texto foi copiado"))
          .catch(() => alert("Falhou na hora de copiar o texto"));

          text.value = "";
          text.focus();
})

copyButton.classList.add("hide");

//limpar
document.getElementById("clean").addEventListener("click", function cleanText() {
		/*document.getElementById("text").value = "";
		document.getElementById('rText').textContent = "";
        document.getElementById("btnCopy").style.display = "none";
        text.focus();
        document.querySelector(".info-result").style.display = "block";*/
        location.reload();
})