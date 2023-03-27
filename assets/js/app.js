const chatButton = document.querySelector('.chatbox__button');
const chatContent = document.querySelector('.chatbox__support');
const icons = {
    isClicked: '<img src="./assets/chatbox-icon.png" width="70" />',
    isNotClicked: '<img src="./assets/chatbox-icon.png" width="70" />',
}
const chatbox = new InteractiveChatbox(chatButton, chatContent, icons);
chatbox.display();
chatbox.toggleIcon(false, chatButton);

var chatbotContainer = document.getElementById("chatbot-container");
var scrollTopButton = document.getElementById("scroll-top-button");

scrollTopButton.addEventListener("click", function() {
  chatbotContainer.classList.toggle("active");
});