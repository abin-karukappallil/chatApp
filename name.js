import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import { getFirestore, addDoc, collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js'

const firebaseConfig = {
    apiKey: "AIzaSyBvRLmT9k5vpsBxHtapSEEcQUYHuzPT0_E",
    authDomain: "chatapp-cd849.firebaseapp.com",
    projectId: "chatapp-cd849",
    storageBucket: "chatapp-cd849.appspot.com",
    messagingSenderId: "736612862712",
    appId: "1:736612862712:web:b856113213aeb505f7090d"
  };  
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
    document.getElementById("send-name").onclick = async function (e) {
        e.preventDefaul();  
            const docRef = await addDoc(collection(db, "name"), {
              name: document.getElementById("names").value,    
            });
            console.log("Document written with ID: ", docRef.id);
    };
    