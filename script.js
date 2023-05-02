
function sendUserInput(event) {
  if (event) {
    event.preventDefault();
  }

  let userInput = document.getElementById("userInput").value.trim();

  if (userInput.length === 0) {
    return;
  }

  document.getElementById("userInput").value = "";
  let userMessage = "<div class='userMessage'>" + userInput + "</div>";
  document.getElementById("chatlog").innerHTML += userMessage;
  setTimeout(sendSupportMessage, 1000);
}

function sendSupportMessage() {
  let userInput = document.getElementById("userInput");
  let supportMessage = "";
  console.log(userInput.value.toLowerCase().trim());
  supportMessage = "<div class='supportMessage'>Thanks for your message! Our support team will get back to you shortly.</div>";
  document.getElementById("chatlog").innerHTML += supportMessage;
  document.getElementById("userInput").style.height = "50px";
  }

document.addEventListener("DOMContentLoaded", function () {
  let userInput = document.getElementById("userInput");
  userInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      sendUserInput(event);
    }
  });
  const chatBtn = document.getElementById("chat");
  chatBtn.addEventListener("click", function () {
    sendUserInput();
  });
});