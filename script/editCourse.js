
$(function () {
    $(".moocTitles").sortable({
        placeholder: "drag-location",
        handle: ".mooc-handle",
        start: function (e, ui) {
            ui.placeholder.height(ui.helper.outerHeight());
        }
    });
});

$(function () {
    $(".lessonTitles").sortable({
        placeholder: "drag-location",
        handle: ".lesson-handle",
        start: function (e, ui) {
            ui.placeholder.height(ui.helper.outerHeight());
        }
    });
});

function showDiv() {
    var selectBox = document.getElementById("lessonType");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;

    var videoDiv = document.getElementById("lessonType_1");
    var quizDiv = document.getElementById("lessonType_2");
    var readingDiv = document.getElementById("lessonType_3");

    videoDiv.style.display = selectedValue === "0" ? "block" : "none";
    quizDiv.style.display = selectedValue === "1" ? "block" : "none";
    readingDiv.style.display = selectedValue === "2" ? "block" : "none";
}

function createDivQuestion() {
    // Lấy giá trị từ input
    var lessonTime = document.getElementById("numberOfquestion").value;
    var question_Box = document.getElementById("questionCreated")
    question_Box.innerHTML = ""

    // Chuyển đổi giá trị thành số nguyên
    var lessonCount = parseInt(lessonTime);

    // Kiểm tra nếu giá trị không phải là một số hợp lệ
    if (isNaN(lessonCount) || lessonCount <= 0) {
        alert("Vui lòng nhập một số nguyên dương");
    } else {
        // Lặp qua số lượng div cần tạo
        for (var i = 1; i <= lessonCount; i++) {
            // Tạo một thẻ div mới
            var newDiv = document.createElement("div");

            // Đặt thuộc tính id cho div
            newDiv.id = "question_" + i;
            newDiv.innerHTML = "Question " + i
            // Thêm nội dung hoặc các phần tử khác vào div này nếu cần

            // Thêm div vào DOM
            question_Box.appendChild(newDiv);
        }
    }
}

function showShowQuestionOfThisType() {
    var selectBox = document.getElementById("questionType");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;

    var type0 = document.getElementById("questionType_0");
    var type1 = document.getElementById("questionType_1");
    var type2 = document.getElementById("questionType_2");

    type0.style.display = selectedValue === "0" ? "block" : "none";
    type1.style.display = selectedValue === "1" ? "block" : "none";
    type2.style.display = selectedValue === "2" ? "block" : "none";
}

function showShowAnswerOfThisType(element) {
    var selectBox = document.getElementById(element.id);
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    console.log(selectedValue)

    var AnsIDType0 = "" + element.id + "0"
    var AnsIDType1 = "" + element.id + "1"

    console.log(AnsIDType0);
    console.log(AnsIDType1);

    var type0 = document.getElementById(AnsIDType0);
    var type1 = document.getElementById(AnsIDType1);
    console.log(type0);
    console.log(type1);


    type0.style.display = selectedValue === "0" ? "block" : "none";
    type1.style.display = selectedValue === "1" ? "block" : "none";
}

var numberOfAnswerRatio = 0;
var numberOfAnswerCheckbox = 0;
// Định nghĩa hàm onclick
function addAnswerRatio() {
    ++numberOfAnswerRatio;
    var addButton = document.querySelector('span#addRatio');
    // Tạo phần tử câu trả lời mới
    var newAnswer = document.createElement('div');
    newAnswer.innerHTML = `
    <div class="border border-dark rounded p-2 mb-1 bg-light">
    <textarea required="required" name="ans_0_0_content" id="" cols="30" rows="2"></textarea>
    <label for="ans_0_0_correct${numberOfAnswerRatio}">Correct</label>
    <input type="radio" id="ans_0_0_correct${numberOfAnswerRatio}" value="" name="a1">
    <span class="text-danger" onclick="removeAns(this)">Remove</span>
    </div>
    `;

    // Lấy đối tượng cha của nút "Add answer"
    var parentDiv = addButton.parentNode;

    // Chèn câu trả lời mới vào sau nút "Add answer"
    parentDiv.insertBefore(newAnswer, addButton);

    // Tăng giá trị của counter để đảm bảo các câu trả lời có id duy nhất
}

function addAnswerCheckbox() {
    var addButton = document.querySelector('span#addCheckbox');
    // Tạo phần tử câu trả lời mới
    var newAnswer = document.createElement('div');
    newAnswer.innerHTML = `
    <div class="border border-dark rounded p-2 mb-1 bg-light">
    <textarea required="required" name="ans_0_0_content" id="" cols="30" rows="2"></textarea>
    <label for="ans_0_0_correct${numberOfAnswerRatio}">Correct</label>
    <input type="checkbox" id="ans_0_0_correct${numberOfAnswerRatio}" value="" name="a1">
    <span class="text-danger" onclick="removeAns(this)">Remove</span>
    </div>
    `;

    // Lấy đối tượng cha của nút "Add answer"
    var parentDiv = addButton.parentNode;

    // Chèn câu trả lời mới vào sau nút "Add answer"
    parentDiv.insertBefore(newAnswer, addButton);

    // Tăng giá trị của counter để đảm bảo các câu trả lời có id duy nhất
}

function removeAns(element) {
    var parent = element.parentNode
    parent.remove()

}

function showCreateBox() {
    document.getElementById("question_create_area").style.display = "block"
    console.log(document.getElementById("question_create_area"))
}


/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////

//get MOOC ID
var MoocID = document.querySelectorAll(".accordion-item")[0].
    getElementsByTagName("button")[0].innerText.slice("-1")

// console.log(document.querySelectorAll(".accordion-item")[0])

var MoocIDArray = document.querySelectorAll(".accordion-item")
MoocIDArray.forEach(element => {
    element.addEventListener("click", function (event) {
        event.stopPropagation();
    })
});

var btnArr = document.querySelectorAll(".accordion-btn")
btnArr.forEach(element => {
    element.addEventListener("click", function (event) {
        event.stopPropagation();
    })
});




function showEditMoocByID() {
    // var splitID = ID.split("collapse_").reverse()[0]
    // var newMoocID = "editMooc" + '';
    document.querySelector("#editMooc").style.display="block"
    document.querySelector("#addMooc").style.display="none"
    document.querySelector("#editLesson").style.display="none"
    document.querySelector("#addLesson").style.display="none"
    
}

function showEditLessonByID() {
  document.querySelector("#editLesson").style.display = "block"
  document.querySelector("#addMooc").style.display="none"
    document.querySelector("#editMooc").style.display="none"
    document.querySelector("#addLesson").style.display="none"
}

function showAddMoocArea() {
    document.querySelector("#addMooc").style.display = "block"
    document.querySelector("#editLesson").style.display="none"
    document.querySelector("#editMooc").style.display="none"
    document.querySelector("#addLesson").style.display="none"
}

function showAddLessonArea() {
    document.querySelector("#addLesson").style.display = "block"
    document.querySelector("#editLesson").style.display="none"
    document.querySelector("#editMooc").style.display="none"
    document.querySelector("#addMooc").style.display="none"
}
