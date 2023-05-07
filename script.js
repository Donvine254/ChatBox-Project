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
chatlog.scrollTop = chatlog.scrollHeight;
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
function getResponse(userInput) {
  userInput = userInput.toLowerCase();
  if (userInput.length === 0) {
    return;
  }
  for (const [key, value] of Object.entries(responses)) {
    if (userInput.includes(key)) {
      return value;
    }
  }
  return "Sorry, I didn't understand what you said.";
}
//provide response data as an object
let responses = {
  hello: "Hello, how are you?",
  hi: "Hello, how are you?",
  hey: "Hello, how are you?",
  goodbye: "Goodbye, thank you for contacting Shella Trendy &#128525",
  bye: "Goodbye, thank you for contacting Shella Trendy &#128525",
  "how are you": "I am doing great, thanks for asking.",
  "how are you doing": "I am doing great, thanks for asking.",
  "how is the going": "I am doing great, thanks for asking.",
  bored: "I am bored too, maybe we can do something",
  name: "My name is Don, do you like it?",
  "whats up": "Not much, just chatting with you! How about you?",
  sup: "Not much, just chatting with you! How about you?",
  joke: "Why did the tomato turn red? Because it saw the salad dressing!",
  "make me laugh":
    "Why did the tomato turn red? Because it saw the salad dressing!",
  "what do you like to do":
    "I love chatting with people and learning new things!",
  hobbies: "I love chatting with people and learning new things!",
  "do you have any pets": "I don't have any pets, but I love dogs!",
  "do you like animals": "I don't have any pets, but I love dogs!",
  "favorite food": "Have you tried stir fried chicken? It slaps!",
  "what do you like to eat": "Have you tried stir fried chicken? It slaps!",
  "favorite movie":
    "I don't watch movies, but I've heard that The Matrix is pretty cool!",
  "what do you like to watch":
    "I don't watch movies, but I've heard that The Matrix is pretty cool!",
  "what is the weather like today": "It may rain it may snow, who knows",
  "is it raining outside": "It may rain it may snow, who knows",
  "where are you from": "I guess you could say I'm from the internet!",
  "what is your origin": "I guess you could say I'm from the internet!",
  help: "Sure, I'll do my best to help! What do you need assistance with?",
  advice: "Sure, I'll do my best to help! What do you need assistance with?",
  "what's the meaning of life":
    "That's a deep question that humans have been pondering for centuries. What do you think the meaning of life is?",
  "why are we here":
    "That's a deep question that humans have been pondering for centuries. What do you think the meaning of life is?",
  "favorite celebrity":
    "I don't have a favorite celebrity, but I think it's cool when people use their platform for good!",
  "famous people":
    "I don't have a favorite celebrity, but I think it's cool when people use their platform for good!",
  "favorite song":
    "I like all sorts of genres but country music is my most favorite!",
  music: "I like all sorts of genres but country music is my most favorite!",
  "fun fact":
    "Did you know that the shortest war in history was between Britain and Zanzibar in 1896? It lasted only 38 minutes!",
  trivia:
    "Did you know that the shortest war in history was between Britain and Zanzibar in 1896? It lasted only 38 minutes!",
  "what is your favorite book":
    "This is tough to say, but I like reading novels",
  "do you like reading": "This is tough to say, but I like reading novels",
  "what is your favorite season":
    "I don't really have a preference, but I've heard that people enjoy different things about each season!",
  "do you like summer or winter":
    "I don't really have a preference, but I've heard that people enjoy different things about each season!",
  "do you believe in ghosts": "Shh! there might be a ghost in here",
  "have you ever seen a ghost": "Shh! there might be a ghost in here",
  "what's your favorite sport": "I like biking and going for hikes!",
  "do you like playing games": "I like biking and going for hikes!",
  email: "You can send me an email at shellatrendy@gmail.com",
  "buy and deliver":
    "You can place the order on shellatrendy.com and have it delivered to your location",
  product: "we deal in clothes, bags and shoes",
  products: "we deal in clothes, bags and shoes",
  sell: "we deal in clothes, bags and shoes",
  selling: "we deal in clothes, bags and shoes",
  sells: "we deal in clothes, bags and shoes",
  buy: "we deal in clothes, bags and shoes",
  delivery: "We deliver countrywide. Delivery is free within Nairobi",
  deliver: "We deliver countrywide. Delivery is free within Nairobi",
  time: "we are open at 7am and close at 6pm from monday to saturday. You can also shop online any time",
  open: "we are open at 7am and close at 6pm from monday to saturday. You can also shop online any time",
  close:
    "we are open at 7am and close at 6pm from monday to saturday. You can also shop online any time",
  location: "we are located at 123 Kimathi Street Nairobi",
  located: "we are located at 123 Kimathi Street Nairobi",
  thanks: "Welcome, Always a pleasure to talk with you &#128151",
  "thank you": "Welcome, Always a pleasure to talk with you &#128151",
  "what is your favorite movie": "Avengers Infinity War is a gem to me",
  "do you like watching movies": "Avengers Infinity War is a gem to me",
  default: "Sorry, I don't understand. Please try something else.",
};
