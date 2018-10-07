 const button = document.getElementById("bounce");
 const ball = document.querySelector(".ball");

 button.addEventListener('click', function () {
    ball.classList.toggle("bouncing");
 });