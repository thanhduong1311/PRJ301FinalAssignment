var preBTN = $('.page-item #pre')[0];
var nextBTN = $('.page-item #next')[0];
var pagination = $('.pagination')[0];
var pageNumberBtns = document.getElementsByClassName("page-item");
var list = $('#paginated-list>li');

for (var i = 0; i < list.length; i++) {
    var newLi = document.createElement("li")
    newLi.classList.add("page-item")
    var newA = document.createElement("a")
    newA.classList.add("page-link")
    newA.setAttribute("onclick", "changePage(this)")
    newA.innerHTML = (i + 1)
    newA.id = (i + 1)
    newLi.appendChild(newA)
    pagination.insertBefore(newLi, nextBTN.parentNode)
}

document.querySelectorAll(".page-link")[1].classList.add("active")

function changePage(element) {

    document.querySelectorAll(".page-link").forEach(function (ele) {
        ele.classList.remove("active")
    })

    element.classList.add("active")

    var displayID = Number.parseInt(element.innerHTML.trim())

    disPlayByID(displayID);
}


function disPlayByID(ID) {
    var displayID = Number.parseInt(ID)
    for (var i = 0; i < list.length; i++) {
        var liItemID = Number.parseInt(list[i].id.split("_")[1])
        if (liItemID == displayID) {
            list[i].style.display = "block";
        } else {
            list[i].style.display = "none";
        }
    }
}

function prePage() {
    var activeEle = document.querySelector(".page-link.active")
    var activeID = Number.parseInt(activeEle.innerHTML)
    console.log(activeID)
    disPlayByID(activeID - 1)
    activeEle.classList.remove("active")

    var preForActive = document.querySelectorAll(".page-link")
    if ((activeID - 1) > 0 && (activeID - 1) < list.length + 1) {
        if ((activeID - 1) >=0) {

            for (var i = 0; i < preForActive.length; i++) {
                if (preForActive[i].id == ("" + (activeID - 1))) {
                    preForActive[i].classList.add("active")
                    if(Number.parseInt(document.querySelector(".page-link.active").innerHTML)==1) {
                        document.querySelectorAll(".page-item")[0].classList.add("disabled")
                    } else {
                        document.querySelectorAll(".page-item")[0].classList.remove("disabled")
                    }
                    if(Number.parseInt(document.querySelector(".page-link.active").innerHTML)==(list.length)) {
                        document.querySelectorAll(".page-item")[(list.length+1)].classList.add("disabled")
                    } else {
                        document.querySelectorAll(".page-item")[(list.length+1)].classList.remove("disabled")
                    }
                }
            }
        }
    }

}

function nextPage() {
    
if(Number.parseInt(document.querySelector(".page-link.active").innerHTML)==1) {
    document.querySelectorAll(".page-item")[0].classList.add("disabled")
}
if(Number.parseInt(document.querySelector(".page-link.active").innerHTML)==(list.length)) {
    document.querySelectorAll(".page-item")[(list.length)].classList.add("disabled")
}
    var activeEle = document.querySelector(".page-link.active")
    var activeID = Number.parseInt(activeEle.innerHTML)

    console.log(activeID)
    disPlayByID(activeID + 1)
    activeEle.classList.remove("active")

    var preForActive = document.querySelectorAll(".page-link")
    if ((activeID + 1) <= list.length) {
        for (var i = 0; i < preForActive.length; i++) {
            if (preForActive[i].id == ("" + (activeID + 1))) {
                preForActive[i].classList.add("active")
                if(Number.parseInt(document.querySelector(".page-link.active").innerHTML)==1) {
                    document.querySelectorAll(".page-item")[0].classList.add("disabled")
                } else {
                    document.querySelectorAll(".page-item")[0].classList.remove("disabled")
                }
                if(Number.parseInt(document.querySelector(".page-link.active").innerHTML)==(list.length)) {
                    document.querySelectorAll(".page-item")[(list.length+1)].classList.add("disabled")
                } else {
                    document.querySelectorAll(".page-item")[(list.length+1)].classList.remove("disabled")
                }
            }
        }
    }

}

// if(Number.parseInt(document.querySelector(".page-link.active").innerHTML)==1) {
//     document.querySelectorAll(".page-item")[0].classList.add("disabled")
// }
// if(Number.parseInt(document.querySelector(".page-link.active").innerHTML)==(list.length)) {
//     document.querySelectorAll(".page-item")[(list.length)].classList.add("disabled")
// }






// console.log(pageNumberBtns)
// console.log(pageNumberBtns[3].innerHTML)
// console.log(document.querySelectorAll(".page-item")[0])
// console.log()

if(Number.parseInt(document.querySelector(".page-link.active").innerHTML)==1) {
    document.querySelectorAll(".page-item")[0].classList.add("disabled")
} else {
    document.querySelectorAll(".page-item")[0].classList.remove("disabled")
}
if(Number.parseInt(document.querySelector(".page-link.active").innerHTML)==(list.length)) {
    document.querySelectorAll(".page-item")[(list.length+1)].classList.add("disabled")
} else {
    document.querySelectorAll(".page-item")[(list.length+1)].classList.remove("disabled")
}

