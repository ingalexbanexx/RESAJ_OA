/* ============================================================
   RESAJ
   REGISTRO DE SANCIONES ADMINISTRATIVAS Y JUDICIALES
   JAVASCRIPT
============================================================ */


/* ============================================================
   DATOS DE EJEMPLO
   ============================================================
   
   IMPORTANTE:
   Estos son solamente registros de prueba.
   Posteriormente serán reemplazados por registros.json
   o por una API/Base de Datos.
============================================================ */

const data = [

    {
        nombre: "JUAN CARLOS TORRES",
        dni: "28.182.905",
        organismoTipo: "municipal",
        organismo: "MUNICIPALIDAD DE FRAILE PINTADO",
        dictamen: "DICTAMEN 24/2025",
        sancion: "Suspensión",
        fecha: "12/02/2025",
        resolucion: "RES OA 15/2025"
    },

    {
        nombre: "LUCIANO DE MARCO",
        dni: "26.931.728",
        organismoTipo: "municipal",
        organismo: "MUNICIPALIDAD DE PERICO",
        dictamen: "DICTAMEN 44/2025",
        sancion: "Apercibimiento",
        fecha: "04/03/2025",
        resolucion: "RES OA 31/2025"
    },

    {
        nombre: "FACUNDO NICOLAS FERNANDEZ",
        dni: "40.636.892",
        organismoTipo: "provincial",
        organismo: "MINISTERIO DE SEGURIDAD",
        dictamen: "DICTAMEN 12/2025",
        sancion: "Cesantía",
        fecha: "18/01/2025",
        resolucion: "RES OA 07/2025"
    },

    {
        nombre: "MARIA ELENA LOPEZ",
        dni: "25.123.456",
        organismoTipo: "provincial",
        organismo: "MINISTERIO DE SALUD",
        dictamen: "DICTAMEN 18/2025",
        sancion: "Apercibimiento",
        fecha: "22/01/2025",
        resolucion: "RES OA 10/2025"
    }

];


/* ============================================================
   LISTA DE ORGANISMOS
============================================================ */

