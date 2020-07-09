var editorWindow = document.getElementById('textEditor').contentDocument

function onLoad () {
  editorWindow.designMode = 'On'
}

function doRichTextCommand (cmd, arg) {
  
  if(cmd === 'createLink') {
    console.log('cheguei aqui')
    arg = prompt('http:// link aqui...')
  }

  editorWindow.execCommand(cmd, false, arg)
  
}


window.addEventListener('load', onLoad)