// hovers over any box, highlight all of the boxes with a different background color
var changeBackground = document.querySelector("#boxes-section");

changeBackground.addEventListener('mouseenter', newColor)
function newColor () {
  document.getElementById("box-one").style.backgroundColor = "pink";
  document.getElementById("box-two").style.backgroundColor ="pink";
  document.getElementById("box-three").style.backgroundColor = "pink";
};

changeBackground.addEventListener('mouseleave', oldColor)
function oldColor () {
    document.getElementById('box-one').style.backgroundColor = "#FCFF00";
    document.getElementById('box-two').style.backgroundColor = '#57FFC9';
    document.getElementById('box-three').style.backgroundColor = '#A5FF01';
};

// when a user clicks box #1, message appears with new DOM node
var newPara = document.createElement("p")
newPara.innerHTML ='Oooh - so close, but no cigar'
document.getElementById("box-one").addEventListener("click",
  function() {
    document.getElementById("box-one").appendChild(newPara);
  }, false
);

// when a user clicks box #2, message appears with new DOM node
var newAlert = document.createElement("p")
newAlert.innerHTML ='DING DING DING - We have a winner!'
document.getElementById("box-two").addEventListener("click",
  function() {
    document.getElementById("box-two").appendChild(newAlert);
  }, false
);

// when a user clicks box #3, message appears with new DOM node
var newMessage = document.createElement("p")
newMessage.innerHTML ='Oops, butter luck next time'
document.getElementById("box-three").addEventListener("click",
  function() {
    document.getElementById("box-three").appendChild(newMessage);
  }, false
);


//any one of the three boxes are clicked,  button that says “Start Over” with an href of “#” appear somewhere on the page by removing a hidden class

document.getElementById("box-one").addEventListener("click", addClassName);
function addClassName() {
var element = document.getElementsByClassName("button");
element.classList.remove("button");
}
