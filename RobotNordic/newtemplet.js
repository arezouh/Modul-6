function alert() {
  alert("Dit templet er ny gemt under layout...");
}


(function() {
  var counter = 0;
  var btn = document.getElementById('btn');
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
