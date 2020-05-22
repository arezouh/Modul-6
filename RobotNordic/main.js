
/*toggle nav index Arezou*/
let toggleNavStatus = false;

let toggleNav = function() {
  let getSidebar = document.querySelector(".nav-sidebar");
  let getSidebarUl = document.querySelector(".nav-sidebar ul");
  let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");

  if (toggleNavStatus === false) {
    getSidebarUl.style.visibility = "visible";
    getSidebar.style.width = "70vw";

    let arrayLength = getSidebarLinks.length;
    for (let i = 0; i < arrayLength; i++) {
      getSidebarLinks[i].style.opacity = "1";
    }

    toggleNavStatus = true;
  }

  else if (toggleNavStatus === true) {
    getSidebar.style.width = "0px";

    let arrayLength = getSidebarLinks.length;
    for (let i = 0; i < arrayLength; i++) {
      getSidebarLinks[i].style.opacity = "0";
    }

    getSidebarUl.style.visibility = "hidden";

    toggleNavStatus = false;
  }
}
/*toggle nav slut*/


/* Dropdown menu Sylvester */
 function myFunction() {
   document.getElementById("mySkabelon").classList.toggle("view");
}

 window.onclick = function(event) {
   if (!event.target.matches('.skabelonknap')) {
     var skabelons = document.getElementsByClassName("skabelon-content");
     var i;
     for (i = 0; i < skabelons.length; i++) {
       var openSkabelon = dropdowns[i];
       if (openSkabelon.classList.contains('view')) {
        openSkabelon.classList.remove('view');
       }
     }
   }
 }
// Dropdown menu slut

// Manifest udvidelse Sylvester
var udv = document.getElementsByClassName("udvid");
var i;

for (i = 0; i < udv.length; i++) {
  udv[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var boks = this.nextElementSibling;
    if (boks.style.display === "block") {
      boks.style.display = "none";
    } else {
      boks.style.display = "block";
    }
  });
}
// Manifest menu slut

// plus produkt og alertboks - Signe
function alert() {
  alert("Dit template er nu gemt under layout...");
}


(function() {
  var counter = 0;
  var btn = document.getElementById('btn1');
  var form = document.getElementById('form');
  var addInput = function() {
    counter++;
    var input = document.createElement("input");
    input.id = 'input-' + counter;
    input.type = 'text';
    input.name = 'name';
    input.placeholder = 'Produkt' + counter;
    form.appendChild(input);
  };
  btn1.addEventListener('click', function() {
    addInput();
  }.bind(this));
})();
//slut
