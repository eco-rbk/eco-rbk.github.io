var modal1 = document.getElementById('id01');
var modal5 = document.getElementById('id02');
// When the user clicks anywhere outside of the modal3, close it
window.onclick = function (event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
  if (event.target == modal5) {
    modal5.style.display = "none";
  }
}


var cards = document.querySelectorAll('.card');

[...cards].forEach((card) => {
  card.addEventListener('click', function () {
    card.classList.toggle('is-flipped');
  });
});

var modal = document.getElementById("myModal1");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg1");
var modalImg = document.getElementById("img01");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var modal2 = document.getElementById("myModal2");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg2");
var modal2Img = document.getElementById("img02");
img.onclick = function () {
  modal2.style.display = "block";
  modal2Img.src = this.src;
  captionText.innerHTML = this.alt;
}


var modal3 = document.getElementById("myModal3");
var img = document.getElementById("myImg3");
var modal3Img = document.getElementById("img03");
img.onclick = function () {
  modal3.style.display = "block";
  modal3Img.src = this.src;
  captionText.innerHTML = this.alt;
}
var modal4 = document.getElementById("myModal4");

var img = document.getElementById("myImg4");
var modal4Img = document.getElementById("img04");
img.onclick = function () {
  modal4.style.display = "block";
  modal4Img.src = this.src;
  captionText.innerHTML = this.alt;
}
function closeModal(id) {
  $('#' + id).fadeOut('medium');
}

const form = document.querySelector("#myForm")
   const submitButton = document.querySelector("#zayavka")
   const scriptURL = 'https://sheetdb.io/api/v1/ds6ldp8iz6i1p'

   form.addEventListener('submit', e => {
     submitButton.disabled = true
     e.preventDefault()
     let requestBody = new FormData(form)
     fetch(scriptURL, { method: 'POST', body: requestBody})
       .then(response => {
          window.location.href='success.html'
          submitButton.disabled = false
         })
       .catch(error => {
       alert('Error!', error.message)
         submitButton.disabled = false

       }
       )
   })


   