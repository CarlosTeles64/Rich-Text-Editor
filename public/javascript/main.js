const fontName = document.getElementById('fontFamily')
const fontSize = document.getElementById('fontSize')
var editorWindow = document.getElementById('textEditor').contentDocument

function fetchAllSizes () {
  for (i = 1; i < 7; i++) {
    fontSize.innerHTML += `<option value="${i}">${i}</option>`
  }
}

function onLoad () {
  editorWindow.designMode = 'On'
  fetchAllSizes()
}

function doRichTextCommand (cmd, arg) {
  editorWindow.execCommand(cmd, false, arg)
}

window.addEventListener('load', onLoad)

fontSize.addEventListener('change', (event) => {
  const selectedSize = event.target.value
  console.log(selectedSize)
  doRichTextCommand('fontSize', selectedSize)
})

fontName.addEventListener('change', (event) => {
  const selectedFont = event.target.value
  console.log(selectedFont)
  doRichTextCommand('fontName', selectedFont)
})
