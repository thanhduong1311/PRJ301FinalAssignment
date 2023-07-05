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

paragraphs.forEach(function (paragraph) {
  paragraph.addEventListener('click', function () {
    // Loại bỏ lớp active từ tất cả các phần tử p
    paragraphs.forEach(function (p) {
      p.classList.remove('active');
    });

    // Thêm lớp active vào phần tử p
    this.classList.add('active');
  });
});

var video = document.getElementById('my-video');

if (video) {
  video.addEventListener('ended', function () {
    console.log('End');
  });
}

function checkVideoProgress() {
  if (video && video.currentTime === video.duration) {
    return 1;
  } else {
    return 0;
  }
}
// Gọi hàm kiểm tra video theo một khoảng thời gian nhất định
setInterval(checkVideoProgress, 1000); // Kiểm tra sau mỗi giây (1000 milliseconds)

// Hide all questions except first question
let questions = $(".quizContent");
for (let i = 1; i < questions.length; i++) {
  questions[i].hidden = true;
}
// add listener to questionsLabels
var questionsLabels = $(".listQuestion li");
for (var i = 0; i < questionsLabels.length; i++) {
  questionsLabels[i].addEventListener('click', function (e) {
    //hide all questions
    let questions = $(".quizContent");
    for (let j = 0; j < questions.length; j++) {
      questions[j].hidden = true;
    }
    //show question
    let questionIndex = this.innerHTML;
    let question = $("#question" + questionIndex)[0];
    question.hidden = false;
  });
}

// Lấy danh sách các phần
const parts = document.querySelectorAll('.partHeader');

// Lặp qua từng phần và gắn sự kiện cho phần tiêu đề
parts.forEach(part => {
  part.addEventListener('click', function () {
    const icon = this.querySelector('i');
    const partBody = this.nextElementSibling;

    if (icon && partBody) {
      if (partBody.classList.contains('hidden')) {
        partBody.classList.remove('hidden');
      } else {
        partBody.classList.add('hidden');
      }
    }
  });
});
