
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const slidesContainer = document.getElementById('slides');
  if (!slidesContainer) return;

  const slides = Array.from(slidesContainer.querySelectorAll('.slide'));
  const total = slides.length;
  const firstClone = slides[0].cloneNode(true);
  slidesContainer.appendChild(firstClone);

  let index = 0;
  const transition = 800; // ms
  const pause = 1000;     // ms
  const interval = transition + pause;

  function goTo(i){
    slidesContainer.style.transition = `transform ${transition}ms ease`;
    slidesContainer.style.transform = `translateX(-${i * 100}vw)`;
    index = i;
  }

  function next(){
    const target = index + 1;
    goTo(target);
    if (target === total){
      setTimeout(()=>{
        slidesContainer.style.transition = 'none';
        slidesContainer.style.transform = 'translateX(0)';
        index = 0;
      }, transition + 20);
    }
  }

  setInterval(next, interval);
});

const skillsSection = document.querySelector('#about');
const skillFills = document.querySelectorAll('.skill-fill');

function animateSkillsIfNeeded(){
  if (!skillsSection) return;
  const sectionTop = skillsSection.getBoundingClientRect().top + window.scrollY;
  const scrollPos = window.scrollY + window.innerHeight;
  if (scrollPos > sectionTop + 80) {
    skillFills.forEach(fill => {
      const w = fill.dataset.w || '80%';
      fill.style.width = w;
    });
    // remove event to prevent repeated triggers
    window.removeEventListener('scroll', animateSkillsIfNeeded);
  }
}
window.addEventListener('scroll', animateSkillsIfNeeded);
animateSkillsIfNeeded(); // run once in case already in view


const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
    contactForm.reset();
  });
}
