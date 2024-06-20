document.addEventListener('DOMContentLoaded', () => {
    showLoader();
  
    const startTime = new Date().getTime();
  
    window.onload = () => {
      const currentTime = new Date().getTime();
      const timeElapsed = currentTime - startTime;
  
      if (timeElapsed < 2000) {
        setTimeout(hideLoader, 2000 - timeElapsed);
      } else {
        hideLoader();
      }
    };
  });
    
  // 顯示載入圖示
  function showLoader() {
    document.getElementById('loader').style.display = 'block';
    document.querySelector('footer').style.display = 'none';
    document.getElementById('content-wrapper').style.opacity = '0';
  }
  
  // 隱藏載入圖示
  function hideLoader() {
    document.getElementById('loader').style.display = 'none';
    document.getElementById('content-wrapper').style.opacity = '1';
    document.querySelector('footer').style.display = 'block';
  }
  
    
  