importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCMVojNde1zUs8pNn7Lkw5oxZb2hbhGAq0",
  authDomain: "manque-trop-fort.firebaseapp.com",
  projectId: "manque-trop-fort",
  storageBucket: "manque-trop-fort.firebasestorage.app",
  messagingSenderId: "784351605587",
  appId: "1:784351605587:web:8655e0beea44eb9be7edb4"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = payload.notification ? payload.notification.title : "Love Tracker Duo 💖";
  const options = {
    body: payload.notification ? payload.notification.body : "Nouvelle pensée reçue !",
    icon: "https://cdn-icons-png.flaticon.com/512/2589/2589175.png",
    badge: "https://cdn-icons-png.flaticon.com/512/2589/2589175.png"
  };

  self.registration.showNotification(title, options);
});
