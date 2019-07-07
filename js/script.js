var popUp = document.querySelector(".modal-window");
var widget = document.querySelector(".promo-widget");


if (popUp) {
  var activeButton = document.querySelector(".write-to-us");
  var closeButton = popUp.querySelector(".modal-close");

  activeButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    popUp.classList.add("modal-show");
  });

  closeButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    popUp.classList.remove("modal-show");
  });
}

if (widget) {
  var slideList = widget.querySelectorAll(".promo-slide");
  var btnCircleList = widget.querySelectorAll(".widget-button");
  var currentSlide = 0;
  var currentCircle = 0;

  var getElement = function(number) {
    var element = btnCircleList[number].addEventListener("click", function(evt) {
      evt.preventDefault();
      if (!(btnCircleList[number].classList.contains("widget-button-active"))) {
        btnCircleList[currentCircle].classList.remove("widget-button-active");
        slideList[currentSlide].classList.remove("promo-slide-active");
        currentCircle = number;
        currentSlide = number;
        btnCircleList[currentCircle].classList.add("widget-button-active");
        slideList[currentSlide].classList.add("promo-slide-active");
      }

    });

    return element;
  }

  for (var j = 0; j < btnCircleList.length; j++) {
    getElement(j);
  }

}
