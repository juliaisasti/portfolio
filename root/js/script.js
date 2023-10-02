document.getElementById("boton1").addEventListener("click", function () {
  let ul = document.createElement("ul");
  let li = document.createElement("li");
  let elements = document.createTextNode("texto dentro de li");
  let li2 = document.createElement("li");
  let elements2 = document.createTextNode("texto dentro de li2");
  let li3 = document.createElement("li");
  let elements3 = document.createTextNode("texto dentro de li3");

  ul.appendChild(li);
  ul.appendChild(li2);
  ul.appendChild(li3);
  li.appendChild(elements);
  li2.appendChild(elements2);
  li3.appendChild(elements3);

  document.querySelector("#lista").appendChild(ul);
});
