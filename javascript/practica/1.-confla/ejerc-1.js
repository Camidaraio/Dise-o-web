dineroCofla = parseInt(prompt("Cuanto dinero tiene Cofla?"));
dineroRoberto = prompt("Cuanto dinero tiene Roberto?");
dineroPedro = prompt("Cuanto dinero tiene Pedro?");


if (dineroCofla >= 0.6 && dineroCofla < 1) {
    alert("cofla, comprate el helado de agua");
    alert("y te sobra" + (dineroCofla - 0.6));
}
else if (dineroCofla >= 1 && dineroCofla < 1.6) {
    alert("cofla, comprate el helado de crema");
    alert("y te sobra" + (dineroCofla - 1));
}
else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
    alert("cofla, comprate el helado de heladix");
    alert("y te sobra" + (dineroCofla - 1.6));
}
else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
    alert("cofla, comprate el helado de heladovich");
    alert("y te sobra" + (dineroCofla - 1.7));
}
else if (dineroCofla >= 2.9) {
    alert("cofla, comprate el helado de 1/4");
    alert("y te sobra" + (dineroCofla - 2.9));
}
else {
    alert("No te alcanza para nada");
}

if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
    alert("roberto, comprate el helado de agua");
   
}
else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
    alert("roberto, comprate el helado de crema");
   
}
else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
    alert("roberto, comprate el helado de heladix");
    
}
else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
    alert("roberto, comprate el helado de heladovich");
   
}
else if (dineroRoberto >= 2.9) {
    alert("roberto, comprate el helado de 1/4");
    
}
else {
    alert("No te alcanza para nada");
}

if (dineroPedro >= 0.6 && dineroPedro < 1) {
    alert("pedro, comprate el helado de agua");
   
}
else if (dineroPedro >= 1 && dineroPedro < 1.6) {
    alert("pedro, comprate el helado de crema");
   
}
else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
    alert("pedro, comprate el helado de heladix");
    
}
else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
    alert("pedro, comprate el helado de heladovich");
   
}
else if (dineroPedro >= 2.9) {
    alert("pedro, comprate el helado de 1/4");
    
}
else {
    alert("No te alcanza para nada");
}

//---------------------
// OTRA MANERA MAS OPTIMA DE RESOLVERLO
/*
function comprarHelado(nombre, dinero) {
    if (dinero >= 0.6 && dinero < 1) {
        return nombre + ", comprate el helado de agua y te sobra " + (dinero - 0.6);
    } else if (dinero >= 1 && dinero < 1.6) {
        return nombre + ", comprate el helado de crema y te sobra " + (dinero - 1);
    } else if (dinero >= 1.6 && dinero < 1.7) {
        return nombre + ", comprate el helado de heladix y te sobra " + (dinero - 1.6);
    } else if (dinero >= 1.7 && dinero < 1.8) {
        return nombre + ", comprate el helado de heladovich y te sobra " + (dinero - 1.7);
    } else if (dinero >= 2.9) {
        return nombre + ", comprate el helado de 1/4 y te sobra " + (dinero - 2.9);
    } else {
        return nombre + ", no te alcanza para nada";
    }
}

var dineroCofla = prompt("Cuánto dinero tiene Cofla?");
var dineroRoberto = prompt("Cuánto dinero tiene Roberto?");
var dineroPedro = prompt("Cuánto dinero tiene Pedro?");

dineroCofla = parseFloat(dineroCofla);
dineroRoberto = parseFloat(dineroRoberto);
dineroPedro = parseFloat(dineroPedro);

alert(comprarHelado("Cofla", dineroCofla));
alert(comprarHelado("Roberto", dineroRoberto));
alert(comprarHelado("Pedro", dineroPedro));

*/