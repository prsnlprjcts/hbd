function showPopup() {
    var popupContainer = document.getElementById('popup-container');
    popupContainer.style.bottom = '0';
}

function closePopup() {
    var popupContainer = document.getElementById('popup-container');
    popupContainer.style.bottom = '-100%';
}

document.getElementById('show-popup-btn').addEventListener('click', showPopup);

document.getElementById('popup-container').addEventListener('click', closePopup);

// Prevent the button click from closing the popup
document.getElementById('popup-container').addEventListener('click', function(event) {
    event.stopPropagation();
});