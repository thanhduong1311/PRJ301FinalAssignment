


function openMenu() {

    var b = document.getElementById("userMenu")

    console.log(b)

    if (b.classList.contains("close")) {
        b.classList.remove("close")
        console.log("Show")
    } else {
        b.classList.add("close")
        console.log("Remove")

    }
}

function addItem(thisID) {
    var id = parseInt(thisID.split('-')[1]);


}

function removeItem() {

}

var courseTakenDivs = document.getElementsByClassName("courseTaken");

for (var i = 0; i < courseTakenDivs.length; i++) {
    var progress = courseTakenDivs[i].querySelector("progress").value;
    var notCompletedDiv = courseTakenDivs[i].querySelector(".notCompleted");
    var completedDiv = courseTakenDivs[i].querySelector(".completed");

    if (progress === 100) {
        notCompletedDiv.style.display = "none";
        completedDiv.style.display = "flex";
    } else {
        notCompletedDiv.style.display = "flex";
        completedDiv.style.display = "none";
    }
}



// console.log(tabHidden, progressView);


function strangeMode(mode) {

    var tabHidden = document.querySelector(".tabStranger")
    var progressView = document.querySelectorAll(".ProgressviewMode")
    var rateView = document.querySelectorAll(".rate");

    if (mode == 'off') {
        tabHidden.classList.add("hidden")
        progressView.forEach(element => {
            element.classList.remove("hidden")
        });
        rateView.forEach(element => {
            element.classList.add("hidden")
        });
    }
    else {
        tabHidden.classList.remove("hidden")
        progressView.forEach(element => {
            element.classList.add("hidden")
        });
        rateView.forEach(element => {
            element.classList.remove("hidden")
        });
    }
}

// strangeMode('on')


var input = document.getElementById('profile-photo');

if (input) {
    // Kiểm tra xem người dùng đã chọn tệp tin nào chưa
    if (input.files && input.files[0]) {
        var file = input.files[0];

        // Tạo một đối tượng FileReader
        var reader = new FileReader();

        // Xử lý sự kiện khi file đã được đọc
        reader.onload = function (e) {
            // Lấy link upload từ thuộc tính "result" của FileReader
            var uploadLink = e.target.result;

            // Đặt link upload vào thuộc tính "src" của thẻ <img>
            var imgPreview = document.getElementById('imgPreview');
            imgPreview.src = uploadLink;
        }

        // Đọc file như là một URL data
        reader.readAsDataURL(file);
    } else {
        // Nếu không tìm thấy ảnh upload, sử dụng ảnh mặc định
        var imgPreview = document.getElementById('imgPreview');
        imgPreview.src = "./assets/imgs/logoooooo.png";
    }
}