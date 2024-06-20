document.addEventListener('DOMContentLoaded', () => {
  showLoader();

  const startTime = new Date().getTime();

  window.onload = function() {
    var images = document.querySelectorAll('#slideshow .slide');
    var dotsContainer = document.getElementById('dots-container');
    var dots = [];
    var index = 0;
    var timer;

    for (let i = 0; i < images.length; i++) {
        let dot = document.createElement('span');
        dot.classList.add('dot');
        dot.addEventListener('click', function() {
            clearInterval(timer); // Clear the current interval
            setSlide(i);
            timer = setInterval(slideShow, 5000); // Set a new interval
        });
        dotsContainer.appendChild(dot);
        dots.push(dot);
    }

    function setSlide(i) {
        images[index].classList.remove('active');
        dots[index].classList.remove('active');

        index = i;

        images[index].classList.add('active');
        dots[index].classList.add('active');
    }

    function slideShow() {
        setSlide((index + 1) % images.length);
    }

    setSlide(0);
    timer = setInterval(slideShow, 5000); // Keep a reference to the interval so it can be cleared
    const currentTime = new Date().getTime();
    const timeElapsed = currentTime - startTime;

    if (timeElapsed < 2000) {
      setTimeout(hideLoader, 2000 - timeElapsed);
    } else {
      hideLoader();
    }
    
  };
});


var serverip=document.querySelector(".server-ip")
var serverclipboard=document.querySelector(".clip-board")

serverip.addEventListener('click', async function() {
    let text = this.innerText;
    await navigator.clipboard.writeText(text);
    setTimeout(() => {
        serverclipboard.innerText = "點擊複製！";
        serverclipboard.style.color="#5a5a5a";  
      }, 5000);
    serverclipboard.innerText = "複製成功！";
    serverclipboard.style.color="#ddf316";

});

serverip.addEventListener('mouseover',function(){
    serverclipboard.classList.add("show");
    serverclipboard.classList.remove("unshow");
});

serverip.addEventListener('mouseout',function() {
    serverclipboard.classList.remove("show");
    serverclipboard.classList.add("unshow");
});
//======================================================回頂部動畫
const backToTopButton = document.querySelector("#back-to-top-btn");
  
  window.addEventListener("scroll", scrollFunction);
  
  function scrollFunction() {
    if (window.pageYOffset > 0) {
      if(!backToTopButton.classList.contains("btnEntrance")) {
        backToTopButton.classList.remove("btnExit");
        backToTopButton.classList.add("btnEntrance");
        backToTopButton.style.display = "block";
      }
    }
    else {
      if(backToTopButton.classList.contains("btnEntrance")) {
        backToTopButton.classList.remove("btnEntrance");
        backToTopButton.classList.add("btnExit");
        setTimeout(function() {
          backToTopButton.style.display = "none";
        }, 250);
      }
    }
  }
  
  backToTopButton.addEventListener("click", smoothScrollBackToTop);
  
  function smoothScrollBackToTop() {
    const targetPosition = 0;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 750;
    let start = null;
    
    window.requestAnimationFrame(step);
  
    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
      if (progress < duration) window.requestAnimationFrame(step);
    }
  }
  
  function easeInOutCubic(t, b, c, d) {
      t /= d/2;
      if (t < 1) return c/2*t*t*t + b;
      t -= 2;
      return c/2*(t*t*t + 2) + b;
  };
  
  // 顯示載入圖示
  function showLoader() {
    document.getElementById('loader').style.display = 'flex';
    document.querySelector('footer').style.display = 'none';
    document.getElementById('content-wrapper').style.opacity = '0';
  }
  
  // 隱藏載入圖示
  function hideLoader() {
    document.getElementById('loader').style.display = 'none';
    document.getElementById('content-wrapper').style.opacity = '1';
    document.querySelector('footer').style.display = 'block';
  }
  


