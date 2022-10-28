var translateBtn = document.querySelector("#translate-btn");
var textArea = document.querySelector("#text-area");

var outputBox = document.querySelector("#output-box");

var serverUrl = "https://api.funtranslations.com/translate/groot.json";

function getTranslationUrl(text) {
  return serverUrl + "?" + "text=" + text;
}

function errorHandler(error) {
  console.log("error occured ", error);
}

translateBtn.addEventListener("click", function clickHandler() {
  var inputText = textArea.value;

  fetch(getTranslationUrl(inputText))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      outputBox.innerText = translatedText;
    })
    .catch(errorHandler);
});
