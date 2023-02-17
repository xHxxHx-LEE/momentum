const imgNum = 5;
const chosenImg = Math.floor(Math.random() * imgNum);

(function paintImg() {
  const img = new Image();
  img.src = `img/${chosenImg}.jpeg`;
  document.body.appendChild(img);
  img.classList.add("backgroundImg");
})();
