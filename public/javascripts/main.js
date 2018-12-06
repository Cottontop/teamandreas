//setTimeout(function(){ alert("Hello"); }, 2000);

window.onscroll = function () {
    window.scrollTo(0,0);
}

function pushNotification(campaign) {
    let notification = document.getElementById('notification');
    let title = document.createElement('span');
    title.innerHTML = campaign.title;
    notification.appendChild(title);
    let body = document.createElement('div');
    body.innerHTML = campaign.notification;
    notification.appendChild(body);
    notification.classList.add('active');
}

