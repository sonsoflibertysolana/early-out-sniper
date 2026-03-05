// =====================================================
// ALLOWED USERS — Edit this file to add/remove access
// =====================================================
// Format: { username: "their_username", hash: "sha256_hash" }
//
// To generate a hash for a new user:
//   1. Open the app and log in as admin
//   2. Go to the ADMIN tab
//   3. Enter their username + password → copy the hash
//   4. Add it here and push to GitHub
//
// Or run in any browser console:
//   crypto.subtle.digest('SHA-256', new TextEncoder().encode('username:password'))
//     .then(b => console.log(Array.from(new Uint8Array(b)).map(x=>x.toString(16).padStart(2,'0')).join('')))
//
const ALLOWED_USERS = [
  { username: "admin", hash: "620fd759d370c40d9c245b765cf48ebf63b4fb11b8c6adfd2ce6c6c9aac2be78" },

  // Example: { username: "john", hash: "abc123..." },
];
