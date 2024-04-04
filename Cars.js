const redColor = document.querySelector(".red");
const blackColor = document.querySelector(".black");
const imageCard = document.querySelector(".product-image");
const feedbackBtn = document.querySelector(".feedback");
const blueColor = document.getElementsByClassName("blue");
const cartButton = document.getElementById("button");
const itemTag = document.getElementsByTagName("h3")[0];
const newPrice = document.querySelector(".new-price");
const oldPrice = document.querySelector(".old-price");

const redColor2 = document.querySelector(".red2");
const blackColor2 = document.querySelector(".black2");
const imageCard2 = document.querySelector(".product-image2");
const feedbackBtn2 = document.querySelector(".feedback2");
const blueColor2 = document.getElementsByClassName("blue2");
const cartButton2 = document.getElementById("button2");
const itemTag2 = document.getElementsByTagName("h3")[1];
const newPrice2 = document.querySelector(".new-price2");
const oldPrice2 = document.querySelector(".old-price2");

const redColor3 = document.querySelector(".red3");
const blackColor3 = document.querySelector(".black3");
const imageCard3 = document.querySelector(".product-image3");
const feedbackBtn3 = document.querySelector(".feedback3");
const blueColor3 = document.getElementsByClassName("blue3");
const cartButton3 = document.getElementById("button3");
const itemTag3 = document.getElementsByTagName("h3")[2];
const newPrice3 = document.querySelector(".new-price3");
const oldPrice3 = document.querySelector(".old-price3");

redColor.addEventListener("click", function () {
    cartButton.style.backgroundColor = "red";
    itemTag.style.backgroundColor = "red";
    imageCard.style.backgroundImage = 'url("./Ferrari-458-Italia-RED.jpg")';
    newPrice.textContent = "$160,000";
    oldPrice.textContent = "$190,500";
    feedbackBtn.style.backgroundColor = "red"
});

redColor2.addEventListener("click", function () {
    cartButton2.style.backgroundColor = "red";
    itemTag2.style.backgroundColor = "red";
    imageCard2.style.backgroundImage = 'url("./Red corvette.jpg")';
    newPrice2.textContent = "$47,000";
    oldPrice2.textContent = "$51,500";
    feedbackBtn2.style.backgroundColor = "red"
});

redColor3.addEventListener("click", function () {
    cartButton3.style.backgroundColor = "red";
    itemTag3.style.backgroundColor = "red";
    imageCard3.style.backgroundImage = 'url("./Red viper.jpg")';
    newPrice3.textContent = "$95,000";
    oldPrice3.textContent = "$105,000";
    feedbackBtn3.style.backgroundColor = "red"
});

blueColor[0].addEventListener("click", function () {
    cartButton.style.backgroundColor = "blue";
    itemTag.style.backgroundColor = "blue";
    imageCard.style.backgroundImage = 'url("./ferrari-458-Blue.jpg")';
    newPrice.textContent = "$180,000";
    oldPrice.textContent = "$200,500";
    feedbackBtn.style.backgroundColor = "blue"
});

blueColor2[0].addEventListener("click", function () {
    cartButton2.style.backgroundColor = "blue";
    itemTag2.style.backgroundColor = "blue";
    imageCard2.style.backgroundImage = 'url("./Blue corvette.jpg")';
    newPrice2.textContent = "$45,000";
    oldPrice2.textContent = "$50,000";
    feedbackBtn2.style.backgroundColor = "blue"
});


blueColor3[0].addEventListener("click", function () {
    cartButton3.style.backgroundColor = "blue";
    itemTag3.style.backgroundColor = "blue";
    imageCard3.style.backgroundImage = 'url("./Blue viper.jpg")';
    newPrice3.textContent = "$93,000";
    oldPrice3.textContent = "$99,000";
    feedbackBtn3.style.backgroundColor = "blue"
});

blackColor.addEventListener("click", function () {
    cartButton.style.backgroundColor = "black";
    itemTag.style.backgroundColor = "black";
    imageCard.style.backgroundImage = 'url("./ferrari-458-Black.jpg")';
    feedbackBtn.style.backgroundColor = "black"
    feedbackBtn.style.color = "white"
    newPrice.textContent = "$190,995";
    oldPrice.textContent = "$210,500";
});

blackColor2.addEventListener("click", function () {
    cartButton2.style.backgroundColor = "black";
    itemTag2.style.backgroundColor = "black";
    imageCard2.style.backgroundImage = 'url("./Black corvette.jpg")';
    feedbackBtn2.style.backgroundColor = "black"
    feedbackBtn2.style.color = "white"
    newPrice2.textContent = "$50,000";
    oldPrice2.textContent = "$55,000";
});

blackColor3.addEventListener("click", function () {
    cartButton3.style.backgroundColor = "black";
    itemTag3.style.backgroundColor = "black";
    imageCard3.style.backgroundImage = 'url("./Black viper.jpg")';
    feedbackBtn3.style.backgroundColor = "black"
    feedbackBtn3.style.color = "white"
    newPrice3.textContent = "$98,000";
    oldPrice3.textContent = "$110,000";
});

const cart = () => {
    cartButton.style.display = "none";
    feedbackBtn.style.display = "block";
  };
  cartButton.addEventListener("click", cart);

  const cart2 = () => {
    cartButton2.style.display = "none";
    feedbackBtn2.style.display = "block";
  };
  cartButton2.addEventListener("click", cart2);

  const cart3 = () => {
    cartButton3.style.display = "none";
    feedbackBtn3.style.display = "block";
  };
  cartButton3.addEventListener("click", cart3);

  const feedback = () => {
    cartButton.style.display = "block";
    feedbackBtn.style.display = "none";
  };
  feedbackBtn.addEventListener("click", feedback);

  const feedback2 = () => {
    cartButton2.style.display = "block";
    feedbackBtn2.style.display = "none";
  };
  feedbackBtn2.addEventListener("click", feedback2);
  
  const feedback3 = () => {
    cartButton3.style.display = "block";
    feedbackBtn3.style.display = "none";
  };
  feedbackBtn3.addEventListener("click", feedback3);

    