document.addEventListener("DOMContentLoaded", function() {
    var myVideo = document.getElementById("myVideo");
  
    // 監聽影片結束事件
    myVideo.addEventListener("ended", function() {
      // 隱藏影片
      myVideo.style.display = "none";
    });
  });

  
  
  
  
  