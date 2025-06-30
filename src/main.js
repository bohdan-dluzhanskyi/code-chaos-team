  const menuBtn = document.querySelector('.header-menu-btn');      
  const mobileMenu = document.querySelector('.mobile-menu');        
  const closeBtn = document.querySelector('.mobile-menu-close');    

  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('is-open')
  });

  closeBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open')
  });

  document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('is-open');
    });
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('is-open');
    })
  });

