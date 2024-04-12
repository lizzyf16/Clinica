let radiologia = [
  {
    hora: "11:00",
    especialista: "IGNACIO SCHULZ",
    paciente: "FRANCISCA ROJAS",
    rut: "9878782-1",
    prevision: "FONASA",
  },
  {
    hora: "11:30",
    especialista: "FEDERICO SUBERCASEAUX",
    paciente: "PAMELA ESTRADA",
    rut: "15345241-3",
    prevision: "ISAPRE",
  },
  {
    hora: "15:00",
    especialista: "FERNANDO WURTHZ",
    paciente: "ARMANDO LUNA",
    rut: "16445345-9",
    prevision: "ISAPRE",
  },
  {
    hora: "15:30",
    especialista: "ANA MARIA GODOY",
    paciente: "MANUEL GODOY",
    rut: "17666419-0",
    prevision: "FONASA",
  },
  {
    hora: "16:00",
    especialista: "PATRICIA SUAZO",
    paciente: "RAMON ULLOA",
    rut: "14989389-K",
    prevision: "FONASA",
  },
];

let traumatologia = [
  {
    hora: "08:00",
    especialista: "MARIA PAZ ALTUZARRA",
    paciente: "PAULA SANCHEZ",
    rut: "15554774-5",
    prevision: "FONASA",
  },
  {
    hora: "10:00",
    especialista: "RAUL ARAYA",
    paciente: "ANGÉLICA NAVAS",
    rut: "15444147-9",
    prevision: "ISAPRE",
  },
  {
    hora: "10:30",
    especialista: "MARIA ARRIAGADA",
    paciente: "PANA KLAPP",
    rut: "17879423-9",
    prevision: "ISAPRE",
  },
  {
    hora: "11:00",
    especialista: "ALEJANDRO BADILL",
    paciente: "FELIPE MARDONES",
    rut: "1547423-6",
    prevision: "ISAPRE",
  },
  {
    hora: "11:30",
    especialista: "CECILIA BUDNIK",
    paciente: "DIEGO MARREZ",
    rut: "16554741-K",
    prevision: "FONASA",
  },
  {
    hora: "12:00",
    especialista: "ARTURO CAVAGNARO",
    paciente: "CECILIA MENDEZ",
    rut: "9747535-8",
    prevision: "ISAPRE",
  },
  {
    hora: "12:30",
    especialista: "ANDRES KANACRI",
    paciente: "MARCIAL SUAZO",
    rut: "11254785-5",
    prevision: "ISAPRE",
  },
];

let traumatologia2 = [
  {
    hora: "09:00",
    especialista: "RENÉ POBLETE",
    paciente: "ANA GELLONA",
    rut: "13123329-7",
    prevision: "ISAPRE",
  },
  {
    hora: "09:30",
    especialista: "MARIA SOLAR",
    paciente: "RAMIRO ANDRADE",
    rut: " 12221451-K",
    prevision: "FONASA",
  },
  {
    hora: "10:00",
    especialista: "RAUL LOYOLA",
    paciente: "CARMEN ISLA",
    rut: "10112348-3",
    prevision: "ISAPRE",
  },
  {
    hora: "10:30",
    especialista: "ANTONIO LARENAS",
    paciente: "PABLO LOAYZA",
    rut: "13453234-1",
    prevision: "ISAPRE",
  },
  {
    hora: "12:00",
    especialista: "MATIAS ARAVENA",
    paciente: " SUSANA POBLETE",
    rut: "14345656-6",
    prevision: "FONASA",
  },
];

let dental = [
  {
    hora: "8:30",
    especialista: "ANDREA ZUÑIGA",
    paciente: "MARCELA RETAMAL",
    rut: "11123425-6",
    prevision: "ISAPRE",
  },
  {
    hora: "11:00",
    especialista: "MARIA PIA ZAÑARTU",
    paciente: "ANGEL MUÑOZ",
    rut: "9878789-2",
    prevision: "ISAPRE",
  },
  {
    hora: "11:30",
    especialista: "SCARLETT WITTING",
    paciente: "MARIO KAST",
    rut: "7998789-5",
    prevision: "FONASA",
  },
  {
    hora: "13:00",
    especialista: "FRANCISCO VON TEUBER",
    paciente: "KARIN FERNANDEZ",
    rut: "18887662-K",
    prevision: "FONASA",
  },
  {
    hora: "13:30",
    especialista: "EDUARDO VIÑUELA",
    paciente: "HUGO SANCHEZ",
    rut: "17665461-4",
    prevision: "FONASA",
  },
  {
    hora: "14:00",
    especialista: "RAQUEL VILLASECA",
    paciente: "ANA SEPULVEDA",
    rut: "14441281-0",
    prevision: "FONASA",
  },
];

