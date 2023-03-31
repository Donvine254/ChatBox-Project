function autoGrow() {
    var element = document.getElementById("userInput");
    element.style.height = "5px";
    element.style.height = (element.scrollHeight)+"px";
  }
  
  function sendUserInput(event) {
    if (event) {
      event.preventDefault();
    }
  
    var userInput = document.getElementById("userInput").value.trim();
  
    if (userInput.length === 0) {
      return;
    }
  
    document.getElementById("userInput").value = "";
    var userMessage = "<div class='userMessage'>" + userInput + "</div>";
    document.getElementById("chatlog").innerHTML += userMessage;
    setTimeout(sendSupportMessage, 1000);
  }
  
  function sendSupportMessage() {
    var supportMessage = "<div class='supportMessage'>Thanks for your message! Our support team will get back to you shortly.</div>";
    document.getElementById("chatlog").innerHTML += supportMessage;
    document.getElementById("userInput").style.height = "50px";
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    var userInput = document.getElementById("userInput");
    userInput.addEventListener("keydown", function(event) {
      if (event.keyCode === 13) {
        sendUserInput(event);
      }
    });
  });
  