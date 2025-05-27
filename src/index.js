// import { format } from "date-fns";
// import _ from 'lodash';


console.log("Template works.")

// Function to log the current image used for art direction.
function logArtDirectionImage() {
    const pictureOne = document.querySelector('.headshot-one');
    const pictureTwo = document.querySelector('.headshot-two');

    const imageOne = pictureOne.querySelector('img');
    const imageTwo = pictureTwo.querySelector('img');

    const sourceOne = pictureOne.getElementsByTagName('source');
    const sourceTwo = pictureTwo.getElementsByTagName('source');

    let selectedImageOne = imageOne.src; // Default is the img source (fallback)
    let selectedImageTwo = imageTwo.src; // Default is the img source (fallback)

    for (let counter = 0; counter < sourceOne.length; counter++) {
        if (window.matchMedia(sourceOne[counter].media).matches) {
            selectedImageOne = sourceOne[counter].srcset;
        }
    }

    for (let counter = 0; counter < sourceTwo.length; counter++) {
        if (window.matchMedia(sourceTwo[counter].media).matches) {
            selectedImageTwo = sourceTwo[counter].srcset;
        }
    }
    const trimmedImageOneName = selectedImageOne.split('/').pop();
    const trimmedImageTwoName = selectedImageTwo.split('/').pop();


    // Log images...
    console.log(`Current image one: ${trimmedImageOneName}`);
    console.log(`Current image two: ${trimmedImageTwoName}`);
    console.log('');
}

let resizeTimeout;
window.addEventListener('resize', function () {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(logArtDirectionImage, 150);
});