//Función principal
function main() {
  listaRad(radiologia);
  listaTra(traumatologia);
  listaDen(dental);
  listadoHistorico();
}

main();

//Funcion para hacer una copia de los arreglos
function copiaObjeto(objeto) {
  return JSON.parse(JSON.stringify(objeto));
}

//Función para listar la tabla de radiología
function listaRad(listado) {
  let copiaRad = copiaObjeto(listado);
  copiaRad.shift();
  copiaRad.pop();
  let infoRad = document.getElementById("atencionRad");
  infoRad.innerText = `Primera atención: ${copiaRad[0].paciente} - ${
    copiaRad[0].prevision
  } | Última atención: ${copiaRad[copiaRad.length - 1].paciente} - ${
    copiaRad[copiaRad.length - 1].prevision
  }`;
  let cuerpoTabla = document.querySelector("#tablaRad tbody");
  let filasTabla = "";
  for (const atencion of copiaRad) {
    filasTabla += `
        <tr>
                <th scope="row">${atencion.hora}</th>
                <td>${atencion.especialista}</td>
                <td>${atencion.paciente}</td>
                <td>${atencion.rut}</td>
                <td>${atencion.prevision}</td>
              </tr>
        `;
  }
  cuerpoTabla.innerHTML = filasTabla;
}

//Función para listar la tabla de traumatología
function listaTra(listado) {
  let nuevoListado = copiaObjeto(listado);
  nuevoListado = nuevoListado.concat(traumatologia2);
  nuevoListado = ordenAtencion(nuevoListado);
  let infoTra = document.getElementById("atencionTra");
  infoTra.innerText = `Primera atención: ${nuevoListado[0].paciente} - ${
    nuevoListado[0].prevision
  } | Última atención: ${nuevoListado[nuevoListado.length - 1].paciente} - ${
    nuevoListado[nuevoListado.length - 1].prevision
  }`;
  let cuerpoTabla = document.querySelector("#tablaTra tbody");
  let filasTabla = "";
  for (const atencion of nuevoListado) {
    filasTabla += `
        <tr>
                <th scope="row">${atencion.hora}</th>
                <td>${atencion.especialista}</td>
                <td>${atencion.paciente}</td>
                <td>${atencion.rut}</td>
                <td>${atencion.prevision}</td>
              </tr>
        `;
  }
  cuerpoTabla.innerHTML = filasTabla;
}

//Función para listar la tabla dental
function listaDen(listado) {
  let infoDen = document.getElementById("atencionDen");
  infoDen.innerText = `Primera atención: ${dental[0].paciente} - ${
    dental[0].prevision
  } | Última atención: ${dental[dental.length - 1].paciente} - ${
    dental[dental.length - 1].prevision
  }`;
  let parrafo = "";
  for (const atencion of listado) {
    let listadoDental = document.getElementById("listadoDental");
    parrafo += `${Object.values(atencion).join(" - ")}

        `;
  }
  listadoDental.innerText = parrafo;
}

//Funcion para ordenar el listado de pacientes
function ordenAtencion(listado) {
  return listado.sort(function (a, b) {
    if (a.hora > b.hora) {
      return 1;
    }

    if (a.hora < b.hora) {
      return -1;
    }

    return 0;
  });
}

//Función para filtrar los pacientes dentales en Isapre
function filtrarPorPrevisionDental(arreglo, prevision) {
  return arreglo.filter((atencion) => atencion.prevision == prevision);
}
let resultado = filtrarPorPrevisionDental(dental, "ISAPRE");
for (const atencion of resultado) {
  let listadoIsapre = document.getElementById("previsionDental");
  listadoIsapre.innerHTML += `<li>${atencion.paciente} - ${atencion.prevision}</li>`;
}

//Función para filtrar los pacientes de traumatologia en Fonasa
function filtrarPorPrevisionTrauma(arreglo1, arreglo2, prevision) {
  let arregloConcatenado = arreglo1.concat(arreglo2);
  return arregloConcatenado.filter(
    (atencion) => atencion.prevision == prevision
  );
}
let resultadoTrauma = filtrarPorPrevisionTrauma(
  traumatologia,
  traumatologia2,
  "FONASA"
);
for (const atencion of resultadoTrauma) {
  let listadoFonasa = document.getElementById("previsionTraumatologia");
  listadoFonasa.innerHTML += `<li>${atencion.paciente} - ${atencion.prevision}</li>`;
}

function listadoHistorico() {
  let listadoHistorico = document.getElementById("listadoHistorico");
  let listadoGeneral = radiologia.concat(traumatologia, traumatologia2, dental);
  let listadoPacientes = "";

  for (let atencion of listadoGeneral) {
    listadoPacientes += `${atencion.paciente} \n`;
  }
  listadoHistorico.innerText = listadoPacientes;
}