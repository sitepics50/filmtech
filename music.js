
 function play(id) {
        var audio = document.getElementById(id);
        audio.play();
      }

      function pause(id) {
        var audio = document.getElementById(id);
        audio.pause();
      }
      
function date() {
                 alert("coming soon!");
             }             
             




function searchIcon() {
  var input, filter, songs, nbm, i, txtValue;
  input = document.getElementById('search');
  filter = input.value.toUpperCase();
  container = document.getElementsByClassName('songs')[0];
  nbm = container.getElementsByClassName('nbm');
  for (i = 0; i < nbm.length; i++) {
    txtValue = nbm[i].textContent || nbm[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      nbm[i].style.display = "";
    } else {
      nbm[i].style.display = "none";
    }
  }
}