function crearFactura()
{
    let Disponible = 0;
    let tallaJS = parseInt(document.getElementById("talla").value);
    let costoJS = parseInt(document.getElementById("costo").value);
    let ventaJS = parseInt(document.getElementById("venta").value);
    let referenciaJS = parseInt(document.getElementById("referencia").value);

    let disponibleJS = document.getElementById("disponible").value;
    let descripcionJS = document.getElementById("descripcion").value;

    if(disponibleJS)
    {
        Disponible = "Si";
    }
    else
    {
        Disponible = "No";
    }

    document.getElementById("factura").innerHTML = `
    REGISTRO
    <br>
    <br>
    Descripcion del zapato:  ${descripcionJS} 
    <br><br>
    Numero de referencia: ${referenciaJS}
    <br>
    Talla de zapato: ${tallaJS}
    <br>
    Costo del producto: ${costoJS}
    <br>
    Precio de venta: ${ventaJS}
    <br>
    Disponible: ${Disponible}
    `;
}