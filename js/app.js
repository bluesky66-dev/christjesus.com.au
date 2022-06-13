var deferredPrompt;

if ('serviceWorker' in navigator) {
    navigator.serviceWorker
    .register('/sw.js')
    .then(function() {
        console.log('Service worker registered!');
    });
}

window.addEventListener('beforeinstallprompt', function(event) {
    console.log('beforeinstallprompt fired');
    event.preventDefault();
    deferredPrompt= event;
    return false;
});


function openNav() {
  document.getElementById("Nav").style.width = "100%";
}

function closeNav() {
  document.getElementById("Nav").style.width = "0%";
}


const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e)=>{
  setTimeout(()=>{
    splash.classList.add('display-none')
  }, 2000);
})