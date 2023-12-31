function date() {
                 alert("coming soon!");
             }             



let amount = parseFloat(localStorage.getItem('amount') || 0);             
                          
             
function mail() {
const line = document.getElementById('line').value;
  const lin = document.getElementById('lin').value;
  const linn = document.getElementById('linn').value;
  const withdrawAmount = parseFloat(document.getElementById('line').value);
  
    if (line == lin == linn) {
    alert('Complain in all line must not be empty and must not be the same');
  } else {
    const message = `Issues: \n\n line1: ${line} \n line2: ${lin} \n line3: ${linn}`;
    
    
                window.location.href = `mailto: eniolagbolahan090@gmail.com?subject=Improvement on FilmTech&body=${encodeURIComponent(message)}`;
                alert('Thank you we,ve receive your complaint and we will get back to you as soon as possible!!');
             }
}
 





function downloadAPK(filename) {
  // Create a temporary anchor element
  var link = document.createElement('a');
  link.href = filename;
  // Set the download attribute with the filename
  link.download = filename;
  // Append the anchor element to the body
  document.body.appendChild(link);
  // Trigger the click event on the anchor element
  link.click();
  // Remove the anchor element from the body
  document.body.removeChild(link);
}



function searchapps() {
  var input, filter, container, apps, i, txtValue;
  input = document.getElementById('search');
  filter = input.value.toUpperCase();
  container = document.getElementsByClassName('container')[0];
  apps = container.getElementsByClassName('apps');
  for (i = 0; i < apps.length; i++) {
    txtValue = apps[i].textContent || apps[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      apps[i].style.display = "";
    } else {
      apps[i].style.display = "none";
    }
  }
}



function startTimer() {
  var time = 10; // 5 minutes in seconds
  var initialOffset = '329';
  var i = 1
  var interval = setInterval(function() {
    document.getElementById('circle').style.strokeDashoffset = initialOffset - (i * (initialOffset / time));
    var minutes = Math.floor((time - i) / 60);
    var seconds = (time - i) % 60;
    var displayTime = 'Please Wait  ' + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
    document.getElementById('countdown').innerText = displayTime;
    if (i >= time) {
      clearInterval(interval);
      window.location.href = 'index.html'; // Redirect to another webpage
    }
    i++;
  }, 1000);
}

function submitForm(event) {
  event.preventDefault(); // Prevent form submission
  startTimer(); // Start the timer
}
