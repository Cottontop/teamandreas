//setTimeout(function(){ alert("Hello"); }, 2000);

window.onscroll = function () {
    window.scrollTo(0,0);
}

function pushNotification() {
    let notification = document.getElementById('notification');
    notification.classList.add('active');
}
setTimeout( function() {
    pushNotification();
}, 2000);

function playAudio() {
    let audio = document.getElementById('audio');
    audio.play();
    console.log('You played audio');
}
