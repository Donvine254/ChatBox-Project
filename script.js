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
  let userMessage = `<div class='userMessage'> <p>${getTime()}</p> ${userInput}</div>`;
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
  } else if (userInput.includes("hello") || userInput.includes("hi")) {
    return "Hello, how are you?";
  } else if (userInput.includes("goodbye") || userInput.includes("bye")) {
    return "Goodbye, thank you for contacting Shella Trendy &#128525";
  } else if (
    userInput == "how are you" ||
    userInput == "how are you doing" ||
    userInput == "how is the going"
  ) {
    return "I am doing fine, how about you?";
  } else if (userInput.includes("name")) {
    return "My name is Don, what is your name?";
  } else if (
    userInput == "what is your favorite color" ||
    userInput == "what is your favorite color?"
  ) {
    return "My favorite color is blue";
  } else if (
    userInput == "what is your location" ||
    userInput == "where are you located"
  ) {
    return "We are located at 123 Kimathi Street Nairobi?";
  } else if (
    userInput == "what products do you sell" ||
    userInput == "what products are available" ||
    userInput == "what can i buy"
  ) {
    return "we deal in clothes, bags and shoes";
  } else if (
    userInput == "what time do you close" ||
    userInput == "what time do you open?" ||
    userInput == "are you open"
  ) {
    return "we are open at 7am and close at 6pm from monday to saturday. You can also shop online any time";
  } else if (userInput.includes("location") || userInput.includes("located")) {
    return "we are located at 123 Kimathi Street Nairobi";
  } 
  else if (userInput.includes("thanks")||userInput.includes("thank you")) {
    return "Welcome, Always a pleasure to talk with you &#128151";
  }
  else {
    return "Sorry, I don't understand. Please try something else.";
  }
}
