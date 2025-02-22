var typed = new Typed(".text",{
    strings:["Frontend Developer", "Java Developer", "Web Developer"],
    typeSpeed : 10,
    backSpeed : 50,
    backDelay : 1000,
    loop : true
});


function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
  }


  window.addEventListener('click', function(event) {
    const navMenu = document.getElementById('navMenu');
    const hamburger = document.querySelector('.hamburger');
    if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
      navMenu.classList.remove('active');
    }
  });