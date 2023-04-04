
var cant = document.getElementById("cantidad");
var prec = document.getElementById("precio");

function getOperacion() {

    var Importe_Compra = parseFloat(prec.value) * parseInt(cant.value);
    var primer_dsct = 0.10 * Importe_Compra;
    var segundo_dsct = 0.10 * (Importe_Compra - primer_dsct);
    var Importe_DsctTotal = (primer_dsct + segundo_dsct).toFixed(2);
    var Importe_Pagar = Importe_Compra - Importe_DsctTotal;

    document.getElementById("resultados").value = "Importe de la Compra: " + Importe_Compra + "\n" +
                                                  "Importe del Descuento total: " + Importe_DsctTotal + "\n" +
                                                  "Importe a Pagar: " + Importe_Pagar;
    return false;
}