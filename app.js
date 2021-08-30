Ruta = new Recorrido();

function Agregar(){
    x=document.getElementById('valor-x').value
    y=document.getElementById('valor-y').value
    punto = new Punto(x,y)
    coordenada=document.getElementById('coordenadas').innerHTML
    document.getElementById('coordenadas').innerHTML= coordenada +"<br>"+ punto.toText();
    Ruta.agregar(punto);
}

function Distancia(){
    let res = Ruta.distancia();
    document.getElementById('resultado').innerHTML=res;
}