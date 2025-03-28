function myFunction() {
 document.getElementById("myModal").innerHTML = "Paragraph changed.";
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
//var img = document.getElementById("myImg");
var img = document.getElementsByClassName("myImg");
for(var i=0; i<img.length; i++){
var modalImg = document.getElementById("img01");
img[i].addEventListener('click', function(){
  //img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
})
//var captionText = document.getElementById("caption"); //not in use
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
