'use strict';

// Setting
const mode = document.querySelector('.mode'), // wrap
    classDark = 'is_dark', // Element class for dark theme
    labelDark = 'Night Theme', // Label for dark theme
    labelLight = 'Light Theme'; // Label for light theme
// Setting END

mode.insertAdjacentElement('afterBegin', document.createElement('span'));

// Create the necessary elements for the buttons
// Button 1
const toggleSwitch = document.querySelector('.toggleSwitch');

toggleSwitch.insertAdjacentHTML('afterBegin', '<input type="checkbox" name="toggleSwitch" id="toggleSwitch" checked><label for="toggleSwitch"></label>');
toggleSwitch.style.display = 'inline-flex';

// Button 2
document.body.insertAdjacentHTML('beforeEnd', `<svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><symbol id="light-theme" viewBox="0 0 302.4 302.4"><path d="M204.8,97.6C191.2,84,172,75.2,151.2,75.2s-40,8.4-53.6,22.4c-13.6,13.6-22.4,32.8-22.4,53.6s8.8,40,22.4,53.6 c13.6,13.6,32.8,22.4,53.6,22.4s40-8.4,53.6-22.4c13.6-13.6,22.4-32.8,22.4-53.6S218.8,111.2,204.8,97.6z M190.4,190.4 c-10,10-24,16-39.2,16s-29.2-6-39.2-16s-16-24-16-39.2s6-29.2,16-39.2s24-16,39.2-16s29.2,6,39.2,16s16,24,16,39.2 S200.4,180.4,190.4,190.4z"/><path d="M292,140.8h-30.8c-5.6,0-10.4,4.8-10.4,10.4c0,5.6,4.8,10.4,10.4,10.4H292c5.6,0,10.4-4.8,10.4-10.4 C302.4,145.6,297.6,140.8,292,140.8z"/><path d="M151.2,250.8c-5.6,0-10.4,4.8-10.4,10.4V292c0,5.6,4.8,10.4,10.4,10.4c5.6,0,10.4-4.8,10.4-10.4v-30.8 C161.6,255.6,156.8,250.8,151.2,250.8z"/><path d="M258,243.6l-22-22c-3.6-4-10.4-4-14.4,0s-4,10.4,0,14.4l22,22c4,4,10.4,4,14.4,0S262,247.6,258,243.6z"/><path d="M151.2,0c-5.6,0-10.4,4.8-10.4,10.4v30.8c0,5.6,4.8,10.4,10.4,10.4c5.6,0,10.4-4.8,10.4-10.4V10.4 C161.6,4.8,156.8,0,151.2,0z"/><path d="M258.4,44.4c-4-4-10.4-4-14.4,0l-22,22c-4,4-4,10.4,0,14.4c3.6,4,10.4,4,14.4,0l22-22C262.4,54.8,262.4,48.4,258.4,44.4z"/><path d="M41.2,140.8H10.4c-5.6,0-10.4,4.8-10.4,10.4s4.4,10.4,10.4,10.4h30.8c5.6,0,10.4-4.8,10.4-10.4 C51.6,145.6,46.8,140.8,41.2,140.8z"/><path d="M80.4,221.6c-3.6-4-10.4-4-14.4,0l-22,22c-4,4-4,10.4,0,14.4s10.4,4,14.4,0l22-22C84.4,232,84.4,225.6,80.4,221.6z"/><path d="M80.4,66.4l-22-22c-4-4-10.4-4-14.4,0s-4,10.4,0,14.4l22,22c4,4,10.4,4,14.4,0S84.4,70.4,80.4,66.4z"/></symbol><symbol id="dark-theme" viewBox="0 0 512 512"><path d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"/></symbol></svg>`);


const toggleCircle = document.querySelector('.toggleCircle');
toggleCircle.insertAdjacentHTML('afterBegin', `<input type="checkbox" name="toggleCircle" id="toggleCircle" checked><label for="toggleCircle"><svg class="icon-theme"><use xlink:href="#light-theme"></use></svg><svg class="icon-theme"><use xlink:href="#dark-theme"></use></svg></label>`);

const Label = mode.querySelector('span'),
    Toggle1 = document.getElementById('toggleSwitch'),
    Toggle2 = document.getElementById('toggleCircle');

Label.textContent = labelLight;

// For one button
// Toggle1.addEventListener('click', (el) => {
// 	if (!el.target.checked) {
// 		Label.textContent = labelDark;
// 		document.body.classList.add(classDark);
// 	}
// 	else {
// 		Label.textContent = labelLight;
// 		document.body.classList.remove(classDark);
// 	}
// })

// For the mutual operation of two buttons
const buttons = mode.querySelectorAll('input');

// iterate over all found elements and hang events on them
buttons.forEach(element => {
    let nextButton;

    element.addEventListener('click', el => {
        if (el.target.parentElement.classList.contains('toggleSwitch')) { nextButton = Toggle2; }
        else { nextButton = Toggle1; }

        if (!el.target.checked) {
            nextButton.checked = false;
            Label.textContent = labelDark;
            document.body.classList.add(classDark);
        }
        else {
            nextButton.checked = true;
            Label.textContent = labelLight;
            document.body.classList.remove(classDark);
        }
    })
})