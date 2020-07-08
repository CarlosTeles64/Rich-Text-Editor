var editorWindow = document.getElementById('textEditor').contentDocument

function onLoad () {
  editorWindow.designMode = 'On'
}

function execCommand(aName, aArg) {
  editorWindow.execCommand(aName, false, aArg)
  editorWindow.contentWindow.focus()
}

window.addEventListener('load', onLoad)