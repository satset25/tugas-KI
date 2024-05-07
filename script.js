// Encrypt function
function encrypt() {
  const plaintext = document.getElementById('plaintext').value;
  const password = document.getElementById('password').value;

  if (!password) {
      alert('Please enter a password!');
      return;
  }

  // Encrypt plaintext using AES-128 with password
  const ciphertext = CryptoJS.AES.encrypt(plaintext, password).toString();
  document.getElementById('ciphertext').value = ciphertext;
}

// Decrypt function
function decrypt() {
  const ciphertext = document.getElementById('ciphertext').value;
  const password = document.getElementById('password').value;

  if (!password) {
      alert('Please enter a password!');
      return;
  }

  try {
      // Decrypt ciphertext using AES-128 with password
      const bytes = CryptoJS.AES.decrypt(ciphertext, password);
      const plaintext = bytes.toString(CryptoJS.enc.Utf8);
      document.getElementById('plaintext').value = plaintext;
  } catch (err) {
      alert('Invalid password or ciphertext!');
  }
}
