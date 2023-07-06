document.addEventListener('DOMContentLoaded', function() {
    let cursor = document.querySelector(".cursor");
    let scrollbar = document.getElementById("scrollbar");
    let isMouseDown = false;
    let startY, startScrollTop, scrollbarRatio;
  
    function updateScrollbar() {
      const visibleRatio = window.innerHeight / document.body.scrollHeight;
      scrollbar.style.height = (visibleRatio * window.innerHeight) + 'px';
      scrollbar.style.top = (window.scrollY * visibleRatio) + 'px';
      scrollbarRatio = visibleRatio;
    }
  
    window.addEventListener('load', updateScrollbar);
    window.addEventListener('resize', updateScrollbar);
    window.addEventListener('scroll', updateScrollbar);
  
    scrollbar.addEventListener('mousedown', (e) => {
      isMouseDown = true;
      startY = e.clientY;
      startScrollTop = window.scrollY;
      scrollbar.classList.add('clicked');
    });
  
    window.addEventListener('mousedown', () => {
      cursor.classList.add('clicked');
    });
  
    window.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
      if (!isMouseDown) return;
      e.preventDefault();
      const y = e.clientY;
      const walk = (y - startY) * (1 / scrollbarRatio);
      window.scrollTo({
        top: startScrollTop + walk,
        behavior: "auto"
      });
    });
  
    window.addEventListener('mouseup', () => {
      isMouseDown = false;
      cursor.classList.remove('clicked');
      scrollbar.classList.remove('clicked');
    });
  
    window.addEventListener("mouseleave", () => {
      isMouseDown = false;
      cursor.classList.remove('clicked');
      scrollbar.classList.remove('clicked');
    });
  
    document.body.style.cursor = "none";
  });
  



