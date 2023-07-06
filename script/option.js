


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

    if (progress === "100") {
        notCompletedDiv.style.display = "none";
        completedDiv.style.display = "block";
    } else {
        notCompletedDiv.style.display = "block";
        completedDiv.style.display = "none";
    }
}


// send email
document.getElementById("sendEmailButton").addEventListener("click", function() {
    // Lấy các giá trị cần thiết từ người dùng (ví dụ: địa chỉ email, nội dung)
    var emailAddress = 'thanhduongjnguyen@gmail.com';
    var subject = "Test";
    var content = "Something";

    // Tạo URL mailto chứa các thông tin đã lấy được
    var mailtoUrl = "mailto:" + encodeURIComponent(emailAddress) +
                    "?subject=" + encodeURIComponent(subject) +
                    "&body=" + encodeURIComponent(content);

    // Mở link mailto trong cửa sổ mới hoặc trong cùng tab (tùy thuộc vào trình duyệt)
    window.open(mailtoUrl);
  });