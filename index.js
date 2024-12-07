     // Disclaimer popup logic
     const popup = document.querySelector('.popup');
     const x = document.querySelector('.popup-content h1');

     window.addEventListener('load', () => {
         popup.classList.add('showPopup');
         popup.childNodes[1].classList.add('showPopup');
     });

     x.addEventListener('click', () => {
         popup.classList.remove('showPopup');
         popup.childNodes[1].classList.remove('showPopup');
     });

     // Scroll to top button logic
     const backToTopBtn = document.getElementById('back-to-top');

     window.addEventListener('scroll', () => {
         if (window.scrollY > 300) {
             backToTopBtn.style.display = 'block';
         } else {
             backToTopBtn.style.display = 'none';
         }
     });

     backToTopBtn.addEventListener('click', () => {
         window.scrollTo({ top: 0, behavior: 'smooth' });
     });