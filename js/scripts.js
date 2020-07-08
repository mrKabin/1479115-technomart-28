// Popup of feedback 

var writeUs = document.querySelector(".write-us");
var formPopup = document.querySelector(".form-popup");
var popupClose = document.querySelector(".button-close");
var formTextarea = document.querySelector(".form-textarea");
var writeUsForm = document.querySelector(".write-us-form");
var writeUsUsername = document.querySelector(".write-us-username");
var writeUsEmail = document.querySelector(".write-us-email");

var isStorageSupport = true;
var storage = "";

if (writeUs) {
  try {
    storage = localStorage.getItem("username");
  } 
  catch (err) {
    isStorageSupport = false;
  }

  writeUs.addEventListener("click", function (evt) {
    evt.preventDefault ();
    formPopup.classList.add("popup-show");

    if (storage) {
      writeUsUsername.value = storage;
      writeUsEmail.focus()
    } 
    else {
      writeUsUsername.focus()
    }
  });

  popupClose.addEventListener("click", function (evt) {
    evt.preventDefault ();
    formPopup.classList.remove("popup-show");
    formPopup.classList.remove("popup-error");
  });

  writeUsForm.addEventListener("submit", function (evt) {
    if (!writeUsUsername.value || !writeUsEmail.value) {
      evt.preventDefault ();
      formPopup.classList.remove("popup-error");
      formPopup.offsetWidth = formPopup.offsetWidth;
      formPopup.classList.add("popup-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("username", writeUsUsername.value);
      }
    }
  });

  window.addEventListener("keydown", function (evt)  {
    if (evt.keyCode === 27) {
      if (formPopup.classList.contains("popup-show")) {
        evt.preventDefault();
        formPopup.classList.remove("popup-show");
        formPopup.classList.remove("popup-error");
      }
    }
  });

}

// Popup of shipping cart 

var purchaseButtons = document.querySelectorAll(".item-purchase-btn");
var popupBasket = document.querySelector(".popup-basket");
var basketClose = document.querySelector(".basket-close");

if (popupBasket) {
  for (let purchaseButton of purchaseButtons) {
    purchaseButton.addEventListener("click", function (evt) {
      evt.preventDefault();
      popupBasket.classList.add("popup-show");
    })
  };

  basketClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupBasket.classList.remove("popup-show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popupBasket.classList.contains("popup-show")) {
        evt.preventDefault();
        popupBasket.classList.remove("popup-show");
      }
    }
  });

};

// Popup of map 

var mapLink = document.querySelector(".map-link");
var mapPopup = document.querySelector(".map-popup");
var mapClose = document.querySelector(".map-close");

if (mapPopup) {
  mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("popup-show");
  });

  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("popup-show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (mapPopup.classList.contains("popup-show")) {
        evt.preventDefault();
        mapPopup.classList.remove("popup-show");
      }
    }
  });

};