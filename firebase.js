// Firebase SDK（Firestoreだけ使う）
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// ★ あなたのFirebase設定（そのまま）
const firebaseConfig = {
  apiKey: "AIzaSyALFENQ3JKa5DX9z8ukWKMQM5vlpY0x8w4",
  authDomain: "gacha-5e317.firebaseapp.com",
  projectId: "gacha-5e317",
  storageBucket: "gacha-5e317.firebasestorage.app",
  messagingSenderId: "12740581144",
  appId: "1:12740581144:web:a52979c66b347f0a51b06d",
  measurementId: "G-1PLW1Q1H3X"
};

// 初期化
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 全ガチャ取得
export async function loadGachas() {
  const snap = await getDocs(collection(db, "gachas"));
  return snap.docs.map(d => d.data());
}

// ガチャ保存（追加・更新）
export async function saveGacha(gacha) {
  await setDoc(doc(db, "gachas", gacha.id), gacha);
}
