// function showPopup() {
//     var popupContainer = document.getElementById('popup-container');
//     popupContainer.style.bottom = '0';
// }

// function closePopup() {
//     var popupContainer = document.getElementById('popup-container');
//     popupContainer.style.bottom = '-100%';
// }

// document.getElementById('show-popup-btn').addEventListener('click', showPopup);

// document.getElementById('popup-container').addEventListener('click', closePopup);

// // Prevent the button click from closing the popup
// document.getElementById('popup-container').addEventListener('click', function(event) {
//     event.stopPropagation();
// });



function showPopup() {
    var popupContainer = document.getElementById('popup-container');
    popupContainer.style.bottom = '0';
}

function closePopup() {
    var popupContainer = document.getElementById('popup-container');
    var video = document.getElementById('popup-video');

    popupContainer.style.bottom = '-100%';

    // Pause the video
    video.pause();
}

document.getElementById('show-popup-btn').addEventListener('click', showPopup);
document.getElementById('close-popup-btn').addEventListener('click', closePopup);

// Add an event listener to prevent closing the popup when clicking inside the popup container
document.getElementById('popup-container').addEventListener('click', function(event) {
    event.stopPropagation();
});

document.getElementById('popup-video').volume = 0.3;