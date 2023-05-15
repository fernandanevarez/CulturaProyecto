var cajaPadre = document.getElementById("principal"),
  dejarComentario = document.getElementById("comment"),
  contenedor = document.getElementById("contenedor");

var agregarBoton = function() {
  //Modifica las proporciones de la caja para que los botones quepan en ese espacio
  cajaPadre.setAttribute("class", "cajaPadreModificacion");

  //crea el boton Cancelar
  var botonCancelar = document.createElement("input");
  botonCancelar.setAttribute("class", "cancelar");
  botonCancelar.setAttribute("value", "Cancelar");
  botonCancelar.setAttribute("type", "button");

  cajaPadre.appendChild(botonCancelar);

  //crea el boton comnetar y el comment
  var boton = document.createElement("input");
  boton.setAttribute("value", "Comentar");
  boton.setAttribute("type", "button");
  boton.setAttribute("class", "btn-comment");
  cajaPadre.appendChild(boton);

  //EVento del boton
  var x = function() {
    //caja
    var div = document.createElement("div");
    div.setAttribute("class","padre");

    //Avatar
    var avatar = document.createElement("div");
    avatar.setAttribute("class", "avatar");

    //comment
    var cajaComentario = document.createElement("div");
    cajaComentario.setAttribute("class", "x")
    var parrafo = document.createElement("p");
    var comentario = document.createTextNode(dejarComentario.value);
    parrafo.appendChild(comentario);
    cajaComentario.appendChild(parrafo);

    var fecha = new Date();
    var fechaText = document.createTextNode(fecha);

    div.appendChild(fechaText);
    div.appendChild(avatar);
    div.appendChild(cajaComentario);
    contenedor.appendChild(div);

    dejarComentario.value = "";

    var cambio = function(){
      div.setAttribute("class", "cambio")
    }

    var afuera = function(){
      div.setAttribute("class", "padre");
    }

    var remover = function(){
      contenedor.removeChild(this);
    }

    div.addEventListener("mouseout", afuera);
    div.addEventListener("mouseover", cambio);
    div.addEventListener("click", remover);
  };

  var restaurar = function(){
    cajaPadre.removeChild(boton);
    cajaPadre.removeChild(botonCancelar);
    cajaPadre.setAttribute("class", "padre");
  };

  boton.addEventListener("click", x);
  boton.addEventListener("click", restaurar);

  //Evento para cancelar el comment
  var deshacer = function() {
    dejarComentario.value = "";
    cajaPadre.setAttribute("class", "padre");
    cajaPadre.removeChild(cajaPadre.children[3]);
    cajaPadre.removeChild(cajaPadre.children[2]);
  };

  botonCancelar.addEventListener("click", deshacer);

};

dejarComentario.addEventListener("click", agregarBoton);
