


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
console.log(courseTakenDivs)

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