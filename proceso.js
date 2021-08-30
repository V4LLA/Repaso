class Punto
{
    constructor(x,y)
    {
        this.x = x;
        this.y = y;
    }
    distancia(puntosig)
    {
        let rx=Math.pow(puntosig.x-this.x,2);
        let ry=Math.pow(puntosig.y-this.y,2);
        return Math.sqrt(rx+ry);
    }
    toText()
    {
        return "(" + this.x + "," + this.y + ")";
    }
}

class Recorrido
{
    constructor()
    {
        this.puntos = new Array();
    }
    agregar(punto)
    {
        this.puntos.push(punto);
    }
    distancia()
    {
        let sd = 0;
        for (let i = 0; i < this.puntos.length-1; i++) 
        {
            sd += this.puntos[i].distancia(this.puntos[i+1]);
        }
        return sd;
    }
}