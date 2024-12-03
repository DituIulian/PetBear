document.querySelector('body').addEventListener('mousemove', eyeball);

function eyeball(event) {
    const pupils = document.querySelectorAll('.pupile-left, .pupile-right');

    pupils.forEach(pupil => {
        const eye = pupil.parentElement; 
        const eyeRect = eye.getBoundingClientRect();

        const eyeCenterX = eyeRect.left + eyeRect.width / 2;
        const eyeCenterY = eyeRect.top + eyeRect.height / 2;

        const mouseX = event.clientX;
        const mouseY = event.clientY;

        const deltaX = mouseX - eyeCenterX;
        const deltaY = mouseY - eyeCenterY;

        const maxDistanceX = eyeRect.width * 0.2; 
        const maxDistanceY = eyeRect.height * 0.2; 

        const translateX = Math.max(-maxDistanceX, Math.min(maxDistanceX, deltaX * 0.01));
        const translateY = Math.max(-maxDistanceY, Math.min(maxDistanceY, deltaY * 0.020));

        pupil.style.transform = `translate(${translateX}px, ${translateY}px)`;
    });
}


 document.addEventListener("visibilitychange", function() {
            const message = document.getElementById("message");
            if (document.hidden) {
                message.textContent = "Se pare ca ai plecat...";
            } else {
                message.textContent = "Ce bine ca ai revenit!";
            }
        });


        /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}



        window.onload = function() {
            let person = prompt("Please enter your name", "Name");
            if (person != null && person != "") {
                document.getElementById("greeting").innerHTML = "Salut " + person + "! Cum te simți azi?";
            }
        };

        function showDropdown() {
            document.getElementById("myDropdown").style.display = "block";
        }


        function setRating(rating) {
            let message = "Ai ales un rating de " + rating + ". ";


            if (rating >= 7) {
                message += "Super, ma bucur ca esti bine!";
                document.getElementById("mouth").classList.remove("mouth-closed");
                document.getElementById("mouth").classList.add("mouth-open"); 
            } else {
                message += "Nu te teme, totul va fi bine!";
                document.getElementById("mouth").classList.remove("mouth-open");
                document.getElementById("mouth").classList.add("mouth-closed"); 
            }

            document.getElementById("demo").innerHTML = message;

            document.getElementById("myDropdown").style.display = "none";
        }