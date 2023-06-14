let input = document.getElementById("input-text");
let messageContainer = document.querySelector(".message-container");
let answerContainer = document.querySelector(".answer-container");



input.addEventListener("keyup", function(event) {
    if(event.keyCode === 13 && input.value != "") {

            enterText();
        }
    
});

function enterText(){    
    let newMessage = document.createElement("p");
    newMessage.innerHTML = input.value;
    messageContainer.insertBefore(newMessage, messageContainer.firstChild);
    input.value = "";

    
    if(input.value !== questions) {
        let chatText = document.createElement("p");
        chatText.innerHTML = "Was meinst du mit '" + newMessage.innerHTML + "'?";
        answerContainer.insertBefore(chatText, answerContainer.firstChild); 
    } 


    

    
        if(newMessage.innerHTML === questions[0].grüße) {

            let chatText = document.createElement("p");
            chatText.innerHTML = answers[0].name;
            answerContainer.insertBefore(chatText, answerContainer.firstChild); 
        }
    
        if(newMessage.innerHTML === questions[1].info) {
    
            let chatText = document.createElement("p");
            chatText.innerHTML = answers[1].info;
            answerContainer.insertBefore(chatText, answerContainer.firstChild); 
        }

        if(newMessage.innerHTML === questions[2].mathe) {
    
            let chatText = document.createElement("p");
            chatText.innerHTML = answers[2].mathe;
            answerContainer.insertBefore(chatText, answerContainer.firstChild); 
        }

        if(newMessage.innerHTML === questions[3].bewohner) {
    
            let chatText = document.createElement("p");
            chatText.innerHTML = answers[3].bewohner;
            answerContainer.insertBefore(chatText, answerContainer.firstChild); 
        }

        if(newMessage.innerHTML === questions[4].rezept) {
    
            let chatText = document.createElement("p");
            chatText.innerHTML = answers[4].rezept;
            answerContainer.insertBefore(chatText, answerContainer.firstChild); 
        }

    }



let emojiButton = document.getElementById("emoji-button");
let emojiWindow = document.querySelector(".emoji-pop-up");
let clicked = false;
emojiButton.addEventListener("click", function() {
    emojiWindow.classList.toggle("active");
    
    if(clicked === false) {
        // emojiWindow.classList.toggle("slide-top");
        emojiWindow.classList.add("slide-top");
        emojiWindow.classList.remove("slide-out-bottom");
        clicked = true;
    }
    else {
        // emojiWindow.classList.toggle("slide-out-bottom");
        emojiWindow.classList.add("slide-out-bottom");
        emojiWindow.classList.remove("slide-top");
        clicked = false;
    }
        
})
// CLICKING OUTSIDE TO CLOSE


document.addEventListener("click", function(e) {
    const isClickedInside = emojiButton.contains(e.target) || emojiWindow.contains(e.target);
    if (!isClickedInside) {
        //emojiWindow.classList.remove("active");
        emojiWindow.classList.remove("slide-top");
        emojiWindow.classList.add("slide-out-bottom");
        clicked = false;
    }
});

// API KEY
const emojiList = document.getElementById("emojiList");

fetch("https://emoji-api.com/emojis?access_key=80d804dd166094752de9832d818b53252525") // FAKE API WEGEN SCHUTZ
    .then(res => res.json())
    .then(data => loadEmoji(data))

    function loadEmoji(data) {
        data.forEach(emoji => {
           let li = document.createElement("li");
           li.setAttribute("emoji-name", emoji.slug);
           li.textContent = emoji.character;
           emojiList.appendChild(li);
           li.addEventListener("click", function() {
            input.value = input.value + this.textContent;
           })
        })
    }



// ARRAY Fragen & Antworten

let answers = [
    {name:"Hallo, mein Name ist ChaTee."},
    {info:"Ich bin eine KI, die deine Fragen beantwortet"},
    {mathe: "Die Antwort lautet 4"},
    {bewohner: "Es leben zurzeit 80 Millionen Menschen in Deutschland"},
    {rezept: "Hier sind die Zutataten: 125 g Mehl, 1 TL Backpulver, 1 EL Zucker, 1 Prise Salz, 1 Ei, 125 ml Milch, 1 TL Vanilleextrakt, 30 g geschmolzene Butter"}
];

let questions = [
    {grüße: "Hallo"},
    {info: "Wer bist du?"},
    {mathe: "Was ist 2+2?"},
    {bewohner: "Wie viele Menschen wohnen in Deutschland?"},
    {rezept:"Was sind die Zutaten für Waffeln?"}
]

let sendButton = document.querySelector(".send-message");

sendButton.addEventListener("click", () => {
    if(input.value != "") {
        enterText();
    }
    
    
});

// EMOJI SUCHE
let inputEmoji = document.getElementById("emoji-input");
inputEmoji.addEventListener("keyup", (event) => {
    let value = event.target.value;
    let emojiList = document.querySelectorAll("#emojiList li");

    emojiList.forEach(emoji => {
        if(emoji.getAttribute("emoji-name").toLowerCase().includes(value)) {
            emoji.style.display = "flex";
        }
        else {
            emoji.style.display = "none"
        }
    })
    
    if(event.keyCode === 13) {
        inputEmoji.value = "";
    }
})









