function autoGrow() {
  let element = document.getElementById("userInput");
  element.style.height = "5px";
  element.style.height = element.scrollHeight + "px";
}

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
  var userInput = document.getElementById("userInput").value.toLowerCase().trim();
  var supportMessage = "";

  switch (true) {
    case userInput.includes("hello") || userInput.includes("hi"):
      supportMessage = "<div class='supportMessage'>Hello! How can we assist you today?</div>";
      break;
    case userInput.includes("location") || userInput.includes("located"):
      supportMessage = "<div class='supportMessage'>We are located in Nairobi, Kenya.</div>";
      break;
    case userInput.includes("services") || userInput.includes("what do you offer"):
      supportMessage = "<div class='supportMessage'>We offer web design, automation, web hosting, domain names, social media management, search engine optimization, and logo design.</div>";
      break;
    case userInput.includes("open") || userInput.includes("available"):
      supportMessage = "<div class='supportMessage'>We are open from Monday to Friday, 8 AM to 4 PM.</div>";
      break;
    default:
      supportMessage = "<div class='supportMessage'>Thanks for your message! Our support team will get back to you shortly.</div>";
      break;
  }

  document.getElementById("chatlog").innerHTML += supportMessage;
  document.getElementById("userInput").style.height = "50px";
}

document.addEventListener("DOMContentLoaded", function () {
  let userInput = document.getElementById("userInput");
  userInput.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
      sendUserInput(event);
    }
  });
});
