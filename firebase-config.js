// Gemeinsame Firebase-Konfiguration für index.html (Haupt-App) und bestellen.html (Kollegen-App).
// Diese Werte sind nicht geheim: Sie stehen in jeder Firebase-Web-App öffentlich im Quelltext.
// Geschützt werden die Daten durch die Anmeldung und die Regeln in firestore.rules.
export const firebaseConfig = {
  apiKey: 'AIzaSyD9odKU-Zb3rZ592paSxMx-LofUaJe9Xjo',
  authDomain: 'kaffeekasse-bce3f.firebaseapp.com',
  projectId: 'kaffeekasse-bce3f',
  storageBucket: 'kaffeekasse-bce3f.firebasestorage.app',
  messagingSenderId: '603762849354',
  appId: '1:603762849354:web:852375239bcbbdf4ca98b3',
};

// Nur für Tests auf dem eigenen Rechner (http://127.0.0.1/…?emulator): verbindet mit dem Firebase-Emulator
export const useEmulator = ['localhost', '127.0.0.1'].includes(location.hostname)
  && new URLSearchParams(location.search).has('emulator');