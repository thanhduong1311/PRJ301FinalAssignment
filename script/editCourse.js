
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
    var selectBox = document.getElementById("lessonType");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;

    var videoDiv = document.getElementById("lessonType_1");
    var quizDiv = document.getElementById("lessonType_2");
    var readingDiv = document.getElementById("lessonType_3");

    var videoDiv_Edit = document.getElementById("lessonType_1-edit");
    var quizDiv_Edit = document.getElementById("lessonType_2-edit");
    var readingDiv_Edit = document.getElementById("lessonType_3-edit");

    videoDiv.style.display = selectedValue === "0" ? "block" : "none";
    quizDiv.style.display = selectedValue === "1" ? "block" : "none";
    readingDiv.style.display = selectedValue === "2" ? "block" : "none";

    videoDiv_Edit.style.display = selectedValue === "0" ? "block" : "none";
    quizDiv_Edit.style.display = selectedValue === "1" ? "block" : "none";
    readingDiv_Edit.style.display = selectedValue === "2" ? "block" : "none";
}

function showDivEdit() {
    var selectBox = document.getElementById("lessonType-edit");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
   
    var videoDiv_Edit = document.getElementById("lessonType_1-edit");
    var quizDiv_Edit = document.getElementById("lessonType_2-edit");
    var readingDiv_Edit = document.getElementById("lessonType_3-edit");

    videoDiv_Edit.style.display = selectedValue === "0" ? "block" : "none";
    quizDiv_Edit.style.display = selectedValue === "1" ? "block" : "none";
    readingDiv_Edit.style.display = selectedValue === "2" ? "block" : "none";
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

    var type0 = document.getElementById("answer_type_0");
    var type1 = document.getElementById("answer_type_1");

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
    <textarea placeholder="answer_${numberOfAnswerRatio}" required="required" name="answer_${numberOfAnswerRatio}" id="answer_${numberOfAnswerRatio}" cols="30"
    rows="2"></textarea><label for="answer_${numberOfAnswerRatio}_correct">Correct</label>
    <input type="radio" id="answer_${numberOfAnswerRatio}_correct" value="" name="a1">
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
    <textarea placeholder="answer_${numberOfAnswerRatio}" required="required" name="answer_${numberOfAnswerRatio}" id="answer_${numberOfAnswerRatio}" cols="30"
    rows="2"></textarea><label for="answer_${numberOfAnswerRatio}_correct">Correct</label>
    <input type="checkbox" id="answer_${numberOfAnswerRatio}_correct" value="" name="a1">
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




function showEditMoocByID(element) {
    var moocID = element.querySelector(".accordion-header button").innerText.split("#")[1]
    console.log("Mooc: " + moocID)
    var currentWork = document.querySelector("#editMooc")
    currentWork.style.display = "block"
    currentWork.querySelector("form #MoocID").value = moocID;
    console.log("Value: " + currentWork.querySelector("form #MoocID").value)

    document.querySelector("#addMooc").style.display = "none"
    document.querySelector("#editLesson").style.display = "none"
    document.querySelector("#addLesson").style.display = "none"

}

function showEditLessonByID(element) {

    var lessonID = element.querySelector(".accordion-header button").innerText.split("#")[1]
    console.log("Lesson: " + lessonID)
    var currentWork = document.querySelector("#editLesson")
    currentWork.style.display = "block"
    currentWork.querySelector("form #LessonID-edit").value = lessonID;

    document.querySelector("#addMooc").style.display = "none"
    document.querySelector("#editMooc").style.display = "none"
    document.querySelector("#addLesson").style.display = "none"
}

function showAddMoocArea() {
    document.querySelector("#addMooc").style.display = "block"
    document.querySelector("#editLesson").style.display = "none"
    document.querySelector("#editMooc").style.display = "none"
    document.querySelector("#addLesson").style.display = "none"
}

function showAddLessonArea() {
    document.querySelector("#addLesson").style.display = "block"
    document.querySelector("#editLesson").style.display = "none"
    document.querySelector("#editMooc").style.display = "none"
    document.querySelector("#addMooc").style.display = "none"
}


var Mooc = {
    courseID: 1,
    index: 1,
    title: "Example title",
    description: "Example des",
    lesson: [
        {
            name: "Lesson name",
            index: 1,
            type: 1,
            time: 15,
            content: {
                question: [
                    {
                        lessonID: 1,
                        index: 1,
                        content: "Why do we have bugs?",
                        type: 0,
                        point: 1,
                    }
                ],
                answer: [
                    {
                        questionID: 1,
                        content: "",
                        status: "true"
                    }
                ]
            }
        }
    ]
};

// console.log(Mooc);



var Question = {
    lessonID: 1,
    index: 1,
    content: "Why we have bug?",
    type: 0,
    point: 1,
}

var Answer = [
    {
        content: "",
        status: "true"
    }
]


var questionType = document.querySelector("#addLesson #questionType").value;
var answerType = document.querySelector("#addLesson #answerType").value;
var questionContent = ""
var answers = []



function createQuestion() {
    questionType = document.querySelector("#addLesson #questionType").value;
    answerType = document.querySelector("#addLesson #answerType").value;
    questionContent = ""
    answers = []

    if (Number.parseInt(questionType) == 0) {
        questionContent = document.querySelector("#addLesson #questionType_0_content").value

    } else if (Number.parseInt(questionType) == 1) {
        questionContent = document.querySelector("#addLesson #questionType_1_content").value

    } else if (Number.parseInt(questionType) == 2) {
        questionContent = document.querySelector("#addLesson #questionType_2_content").value
    } else {
        console.log("null question")
    }



    if (Number.parseInt(answerType) == 0) {
        var ans = document.querySelectorAll('#addLesson #answer_type_0 textarea');
        var ansCorrect = document.querySelectorAll('#addLesson #answer_type_0 input');
        for (var i = 0; i < ans.length; i++) {
            var ansOption = {
                content: ans[i].value,
                status: ansCorrect[i].checked
            };

            answers.push(ansOption);
        }
    } else if (Number.parseInt(answerType) == 1) {
        var ans = document.querySelectorAll('#addLesson #answer_type_1 textarea');
        var ansCorrect = document.querySelectorAll('#addLesson #answer_type_1 input');

        for (var i = 0; i < ans.length; i++) {
            var ansOption = {
                content: ans[i].value,
                status: ansCorrect[i].checked
            };

            answers.push(ansOption);
        }
    } else {
        console.log("null answer")
    }


    Question.content = questionContent;
    Question.type = questionType;

    Answer = answers

    console.log(Question)
    console.log(Answer)
}
