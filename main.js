function addItem() {
    // Pega o valor do input
    var newItemText = document.getElementById("item").value;

    // Cria um novo elemento de lista
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(newItemText));

    // Cria um botão de remover
    var removeButton = document.createElement("button");
    removeButton.appendChild(document.createTextNode("Remover"));
    removeButton.onclick = function () {
      removeItem(li);
    };
    li.appendChild(removeButton);

    // Adiciona o novo item à lista
    document.getElementById("itemList").appendChild(li);

    // Limpa o campo de entrada
    document.getElementById("item").value = "";
  }

  function removeItem(item) {
    // Remove o item da lista
    item.remove();
  }
  

  var n1 = document.querySelector('#n1');
  var n1 = document.querySelector('#n2');
  var resultado = document.querySelector('span')
  function somar() {
    resultado.innerHTML = parseInt (n1.value) +  parseInt(n2.value)
  }

    function subtrair() {
      resultado.innerHTML = parseInt (n1.value) -  parseInt(n2.value)
    }

      function multiplicar() {
        resultado.innerHTML = parseInt (n1.value) * parseInt(n2.value)
      }

      function dividir(){
        resultado.innerHTML = parseInt (n1.value) /  parseInt(n2.value) 
  }
  
