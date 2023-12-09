window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const scrollPosition = window.scrollY;
  
    if (scrollPosition > 50) {
      navbar.style.backgroundColor = '#F5DFDA'; 
    } else {
      navbar.style.backgroundColor = '#F99F8B'; 
    }
  });
  