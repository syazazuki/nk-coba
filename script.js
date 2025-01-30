// TOP BUTTON
let mybutton = document.getElementById("myBtn");
         
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// COUNTDOWN BUTTON
var countDownDate = new Date("March  30, 2025 22:37:25").getTime();
    
// Update the count down every 1 second
var x = setInterval(function() {
  // Get today's date and time
  var now = new Date().getTime();
  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes, and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  var timerText = days + " Days " + hours + " Hours " + minutes + " Minutes " + seconds + " Seconds ";
  document.getElementById("demo").innerHTML = timerText;

  // Make it more interactive by adding color changes as the deadline approaches
  if (distance < 1000 * 60 * 60 * 24) { // Less than 24 hours remaining
    document.getElementById("demo").style.color = "red"; // Red warning color
  }

  // If the countdown is over
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EVENT EXPIRED";
    document.getElementById("demo").style.color = "gray";
  }
}, 1000);


  // AUDIO SECTION
const audio = document.getElementById('backgroundAudio');
    const toggleButton = document.getElementById('toggleAudioButton');
    const icon = toggleButton.querySelector('i');

    toggleButton.addEventListener('click', function () {
      if (audio.paused) {
        audio.play(); // Play the audio
        icon.classList.remove('fa-volume-off'); // Update to "volume-up" icon
        icon.classList.add('fa-volume-up');
      } else {
        audio.pause(); // Pause the audio
        icon.classList.remove('fa-volume-up'); // Update to "volume-off" icon
        icon.classList.add('fa-volume-off');
      }
    });


// Java for FAQS toggle 
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
acc[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var panel = this.nextElementSibling;
  if (panel.style.maxHeight) {
    panel.style.maxHeight = null; // Collapse the panel
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px"; // Expand to fit content
  }
});
}
