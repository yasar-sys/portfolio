// simple UI scripts
document.getElementById('year').textContent = new Date().getFullYear();

// contact form submission (optional nice UX)
const form = document.getElementById('contactForm');
if(form){
  form.addEventListener('submit', (e) => {
    // formspree will handle actual sending; we show a small UI change
    setTimeout(()=> {
      alert('Message sent — Thank you! I will reply soon.');
    }, 300);
  });
}

