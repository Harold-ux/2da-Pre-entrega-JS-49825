/* Mi nombre es Harold Díaz... estudiante de la comisión 49825. como 2da Pre-entrega envío este simulador que representa un sistema de gestión de citas diarias para la atención de mascotas en un salón de grooming. 

Comienza con la declaración de las funciones a utilizar y luego con la declaración de un arreglo que contiene varios objetos representando 4 pautas diarias. Cada pauta tiene propiedades como Id (identificador de la cita), Dueño (nombre del dueño de la mascota) y Mascota (nombre de la mascota) y status de confirmación (Cita confirmada o no).

El programa interactúa con el usuario a través de la función prompt para determinar el tipo de usuario: dueño de la mascota o doctor. Dependiendo de la elección del usuario, se presentan diferentes opciones de búsqueda.

Si el usuario es un dueño, se le permite seleccionar entre buscar por nombre de mascota o por su propio nombre si efectivamente está programada su cita, ó también podría registrarse en las citas diarias en el caso de que sea por primera vez. Si el usuario es un doctor, se le solicita el nombre de la pauta que desea buscar, y la función buscarCitaPorPauta se ejecuta para mostrar el resultado.

En caso de que el tipo de usuario ingresado no sea válido, se muestra un mensaje de alerta indicando "Cita no encontrada".

En resumen, el código simula un sistema de gestión de citas donde los propietarios y doctores pueden buscar sobre las citas diarias para así asistir o atender a las mascotas según el orden y pauta. */

// Antes que nada declaramos un array llamado pautasDiaria para almacenar los usuarios que se van a atender al dia y también los que se van a registrar por primera vez

const pautasDiarias = [
  { Id: "Pauta 1", Dueño: "Juan Perez", Mascota: "Max", Confirma: true },
  {
    Id: "Pauta 2",
    Dueño: "Maria Gonzalez",
    Mascota: "Bella",
    Confirma: false,
  },
  {
    Id: "Pauta 3",
    Dueño: "Luis Rodriguez",
    Mascota: "Rocky",
    Confirma: true,
  },
  { Id: "Pauta 4", Dueño: "Ana Sanchez", Mascota: "Coco", Confirma: true },
];

// Ahora, declaramos una función para el registro de usuarios nuevos

function agregarNuevoDueño() {
  const nuevoDueño = prompt("Ingrese el nombre del nuevo dueño:");
  const nuevaMascota = prompt("Ingrese el nombre de la mascota:");
  const confirma = confirm("¿Reserva una cita?");

  const nuevoId = "Pauta " + (pautasDiarias.length + 1);
  const nuevaCita = {
    Id: nuevoId,
    Dueño: nuevoDueño,
    Mascota: nuevaMascota,
    Confirma: confirma,
  };

  pautasDiarias.push(nuevaCita);

  alert("Nueva cita agregada con éxito!");
  console.log("Nueva cita agregada:", nuevaCita);
  mostrarCitaEnHTML(nuevaCita);
}

// funciones auxiliares

function mostrarResultadoBusqueda(citaEncontrada) {
  if (citaEncontrada) {
    alert(`
      ID: ${citaEncontrada.Id}
      Dueño: ${citaEncontrada.Dueño}
      Mascota: ${citaEncontrada.Mascota}`);
  } else {
    alert("Cita no encontrada");
    console.log("Cita no encontrada");
  }
}

// Esta función muestra la cita registrada en el html

