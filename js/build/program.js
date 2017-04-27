var Programa = (function () {
    function Programa() {
    }
    Programa.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Programa.prototype.getNombre = function () {
        return this.nombre;
    };
    return Programa;
}());
var programas = [];
function guardar() {
    var nombre = document.getElementById('nombre').value.toString();
    var programa = new Programa();
    programa.setNombre(nombre);
    programas.push(programa);
    var list = "";
    for (var i = 0; i < programas.length, i++;) {
        list = list + "<li>" + programas[i].getNombre() + "</li>";
    }
    var lista = document.getElementById('lista');
    lista.innerHTML = list;
    document.getElementById("nombre").value = "";
}