const organismos = {

    provincial: [

        "JEFATURA DE GABINETE",

        "MINISTERIO DE GOBIERNO, JUSTICIA, DERECHOS HUMANOS Y TRABAJO",

        "MINISTERIO DE HACIENDA Y FINANZAS",

        "MINISTERIO DE DESARROLLO ECONÓMICO Y PRODUCCIÓN",

        "MINISTERIO DE INFRAESTRUCTURA, SERVICIOS PÚBLICOS, TIERRA Y VIVIENDA",

        "MINISTERIO DE SALUD",

        "MINISTERIO DE DESARROLLO HUMANO",

        "MINISTERIO DE EDUCACIÓN",

        "MINISTERIO DE CULTURA Y TURISMO",

        "MINISTERIO DE AMBIENTE Y CAMBIO CLIMÁTICO",

        "MINISTERIO DE SEGURIDAD",

        "MINISTERIO DE PLANIFICACIÓN ESTRATÉGICA Y MODERNIZACIÓN",

        "MINISTERIO DE MINERÍA",

        "GOBERNACIÓN",

        "LEGISLATURA DE LA PROVINCIA DE JUJUY",

        "PODER JUDICIAL DE LA PROVINCIA DE JUJUY",

        "AGUA POTABLE DE JUJUY S.E.",

        "SUPERINTENDENCIA DE SERVICIOS PUBLICOS Y OTRAS CONCESIONES - SU.SE.PU.",

        "INSTITUTO DE SEGUROS DE JUJUY",

        "INSTITUTO JUJEÑO DE ENERGIAS RENOVABLES Y EFICIENCIA ENERGÉTICA",

        "INSTITUTO DE ARTES AUDIOVISUALES DE JUJUY",

        "ENTE AUTÁRQUICO TREN SOLAR DE LA QUEBRADA",

        "AGENCIA DE DESARROLLO DE JUJUY S.E.",

        "DEFENSORÍA DEL PUEBLO",

        "INSTITUTO DE VIVIENDA Y URBANISMO DE JUJUY",

        "JUJUY ENERGÍA Y MINERÍA S.E. (JEMSE)",

        "CANNAVA S.E.",

        "INSTITUTO PROVINCIAL DE JUEGOS DE AZAR (INPROJUY)",

        "GIRSU JUJUY S.E.",

        "AUDITORIA GENERAL DE LA PROVINCIA",

        "MINISTERIO PÚBLICO DE LA ACUSACIÓN",

        "MINISTERIO PÚBLICO DE LA DEFENSA",

        "DEFENSORIA DE LOS DERECHOS DE NIÑOS, NIÑAS Y ADOLESCENTES",

        "COMITÉ PROVINCIAL PARA LA PREVENCIÓN DE LA TORTURA Y OTROS TRATOS O PENAS CRUELES, INHUMANOS O DEGRADANTES"

    ],


    municipal: [

        "COMUNA DE ABRALAITE",

        "COMUNA DE ARRAYANAL",

        "COMUNA DE BARRANCAS",

        "COMUNA DE BARRIOS",

        "COMUNA DE CANGREJILLOS",

        "COMUNA DE CASPALA",

        "COMUNA DE CATUA",

        "COMUNA DE CIENEGUILLAS",

        "COMUNA DE CORANZULI",

        "COMUNA DE CUSI-CUSI",

        "COMUNA DE EL CÓNDOR",

        "COMUNA DE EL FUERTE",

        "COMUNA DE EL MORENO",

        "COMUNA DE EL PIQUETE",

        "COMUNA DE HIPÓLITO YRIGOYEN",

        "COMUNA DE HUACALERA",

        "COMUNA DE JAMA",

        "COMUNA DE MINA PIRQUITAS",

        "COMUNA DE PALCA DE APARZO",

        "COMUNA DE PAMPICHUELA",

        "COMUNA DE PUESTO DEL MARQUÉS",

        "COMUNA DE PUMAHUASI",

        "COMUNA DE RINCONADA",

        "COMUNA DE RODEITO",

        "COMUNA DE ROSARIO DE RIO GRANDE",

        "COMUNA DE SAN FRANCISCO",

        "COMUNA DE SANTA ANA",

        "COMUNA DE SANTA CATALINA",

        "COMUNA DE SUSQUES",

        "COMUNA DE TRES CRUCES",

        "COMUNA DE TUMBAYA",

        "COMUNA DE UQUÍA",

        "COMUNA DE VALLE GRANDE",

        "COMUNA DE VINALITO",

        "COMUNA DE VOLCÁN",

        "COMUNA DE YAVI",

        "MUNICIPALIDAD DE ABRA PAMPA",

        "MUNICIPALIDAD DE AGUAS CALIENTES",

        "MUNICIPALIDAD DE CAIMANCITO",

        "MUNICIPALIDAD DE CALILEGUA",

        "MUNICIPALIDAD DE EL AGUILAR",

        "MUNICIPALIDAD DE EL CARMEN",

        "MUNICIPALIDAD DE EL TALAR",

        "MUNICIPALIDAD DE FRAILE PINTADO",

        "MUNICIPALIDAD DE HUMAHUACA",

        "MUNICIPALIDAD DE LA ESPERANZA",

        "MUNICIPALIDAD DE LA MENDIETA",

        "MUNICIPALIDAD DE LA QUIACA",

        "MUNICIPALIDAD DE LIBERTADOR GRAL. SAN MARTIN",

        "MUNICIPALIDAD DE MAIMARA",

        "MUNICIPALIDAD DE MONTERRICO",

        "MUNICIPALIDAD DE PALMA SOLA",

        "MUNICIPALIDAD DE PALPALA",

        "MUNICIPALIDAD DE PAMPA BLANCA",

        "MUNICIPALIDAD DE PERICO",

        "MUNICIPALIDAD DE PUESTO VIEJO",

        "MUNICIPALIDAD DE PURMAMARCA",

        "MUNICIPALIDAD DE SAN ANTONIO",

        "MUNICIPALIDAD DE SAN PEDRO DE JUJUY",

        "MUNICIPALIDAD DE SAN SALVADOR DE JUJUY",

        "MUNICIPALIDAD DE SANTA CLARA",

        "MUNICIPALIDAD DE TILCARA",

        "MUNICIPALIDAD DE YALA",

        "MUNICIPALIDAD DE YUTO"

    ]

};


/* ============================================================
   ELEMENTOS HTML
============================================================ */

const organismoTipo =
    document.getElementById("organismoTipo");

const reparticionFilter =
    document.getElementById("reparticionFilter");

const searchInput =
    document.getElementById("searchInput");

const searchBtn =
    document.getElementById("searchBtn");

const clearBtn =
    document.getElementById("clearBtn");

const tableBody =
    document.getElementById("tableBody");

const resultsCount =
    document.getElementById("resultsCount");

const noResultsMessage =
    document.getElementById("noResultsMessage");


/* ============================================================
   INICIALIZACIÓN
============================================================ */

function init() {

    renderTable(data);

    setupEventListeners();

}


/* ============================================================
   CARGAR SEGUNDO COMBO
============================================================ */

function populateReparticiones(tipo) {

    reparticionFilter.innerHTML = "";

    if (!tipo) {

        const option =
            document.createElement("option");

        option.value = "";

        option.textContent =
            "Primero seleccione un Organismo";

        reparticionFilter.appendChild(option);

        reparticionFilter.disabled = true;

        return;
    }


    const optionInicial =
        document.createElement("option");

    optionInicial.value = "";

    optionInicial.textContent =
        "Todas las reparticiones";

    reparticionFilter.appendChild(optionInicial);


    organismos[tipo].forEach(function(reparticion) {

        const option =
            document.createElement("option");

        option.value = reparticion;

        option.textContent = reparticion;

        reparticionFilter.appendChild(option);

    });


    reparticionFilter.disabled = false;

}


