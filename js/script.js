// Ini adalah file javascript

console.log('Hello world!');

function formValidation() {
    // console.log('form validationhas been clicked!');

    let nameInput = document.getElementById('name-input').value;

    console.log(nameInput);
    if (nameInput == ""){
        alert('Name must be filled out');
    } else {
        // display result form
        document.getElementById('result-form').innerHTML = nameInput;
    }    
}

document.getElementById('submit-btn').addEventListener('click', formValidation);

let indexBanner = 0;

changeBackground();

function nextBanner() {
    indexBanner += 1; // bacanya indexBanner + 1

    changeBackground();
}

// function to change background banner
function changeBackground() {
    let bannerList = document.getElementsByClassName('banner-image');
    // console.log(bannerList.length);
    // console.log(indexBanner);

    if (indexBanner > bannerList.length - 1) {
        //  reset indexbanner
        indexBanner = 0;
    }

    // Looping to change background
    for (let i = 0; i < bannerList.length; i++) {
        // console.log[i];
        // console.log[bannerList[i]];
        bannerList[i].style.display = 'none';
    }

    bannerList[indexBanner].style.display = 'block';
}

setInterval(nextBanner, 3000);