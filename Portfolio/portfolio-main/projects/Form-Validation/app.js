// const formFields = document.getElementById('sign-up-form');

// formFields.addEventListener('submit', function(event) {
//   event.preventDefault();

//   const firstName = document.getElementById('first');
//   if (firstName.vaalue.length === 0) {
//     alert('You must enter a first name!');
//   }

//   const lastName = document.getElementById('last');
//   if (lastName.value.length === 0) {
//     alert('You must enter a last Name!');
//   }
// })

function showPassword() {
  var show = document.getElementById("password");
  if (show.type === "password") {
    show.type = "text";
  } else {
    show.type = "password";
  }
}