function mostrarCitaEnHTML(cita) {
  const container = document.getElementById("citasContainer");

  if (!cita) {
    container.innerHTML = "Cita no encontrada";
    return;
  }

  // Crear elementos HTML
  const h2 = document.createElement("h2");
  const idParagraph = document.createElement("p");
  const dueñoParagraph = document.createElement("p");
  const mascotaParagraph = document.createElement("p");
  const confirmadaParagraph = document.createElement("p");

  // Agregar clases de estilo
  h2.classList.add("inline-block-element");
  idParagraph.classList.add("inline-block-element");
  dueñoParagraph.classList.add("inline-block-element");
  mascotaParagraph.classList.add("inline-block-element");
  confirmadaParagraph.classList.add("inline-block-element");

  // Agregar estilo con white-space a los elementos
  h2.style.whiteSpace = "pre-line";
  idParagraph.style.whiteSpace = "pre-line";
  dueñoParagraph.style.whiteSpace = "pre-line";
  mascotaParagraph.style.whiteSpace = "pre-line";
  confirmadaParagraph.style.whiteSpace = "pre-line";

  // Asignar contenido a los elementos
  h2.textContent = "Cita Agregada";
  idParagraph.textContent = `ID: ${cita.Id}`;
  dueñoParagraph.textContent = `Dueño: ${cita.Dueño}`;
  mascotaParagraph.textContent = `Mascota: ${cita.Mascota}`;
  confirmadaParagraph.textContent = `Confirma: ${cita.Confirma ? "Sí" : "No"}`;

  // Aplicar la clase confirmada si la cita está confirmada
  confirmadaParagraph.textContent = `Confirma: ${cita.Confirma ? "Sí" : "No"}`;
  if (cita.Confirma) {
    confirmadaParagraph.classList.add("confirmada");
  }

  // Añadir elementos al contenedor
  container.appendChild(h2);
  container.appendChild(idParagraph);
  container.appendChild(dueñoParagraph);
  container.appendChild(mascotaParagraph);
  container.appendChild(confirmadaParagraph);
}

// Luego, declaramos las funciones de búsqueda según recomendaciones de buenas practicas (ChatGpt). Agregamos el método .toLowerCase() para que no hayan problemas en las entradas de datos del usuario

function buscarCitaPorMascota(mascota) {
  const citaEncontrada = pautasDiarias.find(
    (item) => item.Mascota.toLowerCase() === mascota.toLowerCase()
  );
  mostrarCitaEnHTML(citaEncontrada);
  mostrarResultadoBusqueda(citaEncontrada);
}

function buscarCitaPorDueño(dueño) {
  const citaEncontrada = pautasDiarias.find(
    (item) => item.Dueño.toLowerCase() === dueño.toLowerCase()
  );
  mostrarResultadoBusqueda(citaEncontrada);
}

function buscarCitaPorPauta(pauta) {
  const citaEncontrada = pautasDiarias.find((item) => item.Id === pauta);
  mostrarResultadoBusqueda(citaEncontrada);
}

// Código principal

function mostrarTodasLasCitas() {
  // Itera sobre todas las citas y muestra cada una
  pautasDiarias.forEach((pautasDiarias) => {
    mostrarCitaEnHTML(pautasDiarias);
  });
}

const tipoDeUsuario = prompt(
  "Seleccione el perfil de su cuenta:\n1. Dueño\n2. Groomer"
);

if (tipoDeUsuario === "1") {
  const dueñoBusca = prompt(
    "Seleccione una opción:\n1. Buscar citas por nombre de mascota\n2. Buscar citas por nombre del dueño\n3. Agregar un nuevo usuario"
  );
  if (dueñoBusca === "1") {
    const nombreMascota = prompt(
      "Ingrese el nombre de la mascota que desea buscar:"
    ).toLowerCase();
    buscarCitaPorMascota(nombreMascota);
  } else if (dueñoBusca === "2") {
    const nombreDueño = prompt(
      "Ingrese su nombre para buscar su pauta"
    ).toLowerCase();
    buscarCitaPorDueño(nombreDueño);
  } else if (dueñoBusca === "3") {
    agregarNuevoDueño();
  } else {
    alert("Cita no encontrada");
  }
} else if (tipoDeUsuario === "2") {
  const groomerBusca = prompt(
    "Seleccione una opción:\n1. Mostrar todas las citas\n2. Buscar citas por nombre de mascota"
  );
  if (groomerBusca === "1") {
    // Muestra todas las citas
    mostrarTodasLasCitas();
  } else if (groomerBusca === "2") {
    const nombreMascota = prompt(
      "Ingrese el nombre de la mascota que desea buscar:"
    ).toLowerCase();
    buscarCitaPorMascota(nombreMascota);
  } else {
    alert("Cita no encontrada");
  }
} else {
  alert("Cita no encontrada");
}
