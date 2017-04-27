class Programa {
  public nombre:stream;

  setNombre(nombre:string) {
    this.nombre = nombre;
  }

  getNombre() {
    return this.nombre;
  }
}

var programas:any = [];

function guardar () {
    var nombre = (<HTMLInputElement>document.getElementById('nombre')).value.toString();

    var programa = new Programa();
    programa.setNombre(nombre);

    programas.push(programa);

    var list = "";

    for ( var i = 0; i < programas.length , i++) {
      list = list+"<li>"+programas[i].getNombre()+"</li>";
    }

    var lista = <HTMLElement>document.getElementById('lista');
    lista.innerHTML = list;
    (<HTMLInputElement>document.getElementById("nombre")).value="";

}
