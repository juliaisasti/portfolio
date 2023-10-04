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

document.querySelector("#contactForm")
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    // Dentro del objeto "event" están todos los datos del formulario enviado

    event.preventDefault(); // parar envío formulario

    console.log("Has enviado formulario!!!");

    console.log(event); // objeto con datos
    console.log(event.target.elements); // inputs del form

    console.log(event.target.fname.value);
    console.log(event.target.lname.value);
    console.log(event.target.email.value);
    console.log(event.target.tlf.value);
    console.log(event.target.favorite.value); // select

    console.log(event.target.accept.checked); //checkbox. Booleano
    console.log(event.target.spam.checked); //checkbox. Booleano
    console.log(event.target.comments.value);

    const fname = event.target.fname.value;
    const lname = event.target.lname.value;
    const email = event.target.email.value;
    const tlf = event.target.tlf.value;
    const favorite = event.target.favorite.value; // select
    const accept = event.target.accept.checked; //checkbox. Booleano
    const spam = event.target.spam.checked; //checkbox. Booleano
    const comments = event.target.comments.value;

    let msj = "";

    // 3 < fname < 30 required
    if (fname.length < 3 || fname.length > 30) {
      console.log("Nombre fuera de tamaño: 3-30");
      msj += "Nombre fuera de tamaño: 3-30 \n";
    }
    // 3 < lname < 30 required
    if (lname.length < 3 || lname.length > 30) {
      console.log("Apellido fuera de tamaño: 3-30");
      msj += "Apellido fuera de tamaño: 3-30 \n";
    }
    // email .com .es @  require

    //hola@gmail.com
    //false && true && true --> false
    //hola@gmail.c
    //true && true && true --> true
    if (
      (!email.endsWith(".com") && !email.endsWith(".es")) ||
      !email.includes("@")
    ) {
      console.log("Error validación: " + email);
      msj += "Error validación: " + email + "\n";
    }

    // tlf number y 9 valores required
    console.log(tlf.length);
    if (tlf.length != 11) {
      console.log("Error validación: " + tlf);
      msj += "Error validación: " + tlf + "\n";
    }

    //aceptar términos y publicidad
    if (!accept || !spam) {
      console.log("Por favor, acepta condiciones y envío de publicidad");
      msj += "Por favor, acepta condiciones y envío de publicidad \n";
    }

    // Comprobar si hay errores
    if (msj.length != 0) {
      alert(msj); //imprime mensaje final de error
      //document.body.innerHTML += msj;
      let p = document.createElement("pre");
      let mensaje = document.createTextNode(msj);
      p.style.color = "#DD1C1A";
      p.style.fontSize = "8px";
      p.appendChild(mensaje);

      document.getElementById("contact").appendChild(p); // dibuja resultado
    }
  });