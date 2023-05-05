function getTime() {
  let date = new Date();
  let day = date.getDate();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  let time = hours + ":" + minutes;
  return time;
}
let chatlog = document.getElementById("chatlog");

function welcomeMessage(message) {
  let chatStart = `<div class="start">Chat Started at ${getTime()}</div>`;
  let greetings = '<div class="supportMessage">' + message + "</div>";
  chatlog.innerHTML += chatStart;
  chatlog.innerHTML += greetings;
}
welcomeMessage(
  "Hello, thank you for contacting Shella Trendy. How can we help you? &#128512"
);

function sendUserInput(event) {
  if (event) {
    event.preventDefault();
  }

  let userInput = document.getElementById("userInput").value.trim();

  if (userInput.length === 0) {
    return;
  }

  document.getElementById("userInput").value = "";
  let userMessage = `<div class='userMessage'> <p>&nbsp;&nbsp${getTime()}</p> ${userInput}</div>`;
  document.getElementById("chatlog").innerHTML += userMessage;
  setTimeout(sendSupportMessage(userInput), 1000);
}

function sendSupportMessage(userInput) {
  if (userInput.length === 0) {
    return;
  }
  let supportMessage = "";
  supportMessage = `<div class='supportMessage'><p>${getTime()}</p><br>${getResponse(
    userInput
  )}</div>`;
  document.getElementById("chatlog").innerHTML += supportMessage;
  document.getElementById("userInput").style.height = "50px";
}

document.addEventListener("DOMContentLoaded", function () {
  let userInput = document.getElementById("userInput");
  userInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      sendUserInput(event);
      chatlog.scrollTop = chatlog.scrollHeight;
    }
  });
  document
    .getElementById("chat")
    .addEventListener("click", () => sendUserInput());
});
function getResponse(userInput) {
  userInput = userInput.toLowerCase();
  if (userInput.length === 0) {
    return;
  } else if (
    userInput.includes("hello") ||
    userInput.includes("hi") ||
    userInput.includes("hey")
  ) {
    return "Hello, how are you?";
  } else if (userInput.includes("goodbye") || userInput.includes("bye")) {
    return "Goodbye, thank you for contacting Shella Trendy &#128525";
  } else if (
    userInput == "how are you" ||
    userInput == "how are you doing" ||
    userInput == "how is the going"
  ) {
    return "I am doing fine, how about you?";
  } else if (userInput.includes("bored")) {
    return "I am bored too, maybe we can do something";
  } else if (userInput.includes("name")) {
    return "My name is Don, what is your name?";
  } else if (userInput.includes("email")) {
    return "You can send me an email at shellatrendy@gmail.com";
  } else if (userInput.includes("buy") && userInput.includes("deliver")) {
    return "You can place the order on shellatrendy.com and have it delivered to your location";
  } else if (
    userInput.includes("product") ||
    userInput.includes("products") ||
    userInput.includes("sell") ||
    userInput.includes("selling") ||
    userInput.includes("sells") ||
    userInput.includes("buy")
  ) {
    return "we deal in clothes, bags and shoes";
  } else if (userInput.includes("delivery") || userInput.includes("deliver")) {
    return "We deliver countrywide. Delivery is free within Nairobi";
  } else if (
    userInput.includes("time") ||
    userInput.includes("open") ||
    userInput.includes("close")
  ) {
    return "we are open at 7am and close at 6pm from monday to saturday. You can also shop online any time";
  } else if (userInput.includes("location") || userInput.includes("located")) {
    return "we are located at 123 Kimathi Street Nairobi";
  } else if (userInput.includes("thanks") || userInput.includes("thank you")) {
    return "Welcome, Always a pleasure to talk with you &#128151";
  } else if (userInput.includes("end chat")) {
    return "As you wish sire!";
  } else {
    return "Sorry, I don't understand. Please try something else.";
  }
}
function updateChat() {
  let endMessage =
    '<div class="endChat"><p>Are you sure you want to end this conversation?</p><button id="end" onclick="closeChat()">Yes</button><button id="cancel" onclick="continueChat()">No</button></div>';
  chatlog.innerHTML += endMessage;
  chatlog.scrollTop = chatlog.scrollHeight;
}
const closeChatbtn = document.getElementById("remove");
closeChatbtn.addEventListener("click", updateChat)
function closeChat() {
 window.close()
}
function continueChat() {
  const endMessage = document.getElementsByClassName("endChat")[0];
  if (endMessage) {
    endMessage.remove();
  }
}

