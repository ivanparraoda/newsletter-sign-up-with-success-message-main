const element = document.getElementById("submit");
element.addEventListener("click", myFunction);

function myFunction() {
    let op=document.querySelector('.success-mes');
    op.classList.toggle('success_open');
}


