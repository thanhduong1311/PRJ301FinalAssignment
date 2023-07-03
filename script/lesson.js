function openTab(evt, tabname) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabname).style.display = "block";
    evt.currentTarget.className += " active";
  }


  //change page
  // Lắng nghe sự kiện nhấp vào các phần tử <a>
  var menuItems = document.querySelectorAll('.menu li a');
  for (var i = 0; i < menuItems.length; i++) {
      menuItems[i].addEventListener('click', function (e) {
          e.preventDefault(); // Ngăn chặn hành vi mặc định khi nhấp vào liên kết
          var pageURL = this.getAttribute('href');
          window.location.href = pageURL; // Chuyển hướng đến trang tương ứng
      });
  }

  var paragraphs = document.querySelectorAll('.answer p');

paragraphs.forEach(function(paragraph) {
  paragraph.addEventListener('click', function() {
    // Loại bỏ lớp active từ tất cả các phần tử p
    paragraphs.forEach(function(p) {
      p.classList.remove('active');
    });

    // Thêm lớp active vào phần tử p
    this.classList.add('active');
  });
});

var video = document.getElementById('my-video');

video.addEventListener('ended', function() {
  console.log('End');
});

function checkVideoProgress() {
  if (video.currentTime === video.duration) {
    return 1;
  } else {
    return 0;
  }
}

// Gọi hàm kiểm tra video theo một khoảng thời gian nhất định
setInterval(checkVideoProgress, 1000); // Kiểm tra sau mỗi giây (1000 milliseconds)