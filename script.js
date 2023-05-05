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
//lets load the chat messages after initialization
function updateChat() {
  let endMessage =
    '<div class="endChat"><p>Are you sure you want to end this conversation?</p><button id="end" onclick="closeChat()">Yes</button><button id="cancel" onclick="continueChat()">No</button></div>';
  chatlog.innerHTML += endMessage;
  chatlog.scrollTop = chatlog.scrollHeight;
}
//function to close the chat
document.getElementById("remove").addEventListener("click", () => {
  const endMessage = document.getElementsByClassName("endChat")[0];
  if (endMessage) {
    chatBoxContainer.classList.add("chatBoxHidden");
    chatButtonContainer.appendChild(startChatBtn);
  }
  updateChat();
});
//function to close the chat
function closeChat() {
  window.close();
}
//function to continue the chat if user clicks on the cancel button
function continueChat() {
  const endMessage = document.getElementsByClassName("endChat")[0];
  if (endMessage) {
    endMessage.remove();
  }
}
//function to start the chat with a welcome message
function welcomeMessage(message) {
  let chatStart = `<div class="start">Chat Started at ${getTime()}</div>`;
  let greetings = '<div class="supportMessage">' + message + "</div>";
  chatlog.innerHTML += chatStart;
  chatlog.innerHTML += greetings;
}
welcomeMessage(
  "Hello, thank you for contacting Shella Trendy. How can we help you? &#128512"
);
//function to update the chat log with the current user message
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
  sendSupportMessage(userInput);
}
//function to send response to the user input
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
//function to get response for the user input based on the input value.
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
    userInput.includes("how are you") ||
    userInput.includes("how are you doing") ||
    userInput.includes("how is the going")
  ) {
    return "I am doing great, thanks for asking.";
  } else if (userInput.includes("bored")) {
    return "I am bored too, maybe we can do something";
  } else if (userInput.includes("name")) {
    return "My name is Don, do you like it?";
  } else if (userInput.includes("whats up") || userInput.includes("sup")) {
    return "Not much, just chatting with you! How about you?";
  } else if (
    userInput.includes("joke") ||
    userInput.includes("make me laugh")
  ) {
    return "Why did the tomato turn red? Because it saw the salad dressing!";
  } else if (
    userInput.includes("what do you like to do") ||
    userInput.includes("hobbies")
  ) {
    return "I love chatting with people and learning new things!";
  } else if (
    userInput.includes("do you have any pets") ||
    userInput.includes("do you like animals")
  ) {
    return "I don't have any pets, but I love dogs!";
  } else if (
    userInput.includes("favorite food") ||
    userInput.includes("what do you like to eat")
  ) {
    return "Have you tried stir fried chicken? It slaps!";
  } else if (
    userInput.includes("favorite movie") ||
    userInput.includes("what do you like to watch")
  ) {
    return "I don't watch movies, but I've heard that The Matrix is pretty cool!";
  } else if (
    userInput.includes("what is the weather like today") ||
    userInput.includes("is it raining outside")
  ) {
    return "It may rain it may snow, who knows";
  } else if (
    userInput.includes("where are you from") ||
    userInput.includes("what is your origin")
  ) {
    return "I guess you could say I'm from the internet!";
  } else if (userInput.includes("help") || userInput.includes("advice")) {
    return "Sure, I'll do my best to help! What do you need assistance with?";
  } else if (
    userInput.includes("what's the meaning of life") ||
    userInput.includes("why are we here")
  ) {
    return "That's a deep question that humans have been pondering for centuries. What do you think the meaning of life is?";
  } else if (
    userInput.includes("favorite celebrity") ||
    userInput.includes("famous people")
  ) {
    return "I don't have a favorite celebrity, but I think it's cool when people use their platform for good!";
  } else if (
    userInput.includes("favorite song") ||
    userInput.includes("music")
  ) {
    return "I like all sorts of genres but countrymusic is my most favorite!";
  } else if (userInput.includes("fun fact") || userInput.includes("trivia")) {
    return printFunFact()
  } else if (
    userInput.includes("can you tell me a fun fact") ||
    userInput.includes("give me some trivia")
  ) {
    return "Did you know that the shortest war in history was between Britain and Zanzibar in 1896? It lasted only 38 minutes!";
  } else if (
    userInput.includes("what is your favorite book") ||
    userInput.includes("do you like reading")
  ) {
    return "This is tough to say, but I like reading novels";
  } else if (
    userInput.includes("what is your favorite season") ||
    userInput.includes("do you like summer or winter")
  ) {
    return "I don't really have a preference, but I've heard that people enjoy different things about each season!";
  } else if (
    userInput.includes("do you believe in ghosts") ||
    userInput.includes("have you ever seen a ghost")
  ) {
    return "Shh! there might be a ghost in here";
  } else if (
    userInput.includes("what's your favorite sport") ||
    userInput.includes("do you like playing games")
  ) {
    return "I like biking and going for hikes!";
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
  } else if (
    userInput.includes("what is your favorite movie") ||
    userInput.includes("do you like watching movies")
  ) {
    return "Avengers Infinity War is a gem to me";
  } else {
    return "Sorry, I don't understand. Please try something else.";
  }
}
//i am trying to give random jokes and fun facts to users

async function getFunFact() {
  const response = await fetch(
    "https://uselessfacts.jsph.pl/random.json?language=en"
  );
  const data = await response.json();
  const funFact = data.text.trim();
  return funFact;
}

async function printFunFact() {
  const funFact = await getFunFact();
  say(funFact);
}
let funFact;
printFunFact();
function say(message) {
  funFact = structuredClone(message);
  return funFact;
}
