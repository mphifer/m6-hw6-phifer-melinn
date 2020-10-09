////when user hovers over any one of boxes, highlight ALL of boxes
document.getElementById("box-one").addEventListener("mouseover",
  function() {
    document.getElementById("box-one").style.backgroundColor = "#FFFFFF";
  }, false
);

document.getElementById("box-two").addEventListener("mouseover",
  function() {
    document.getElementById("box-two").style.backgroundColor = "#FFFFFF";
  }, false
);

document.getElementById("box-three").addEventListener("mouseover",
  function() {
    document.getElementById("box-three").style.backgroundColor = "#FFFFFF";
  }, false
);


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
