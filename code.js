// code.js
const caja = document.getElementById("caja");
const nuevoContenido = document.getElementById("nuevoContenido");

class Custom {
  constructor() {}

  domContentInicial() {
    return caja.querySelector("h1").textContent;
  }

  reemplazarDom() {
    caja.innerHTML = ''; // Elimina todo el contenido de caja

    const divNuevo = document.createElement("div");
    divNuevo.textContent = "Otro contenido";

    const BtnShowOldContent = document.createElement("button");
    BtnShowOldContent.textContent = "Botón Nuevo";
    BtnShowOldContent.addEventListener("click", () => {
      this.mostrarContenido(this.domContentInicial());
    });

    divNuevo.appendChild(BtnShowOldContent);
    nuevoContenido.appendChild(divNuevo);
  }

  mostrarContenido(param) {
    console.log(param);
  }
}

const showTitulo = new Custom();
showTitulo.reemplazarDom();
