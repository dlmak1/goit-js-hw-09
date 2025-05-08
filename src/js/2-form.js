const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  formData = JSON.parse(savedData);
  form.elements.email.value = formData.email || '';
  form.elements.message.value = formData.message || '';
}

form.addEventListener('input', (event) => {
  if (event.target.name === 'email' || event.target.name === 'message') {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const { email, message } = formData;

  if (!email.trim() || !message.trim()) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);
    
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = { email: '', message: '' };
});
