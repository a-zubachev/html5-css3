var video = document.querySelector("#video"),
button = document.querySelector("#button");
button.addEventListener("click", function () {
video.play()
video.setAttribute("controls", "controls");
}, false);
$("#button").click(function () {
$(".video_wrp").addClass('video_wrp-hide');
})