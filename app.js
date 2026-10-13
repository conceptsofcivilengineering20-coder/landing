// NirmanX - Simple Static Page Script
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');

  if (form && status) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('name').value.trim();
      status.textContent = `Thank you, ${name}! Your inquiry has been received. We will contact you shortly.`;
      status.className = 'form-status success';
      
      form.reset();
      
      setTimeout(() => {
        status.textContent = '';
      }, 6000);
    });
  }
});
