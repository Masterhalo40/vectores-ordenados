import Articulo from "./Articulo.js";
import Negocio from "./Negocio.js";

class Main{
    constructor(){
        let negocio = new Negocio(
            document.querySelector("#tableArt"),
            document.querySelector("#tableInfo")
        );
        
    document.querySelector("#btnAgregar").addEventListener("click",() => {
        let codigo = document.querySelector("#codigo").value;
        let nombre = document.querySelector("#nombre").value;
        let precio = Number(document.querySelector("#precio").value);
        let cantidad = document.querySelector("#cantidad").value;
        let descripcion = document.querySelector("#descripcion").value;
        let toString = document.querySelector("#toString");
        
        let objArticulo = {
            codigo: codigo,
            nombre: nombre,
            precio: precio,
            cantidad: cantidad,
            descripcion: descripcion
        };

        let articulo = new Articulo(objArticulo);
        if(negocio._contadorV<20){
            negocio.AddTabla(articulo);
            negocio.AddProducto(articulo);
            negocio._ordenarArt();
            console.log(negocio._articulos)
        }
        else{
            alert('Se ha alcanzado el límite de articulos');
        }
        
        toString.textContent = articulo.toString();
    });
    
    }
}

var m = new Main()