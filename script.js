let textVisible = false;

function toggleText() {
    const overlay = document.getElementById("overlay");
    const additionalText = document.getElementById("additional-text");
    textVisible = !textVisible;
    if (textVisible) {
        overlay.style.display = "block";
        additionalText.style.display = "block";
    } else {
        overlay.style.display = "none";
        additionalText.style.display = "none";
    }
}

function openContent(page) {
    window.open(page, '_blank'); // Open in a new tab
}

function closeOverlay() {
    const overlay = document.getElementById("overlay");
    const additionalText = document.getElementById("additional-text");
    overlay.style.display = "none";
    additionalText.style.display = "none";
}

//////////////////////////////////////
let aboutTextVisible = false;

function toggleAboutText() {
    const overlay = document.getElementById("overlay");
    const additionalText = document.getElementById("additional-text-about");
    aboutTextVisible = !aboutTextVisible;
    if (aboutTextVisible) {
        overlay.style.display = "block";
        additionalText.style.display = "block";
    } else {
        overlay.style.display = "none";
        additionalText.style.display = "none";
    }
}

function closeOverlay() {
    const overlay = document.getElementById("overlay");
    const additionalText = document.getElementById("additional-text-about");
    overlay.style.display = "none";
    additionalText.style.display = "none";
}

//////////////////////////////////////////////////
// Add event listeners to each glow letter to change color on hover
document.querySelectorAll('.glow-letter').forEach(letter => {
    letter.addEventListener('mouseover', () => {
        letter.style.color = 'red';
    });

    letter.addEventListener('mouseout', () => {
        letter.style.color = ''; // Revert to default color
    });
});


