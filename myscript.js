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

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg3");
var modal3Img = document.getElementById("img03");
img.onclick = function () {
  modal3.style.display = "block";
  modal3Img.src = this.src;
  captionText.innerHTML = this.alt;
}
var modal4 = document.getElementById("myModal4");

// Get the image and insert it inside the modal - use its "alt" text as a caption
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
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

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



function whatsapp() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var text = document.getElementById("text").value;
  var city = document.getElementById("city").value;
  if (city == "Астана") {

    var url = "https://wa.me/77075456130?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5.%20"
      + "%0a" + "Имя : " + name + "%0a"
      + "Email : " + email + "%0a"
      + "Номер : " + phone + "%0a"
      + "Город : " + city + "%0a"
      + text;
    window.open(url, '_blank').focus();
  }
  else if (city == "Алматы") {

    var url = "https://wa.me/77022609648?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5.%20"
      + "%0a" + "Имя : " + name + "%0a"
      + "Email : " + email + "%0a"
      + "Номер : " + phone + "%0a"
      + "Город : " + city + "%0a"
      + text;
    window.open(url, '_blank').focus();
  }
  else if (city == "Тараз") {

    var url = "https://wa.me/77477735969?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5.%20"
      + "%0a" + "Имя : " + name + "%0a"
      + "Email : " + email + "%0a"
      + "Номер : " + phone + "%0a"
      + "Город : " + city + "%0a"
      + text;
    window.open(url, '_blank').focus();
  }
  else if (city == "Актобе") {

    var url = "https://wa.me/77022609648?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5.%20"
      + "%0a" + "Имя : " + name + "%0a"
      + "Email : " + email + "%0a"
      + "Номер : " + phone + "%0a"
      + "Город : " + city + "%0a"
      + text;
    window.open(url, '_blank').focus();
  }
  else if (city == "Шымкент") {

    var url = "https://wa.me/77477735969?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5.%20"
      + "%0a" + "Имя : " + name + "%0a"
      + "Email : " + email + "%0a"
      + "Номер : " + phone + "%0a"
      + "Город : " + city + "%0a"
      + text;
    window.open(url, '_blank').focus();
  }
}


function whatsapp2() {
  var name = document.getElementById("name").value;
  var address = document.getElementById("address").value;
  var bik = document.getElementById("bik").value;
  var nameoforg = document.getElementById("nameoforg").value;
  var bin = document.getElementById("bin").value;
  var number = document.getElementById("number").value;
  var city = document.getElementById("city").value

  if (city == "Астана") {

    var url = "https://wa.me/77075456130?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5.%20"
      + "%0a" + "Название организации : " + nameoforg + "%0a"
      + "ФИО руководителя : " + name + "%0a"
      + "Юридический адрес : " + address + "%0a"
      + "БИК : " + bik + "%0a"
      + "Город : " + city + "%0a"
      + "БИН : " + bin + "%0a";
    +"Номер счета: " + number + "%0a"
    window.open(url, '_blank').focus();
  }
  else if (city == "Алматы") {

    var url = "https://wa.me/77022609648?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5.%20"
      + "%0a" + "Название организации : " + nameoforg + "%0a"
      + "ФИО руководителя : " + name + "%0a"
      + "Юридический адрес : " + address + "%0a"
      + "БИК : " + bik + "%0a"
      + "Город : " + city + "%0a"
      + "БИН : " + bin + "%0a";
    +"Номер счета: " + number + "%0a"
    window.open(url, '_blank').focus();
  }
  else if (city == "Тараз") {

    var url = "https://wa.me/77477735969?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5.%20"
      + "%0a" + "Название организации : " + nameoforg + "%0a"
      + "ФИО руководителя : " + name + "%0a"
      + "Юридический адрес : " + address + "%0a"
      + "БИК : " + bik + "%0a"
      + "Город : " + city + "%0a"
      + "БИН : " + bin + "%0a";
    +"Номер счета: " + number + "%0a"
    window.open(url, '_blank').focus();
  }
  else if (city == "Актобе") {

    var url = "https://wa.me/77022609648?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5.%20"
      + "%0a" + "Название организации : " + nameoforg + "%0a"
      + "ФИО руководителя : " + name + "%0a"
      + "Юридический адрес : " + address + "%0a"
      + "БИК : " + bik + "%0a"
      + "Город : " + city + "%0a"
      + "БИН : " + bin + "%0a";
    +"Номер счета: " + number + "%0a"
    window.open(url, '_blank').focus();
  }
  else if (city == "Шымкент") {

    var url = "https://wa.me/77477735969?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5.%20"
      + "%0a" + "Название организации : " + nameoforg + "%0a"
      + "ФИО руководителя : " + name + "%0a"
      + "Юридический адрес : " + address + "%0a"
      + "БИК : " + bik + "%0a"
      + "Город : " + city + "%0a"
      + "БИН : " + bin + "%0a";
    +"Номер счета: " + number + "%0a"
    window.open(url, '_blank').focus();
  }
}