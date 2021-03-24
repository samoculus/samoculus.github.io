//let modal = document.getElementById('work-modal');
//let openModal = document.getElementById('open-modal');
//let closeModal = document.getElementsByClassName('close-modal')[0];

//openModal.onclick = () => {
    //modal.style.display = 'block';
//};

//closeModal.onclick = () => {
    //modal.style.display = 'none';
//};

// Close modal when user clicks anywhere outside of it.
//window.onclick = function(event) {
    //if (event.target == modal) {
      //modal.style.display = "none";
    //}
//};

setInterval(() => {
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('date').innerHTML = new Date().toLocaleDateString(undefined, options) + ' ∞ ' + new Date().toLocaleTimeString();
});