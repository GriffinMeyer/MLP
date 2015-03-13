/**
 * @author Juan Morales-Rocha
 */
window.addEventListener("keydown", checkKeyPressed, false);
 
function checkKeyPressed(e) {
    if (e.keyCode == "38") {
     sndExplosion = document.getElementById('explosion');
     sndExplosion.play();
    }
};