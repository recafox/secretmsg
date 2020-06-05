const { hash } = window.location;
const msg = atob(hash.replace('#', ''));
if (msg) {
  document.getElementById('msg-form').classList.add('hide');
  document.getElementById('msg-display').classList.remove('hide');
  document.querySelector('h1').innerHTML = msg;
}

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const msgForm = document.getElementById('msg-form');
  const linkForm = document.getElementById('link-form');
  msgForm.classList.add('hide');
  linkForm.classList.remove('hide');
  const input = document.getElementById('msg-input');
  const encrypted = btoa(input.value);
  const linkInput = document.querySelector('#link-input');
  linkInput.value = `${window.location}#${encrypted}`;
  linkInput.select();
  
})