// script.js - Handles Google Identity Services credential response and UI updates

// Decode a JWT token (base64url) to extract payload
function parseJwt (token) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
  return JSON.parse(jsonPayload);
}

function handleCredentialResponse(response) {
  // response.credential contains JWT ID token
  const data = parseJwt(response.credential);
  // Show user info
  document.getElementById('user-pic').src = data.picture;
  document.getElementById('user-name').textContent = `Hello, ${data.name}`;
  document.getElementById('user-info').classList.remove('hidden');
  // Hide the Google button
  document.querySelector('.g_id_signin').style.display = 'none';
}

// Sign‑out handler – clears UI and re‑shows Google button
function signOut() {
  document.getElementById('user-info').classList.add('hidden');
  document.querySelector('.g_id_signin').style.display = 'block';
}

// Attach sign‑out click listener after DOM loads
window.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById('signout').addEventListener('click', signOut);
});

// Expose callback to the global scope for Google Identity Services
window.handleCredentialResponse = handleCredentialResponse;
