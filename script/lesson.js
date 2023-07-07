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

// var video = document.getElementById('my-video');

// if (video) {
//   video.addEventListener('ended', function () {
//     console.log('End');
//   });
// }

// function checkVideoProgress() {
//   if (video && video.currentTime === video.duration) {
//     return 1;
//   } else {
//     return 0;
//   }
// }
// Gọi hàm kiểm tra video theo một khoảng thời gian nhất định
// setInterval(checkVideoProgress, 1000); // Kiểm tra sau mỗi giây (1000 milliseconds)


// If quiz is finished
let quizFinished = ($(".quiz-type1")) ? $(".quiz-type1")[0].classList.contains("finished") : false;

// Hide all questions except first question
let questions = $(".quizContent");
for (let i = 1; i < questions.length; i++) {
  questions[i].hidden = true;
}
// add listener to questionsLabels
var questionsLabels = $(".listQuestion li");
for (var i = 0; i < questionsLabels.length; i++) {
  questionsLabels[i].addEventListener('click', function (e) {
    // Hide all questions
    let questions = $(".quizContent");
    for (let i = 0; i < questions.length; i++) {
      questions[i].hidden = true;
    }
    //show question
    let questionIndex = this.innerHTML;
    let question = $("#question" + questionIndex)[0];
    question.hidden = false;

    remarkQuestionLabel();
  });
}

function remarkQuestionLabel() {
  for (let i = 0; i < questions.length; i++) {
    //for each question, check if any answer check, mark done question label
    let questionIndex = i + 1;
    let answers = $(questions[i]).find("input");
    let anyChecked = false;
    for (let i = 0; i < answers.length; i++) {
      if (answers[i].checked) {
        anyChecked = true;
        if (!quizFinished) {
          answers[i].parentElement.classList.add("done");
          console.log(answers[i].parentElement);
        } else {
          break;
        }
      } else {
        if (!quizFinished) {
          answers[i].parentElement.classList.remove("done");
        }
      }
    }
    if (!quizFinished) {
      if (anyChecked) {
        questionsLabels[questionIndex - 1].classList.add("done");
      } else {
        questionsLabels[questionIndex - 1].classList.remove("done");
      }
    }
    //for each question, check if question are showing, mark select question label
    if (questions[i].hidden) {
      questionsLabels[questionIndex - 1].classList.remove("active");
    } else {
      questionsLabels[questionIndex - 1].classList.add("active");
      //update quizProgress
      let quizProgress = $(".quizProgress span")[0];
      quizProgress.innerHTML = questionIndex + "/" + questions.length;
    }
  }
}
setInterval(remarkQuestionLabel, 1000);

// check done when select answer
// add listener to questions
let answers = $(".answer input");
for (let i = 0; i < answers.length; i++) {
  answers[i].addEventListener('click', function (e) {
    //send new answer to questionResult
    if (typeof sendUpdateAnswer === 'function') {
      sendUpdateAnswer(this.name);
    }

    let question = this.parentElement.parentElement.parentElement;
    let questionIndex = 0;
    for (let i = 0; i < questions.length; i++) {
      if (questions[i].id == question.id) {
        questionIndex = i + 1;
        break;
      }
    }

    remarkQuestionLabel();
  });
}

//add event next question in quiz
let continueQuestionBtn = $(".quiz-type1 .btns p")[0];
continueQuestionBtn.addEventListener('click', function (e) {
  let showIndex = 0;
  for (let i = 0; i < questions.length; i++) {
    if (!questions[i].hidden) {
      showIndex = i;
      questions[i].hidden = true;
    }
  }
  questions[(showIndex + 1) % questions.length].hidden = false;
  remarkQuestionLabel();
});


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


// form api youtube
// --------------------------------------------------------------------------------------------
// Global variable for the player
var player;

var IDVideo = 'h0z8Qt32nVU'

// Function called when the YouTube Player API is loaded
function onYouTubeIframeAPIReady() {
  // Create a new instance of the player
  player = new YT.Player('player', {
    videoId: IDVideo, // Replace VIDEO_ID with the ID of the video you want to embed
    events: {
      'onStateChange': onPlayerStateChange
    }
  });
}

// Event handler for player state change
function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.ENDED) {
    console.log('Video has ended');
    checkVideoProgress();
  }
}

// Check the video progress
function checkVideoProgress() {
  if (!player) {
    return;
  }
  var duration = player.getDuration(); // Get the duration of the video
  var currentTime = player.getCurrentTime(); // Get the current time of the video

  if (currentTime >= duration) {
    console.log('User has watched the entire video');
  } else {
    console.log('User has not watched the entire video yet');
  }
}


//countdown time of quiz
let quizTimeRemain = $(".quiz-type1 .rightSide .time span")[0];
function countdown(timer) {
  var timeArray = timer.split(":");
  var hours = 0;
  var minutes = 0;
  var seconds = 0;

  if (timeArray.length === 2) {
    minutes = parseInt(timeArray[0], 10);
    seconds = parseInt(timeArray[1], 10);
  } else if (timeArray.length === 3) {
    hours = parseInt(timeArray[0], 10);
    minutes = parseInt(timeArray[1], 10);
    seconds = parseInt(timeArray[2], 10);
  } else {
    //console.log("Invalid timer format!");
    return;
  }

  var countdownInterval = setInterval(function () {
    if (seconds === 0) {
      if (minutes === 0) {
        if (hours === 0) {
          clearInterval(countdownInterval);
          //console.log("Countdown finished!");
          return;
        }
        hours--;
        minutes = 59;
        seconds = 59;
      } else {
        minutes--;
        seconds = 59;
      }
    } else {
      seconds--;
    }

    var displayHours = hours > 0 ? hours + ":" : "";
    var formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    var formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
    //console.log(displayHours + formattedMinutes + ":" + formattedSeconds);
    quizTimeRemain.innerHTML = displayHours + formattedMinutes + ":" + formattedSeconds;
  }, 1000);
}

//It will countdown if contain class countdown
if (quizTimeRemain.classList.contains("countdown")) {
  countdown(quizTimeRemain.innerHTML);
}