const fontName = document.getElementById('fontFamily');
const fontSize = document.getElementById('fontSize');
const editorWindow = document.getElementById('textEditor').contentDocument;

const url =
  'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyCUs7iKo_yJ3dqY4o3qkk9DEBvpzZnRi_g';

function fetchSizes() {
  for (i = 1; i <= 7; i++) {
    fontSize.innerHTML += `<option value="${i}">${i}</option>`;
  }
}
function doRichTextCommand(cmd, arg) {
  if (cmd === 'createLink') {
    arg = prompt('https:// link here...');
  }
  editorWindow.execCommand(cmd, false, arg);
}

window.addEventListener('load', () => {
  editorWindow.designMode = 'On';
  fetchSizes();
});

fontSize.addEventListener('change', (event) => {
  const selectedSize = event.target.value;
  doRichTextCommand('fontSize', selectedSize);
});

fontName.addEventListener('change', (event) => {
  const selectedFont = event.target.value;
  console.log(selectedFont)
  doRichTextCommand('fontName', selectedFont);
});
