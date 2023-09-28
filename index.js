import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import { getFirestore, addDoc, doc , orderBy, collection, getDocs, query } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js'
const firebaseConfig = {
    apiKey: "AIzaSyBvRLmT9k5vpsBxHtapSEEcQUYHuzPT0_E",
    authDomain: "chatapp-cd849.firebaseapp.com",
    projectId: "chatapp-cd849",
    storageBucket: "chatapp-cd849.appspot.com",
    messagingSenderId: "736612862712",
    appId: "1:736612862712:web:b856113213aeb505f7090d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
document.getElementById("send-btn").onclick = async function (e) {
    e.preventDefault()
    const docRef = await addDoc(collection(db, "message"), {
        message: document.getElementById('message-input').value,
    });
    messageGet();
};

const messageGet = async function () {
    try {
        const querySnapshot = await getDocs(collection(db, "message"),orderBy("time", "asc"));
        let messages = "";
        querySnapshot.forEach((doc) => {
            const message = doc.data().message;
            const messageDiv = `<div class="message">
                <p>${message}</p>
            </div>`;
            messages = messages + messageDiv;
            // messages = messages.orderBy("timestamp", "asc");
        });
        document.getElementById("msgs").innerHTML = messages;
    } catch (error) {
        console.error("Error fetching messages:", error);
    }
};

window.onmessage = messageGet();
const btn = document.getElementById("send-btn");
btn.addEventListener("click", function handleClick(event) {
    event.preventDefault();
    const msgin = document.getElementById("message-input");
    msgin.value = "";
});
