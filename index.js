console.log('project is up')

// 👉 TASK 1- Demo handling click events on button#launchButton, using:
//      - HTML
//      - The DOM's element.onclick
//      - element.addEventListener()

// document.getElementById('launchButton')
//   .onclick = function (event) {
//     console.log('This is old school (JS)')
//   }

// document.getElementById('launchButton')
//   .addEventListener('click', function (event) {
//     console.log('this', this)
//     console.log('event object', event)
//     console.log('This is better, can do it more than once')
//   })

// document.addEventListener('click', function (event) {
//   console.log('the document got clicked')
//   console.log('this is this', this)
//   console.log('here is the target of the event', event.target)
// })

// 👉 TASK 2- Select the following elements from the DOM:

// BUTTONS
const launchButton = document.querySelector('#launchButton')
const confirmButton = document.querySelector('#confirmButton')
const cancelButton = document.querySelector('#cancelButton')

// MESSAGES
const successMessage = document.querySelector('.report.success')
const failureMessage = document.querySelector('.report.failure')

// MODAL
const modal = document.querySelector('.modal')
const modalOpacity = document.querySelector('.modal-opacity')


// 👉 TASK 3- Create a function that launches!
// It should open the confirmation modal.
// Add it as an event listener for click events on the launch button.
function launch(event) {
  // remove the 'off' classname from the modal
  modal.classList.remove('off')
}
launchButton.addEventListener('click', launch)

// 👉 TASK 4- Create a function to confirm the launch.
// It should close the modal and display a success report.
// Add it as a listener for clicks on the confirmation button.


// 👉 TASK 5- Create a function to cancel the launch.
// It should close the modal and display a failure report.
// Add it as a listener for clicks on the cancellation button.


// 👉 TASK 6- Create a function that closes the modal if
// the user hits the Escape key on their keyboard.
// Add it as an event listener for 'keydown' events on document.


// 👉 TASK 7- Add to ALL ELEMENTS ON THE PAGE an event listener for click events.
// It should console.log the target 🎯 of the event.
// It should also console.log the CURRENT target 🧭 of the event.
// Play with stopPropagation and stopImmediatePropagation.


// 👉 TASK 8- Create a link and prevent its default behavior


// 👉 TASK 9- Using the mouseOver event on 'document',
// log to the console the X and Y coordinates
// of the mouse pointer, as it moves over the screen.


// 👉 TASK 10- [STRETCH] Create helper functions
function openModal() {

}

function closeModal() {

}

function killReports() {

}
