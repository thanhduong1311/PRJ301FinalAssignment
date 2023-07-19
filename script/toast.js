
function toast({ title = '', message = '', type = "success", duration = 3000 }) {
    const main = document.getElementById("toast");
    console.log(main)
    if (main) {
        const toast = document.createElement('div');
        toast.onclick = function(e) {
            if(e.target.closest('.toastClose')) {
            main.removeChild(toast)
            }

        }
        toast.style.animation = `slideInLeft ease .5s , fadeOut linear 1s ${duration/1000}s forwards`
        const icons = {
            success:'fa-solid fa-circle-check',
            error:'fa-solid fa-circle-exclamation',
            warning:'fa-solid fa-triangle-exclamation'
        }

        const icon = icons[type];

        toast.classList.add("toastMessage",`${type}`);
        toast.innerHTML = `
        <div class="toastIcon">
        <i class="${icon}"></i>
        </div>
         <div class="toastBody">
        <h3>${title}</h3>
        <p>${message}</p>
         </div>
         <div onclick="closeMessage()" class="toastClose">
        <i class="fa-solid fa-xmark"></i>
         </div>
        `;
        main.appendChild(toast);
        setTimeout(function() {
            main.removeChild(toast)
        },duration+1000)
    }
}





function showSuccessToast (message) {
    toast({
        title: 'Success',
        message: message,
        type: 'success',
        duration: 3000
    })
}

function showErrorToast (message) {
    toast({
        title: 'Success',
        message:message ,
        type: 'error',
        duration: 3000
    })
}

function showWaringToast (message) {
    toast({
        title: 'Success',
        message: message,
        type: 'warning',
        duration: 3000
    })
}



// showWaringToast ("abc")
// setTimeout(function() {
//     showSuccesToast("def")
//     setTimeout(function() {
//         showErrorToast("ght")
//     },1000);
// },1000);