/* ============================================================
   FILTRADO PRINCIPAL
============================================================ */

function filterData() {

    const tipoSeleccionado =
        organismoTipo.value;

    const reparticionSeleccionada =
        reparticionFilter.value;

    const textoBusqueda =
        searchInput.value
            .trim()
            .toLowerCase();


    let resultados = data;


    /* --------------------------------------------------------
       FILTRO POR TIPO
    -------------------------------------------------------- */

    if (tipoSeleccionado !== "") {

        resultados =
            resultados.filter(function(item) {

                return item.organismoTipo ===
                    tipoSeleccionado;

            });

    }


    /* --------------------------------------------------------
       FILTRO POR REPARTICIÓN
    -------------------------------------------------------- */

    if (reparticionSeleccionada !== "") {

        resultados =
            resultados.filter(function(item) {

                return item.organismo ===
                    reparticionSeleccionada;

            });

    }


    /* --------------------------------------------------------
       BUSCADOR
    -------------------------------------------------------- */

    if (textoBusqueda !== "") {

        resultados =
            resultados.filter(function(item) {

                return Object.values(item).some(function(valor) {

                    return String(valor)
                        .toLowerCase()
                        .includes(textoBusqueda);

                });

            });

    }


    renderTable(resultados);

}


/* ============================================================
   RENDERIZAR TABLA
============================================================ */

function renderTable(registros) {

    tableBody.innerHTML = "";

    noResultsMessage.style.display = "none";


    /* --------------------------------------------------------
       NO HAY REGISTROS
    -------------------------------------------------------- */

    if (registros.length === 0) {

        tableBody.innerHTML = `
            <tr>
                <td colspan="7" class="empty-table">
                    No se encontraron registros.
                </td>
            </tr>
        `;


        const reparticion =
            reparticionFilter.value;


        if (reparticion !== "") {

            noResultsMessage.style.display = "flex";

            noResultsMessage.querySelector("span").textContent =
                "La repartición seleccionada aún no posee Registro de Sanciones";

        }


        resultsCount.textContent =
            "Mostrando 0 registros";

        return;

    }


    /* --------------------------------------------------------
       GENERAR FILAS
    -------------------------------------------------------- */

    registros.forEach(function(item) {

        const tr =
            document.createElement("tr");


        tr.innerHTML = `

            <td>
                ${item.nombre}
            </td>

            <td>
                <span class="dni-badge">
                    ${item.dni}
                </span>
            </td>

            <td>
                ${item.organismo}
            </td>

            <td>
                ${item.dictamen}
            </td>

            <td>
                ${item.sancion}
            </td>

            <td>
                ${item.fecha}
            </td>

            <td>
                ${item.resolucion}
            </td>

        `;


        tableBody.appendChild(tr);

    });


    /* --------------------------------------------------------
       CONTADOR
    -------------------------------------------------------- */

    resultsCount.textContent =
        `Mostrando ${registros.length} registro${registros.length === 1 ? "" : "s"}`;

}


/* ============================================================
   LIMPIAR FILTROS
============================================================ */

function clearFilters() {

    organismoTipo.value = "";

    reparticionFilter.innerHTML = `
        <option value="">
            Primero seleccione un Organismo
        </option>
    `;

    reparticionFilter.disabled = true;

    searchInput.value = "";

    noResultsMessage.style.display = "none";

    renderTable(data);

}


/* ============================================================
   EVENTOS
============================================================ */

function setupEventListeners() {


    /* --------------------------------------------------------
       PRIMER COMBO
    -------------------------------------------------------- */

    organismoTipo.addEventListener(
        "change",
        function() {

            populateReparticiones(
                organismoTipo.value
            );

            filterData();

        }
    );


    /* --------------------------------------------------------
       SEGUNDO COMBO
    -------------------------------------------------------- */

    reparticionFilter.addEventListener(
        "change",
        function() {

            filterData();

        }
    );


    /* --------------------------------------------------------
       BUSCADOR EN TIEMPO REAL
    -------------------------------------------------------- */

    searchInput.addEventListener(
        "input",
        function() {

            filterData();

        }
    );


    /* --------------------------------------------------------
       BOTÓN BUSCAR
    -------------------------------------------------------- */

    searchBtn.addEventListener(
        "click",
        function() {

            filterData();

        }
    );


    /* --------------------------------------------------------
       ENTER EN BUSCADOR
    -------------------------------------------------------- */

    searchInput.addEventListener(
        "keydown",
        function(event) {

            if (event.key === "Enter") {

                filterData();

            }

        }
    );


    /* --------------------------------------------------------
       LIMPIAR
    -------------------------------------------------------- */

    clearBtn.addEventListener(
        "click",
        function() {

            clearFilters();

        }
    );

}

/* ============================================================
   ARRANCAR
============================================================ */

init();