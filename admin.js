import { auth, db, storage } from './firebase.js';
import { ref as dbRef, set } from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js';
import { ref as sRef, uploadBytes, getDownloadURL } from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-storage.js';

auth.onAuthStateChanged(user => {
  if (!user) {
    alert('You must be logged in as admin.');
    window.location.href = 'index.html';
  }
});

async function uploadData() {
  const name = document.getElementById('name').value;
  const psId = document.getElementById('psId').value;
  const file = document.getElementById('photo').files[0];

  const storageRef = sRef(storage, 'images/' + file.name);
  await uploadBytes(storageRef, file);
  const imageUrl = await getDownloadURL(storageRef);

  const studentRef = dbRef(db, 'students/' + psId);
  await set(studentRef, { name, psId, imageUrl });
  document.getElementById('status').innerText = 'Uploaded successfully';
}
