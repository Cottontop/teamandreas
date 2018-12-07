//setTimeout(function(){ alert("Hello"); }, 2000);

/*window.onscroll = function () {
    window.scrollTo(0,0);
}*/

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
/*
let deferredPrompt;

window.addEventListener('beforeinstallprompt', function(e) {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;

  // Update UI notify the user they can add to home screen
  btnAdd.style.display = 'block';
});

btnAdd.addEventListener('click', function(e)  {
    // hide our user interface that shows our A2HS button
    btnAdd.style.display = 'none';
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice
      .then(function(choiceResult) {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        deferredPrompt = null;
      });
  });
*/

function DetectIphone(){
    let text1 = "";
    let text2 = "";
    let image = "";
    let uagent = navigator.userAgent.toLowerCase();
    if (uagent.search("iphone") > -1){
         text1 = "Iphone"
         text2 = "Trykk på det lille torget med pil oppover i midten av nettleseren. Velg Legg til i startskjermbildet.";
         image = "../images/iphoneHow.jpg";
    }
    else{
         text1 = "Android"
         text2 = "Fra menyen, velg Legg til i startskjermbildet.";
         image = "../images/androidImage.PNG";
    }

 document.getElementById("id01").innerHTML = text1;
 document.getElementById("id02").innerHTML = text2;
 document.getElementById("id03").src = image;
 }