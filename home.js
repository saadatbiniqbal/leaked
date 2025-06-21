import { db } from './firebase.js';
import { ref, onValue } from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js';

document.getElementById('searchBox').addEventListener('input', async function() {
  const val = this.value.toLowerCase();
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '';

  const studentsRef = ref(db, 'students/');
  onValue(studentsRef, (snapshot) => {
    let found = false;
    snapshot.forEach((childSnapshot) => {
      const data = childSnapshot.val();
      if (data.name.toLowerCase().includes(val) || data.psId.toLowerCase().includes(val)) {
        found = true;
        const div = document.createElement('div');
        div.innerHTML = `<h3>${data.name} (${data.psId})</h3><img src='${data.imageUrl}' height='100'>`;
        resultsDiv.appendChild(div);
      }
    });
    document.getElementById('notFound').style.display = found ? 'none' : 'block';
  });
});

function requestData() {
  const name = document.getElementById('reqName').value;
  const id = document.getElementById('reqId').value;
  alert(`This would send to Telegram: Name=${name}, ID=${id}`);
}
