
function getRandomColor() {
    const letters = "0123456789ABCDEF";
  
    let color = "#";
  
    for (let i = 0; i < 6; i++) {
      let randomIndex = Math.floor(Math.random() * 16);
      color += letters[randomIndex];
    }
    return color;
  }
  
  const button = document.getElementById("colorBtn");
  
  button.addEventListener("click", function () {
    let newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
  });
  