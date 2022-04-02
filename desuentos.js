//const precioOriginal = 120;
//const descuento = 18;

function calcularPrecioConDescuento(precio, descuento)
{
    const porcentajePrecioConDescuento = 100 - descuento;

    const precioConDescuento = (precio * porcentajePrecioConDescuento) /100;

    return precioConDescuento;
    }

    function onClickButtonPriceDiscount() {
        const InputPrecio = document.getElementById("InputPrecio");
        const value1 = InputPrecio.value;

        const InputDescuento = document.getElementById("InputDescuento");
        const value2 = InputDescuento.value;

        const Descuento = calcularPrecioConDescuento(value1,value2);

        const ResultadoPrecio = document.getElementById("ResultadoPrecio");
        ResultadoPrecio.innerText = "El precio con descuento son: $" + Descuento;

    }



//console.log({precioOriginal,descuento, porcentajePrecioConDescuento, precioConDescuento,});