


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