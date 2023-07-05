


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
