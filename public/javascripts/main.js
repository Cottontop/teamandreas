//setTimeout(function(){ alert("Hello"); }, 2000);

window.onscroll = function () {
    window.scrollTo(0,0);
}

function pushNotification(campaign) {
    let title = campaign.notification;
    let notification = document.getElementById('notification');
    notification.innerHTML = title;
    notification.classList.add('active');
}

