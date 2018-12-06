//setTimeout(function(){ alert("Hello"); }, 2000);

window.onscroll = function () {
    window.scrollTo(0,0);
}

function pushNotification() {
    let notification = document.getElementById('notification');
    notification.classList.add('active');
    let audio = document.getElementById('audio');
    audio.play();
}
setTimeout( function() {
    pushNotification();
}, 2000)
