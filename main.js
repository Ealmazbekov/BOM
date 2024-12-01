const timeElement = document.getElementById('time');
const bgColorSelect = document.getElementById('bgColor');
const setBgColorButton = document.getElementById('setBgColor');
const showURL = document.getElementById('showURL');
const infoElement = document.getElementById('info');

setInterval(() => {
    timeElement.textContent = `${new Date().toLocaleTimeString()}`;
} , 1000);

setBgColorButton.addEventListener('click', () => {
  let selectedColor = bgColorSelect.value;  
  document.body.style.background = selectedColor;
});

    // ! URL

showURL.addEventListener('click' , () => {
  infoElement.innerHTML += `<p>${window.location.href}</p>`;
});

function updateInfo() {
     infoElement.innerHTML = ` ${screen.width} px x ${screen.height}px`;
}

updateInfo()

