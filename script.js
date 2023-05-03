function getTime(){
  let date = new Date();
  let day = date.getDate();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  if(hours<10){
    hours = "0" + hours;
  }
  if(minutes<10){
    minutes = "0" + minutes;
  }
  let time = hours + ":" + minutes;
  return time;
}
let chatlog= document.getElementById("chatlog")

function welcomeMessage(message){
 let chatStart=`<div class="start">Chat Started at ${getTime()}</div>`
 let greetings='<div class="supportMessage">'+message+'</div>';
 chatlog.innerHTML+=chatStart
 chatlog.innerHTML+=greetings
 }
welcomeMessage("Hello, thank you for contacting Shella Trendy. How can we help you?");

function sendUserInput(event) {
  if (event) {
    event.preventDefault();
  }

  let userInput = document.getElementById("userInput").value.trim();

  if (userInput.length === 0) {
    return;
  }

  document.getElementById("userInput").value = "";
  let userMessage = `<div class='userMessage'> ${userInput} <em>${getTime()}</em> </div>`;
  document.getElementById("chatlog").innerHTML += userMessage;
  setTimeout(sendSupportMessage (userInput), 1000);
}

function sendSupportMessage(userInput) {
  if(userInput.length === 0) {
    return;
  }
  let supportMessage = "";
  supportMessage = `<div class='supportMessage'>Thanks for your message! Our support team will get back to you shortly!<em> ${getTime()}</em></div>`;
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
  document.getElementById("chat").addEventListener("click",()=> 
    sendUserInput()
);
});

