let VarGlobal1="texto de variable global";

function FCambioColor(){
    var varTemporal= "texto temporal";
    let vTexto1 = document.getElementById("ejmDOM1");
    vTexto1.textContent= "Texto cambiado por Funcion FCambioColor";
    vTexto1.style.color="red";
    vTexto1.insertAdjacentHTML("beforeEnd",
                            " <br>Este texto es adicional <br>");
    vTexto1.style.backgroundColor="green";
    console.log(vTexto1.innerText);
    vTexto1.insertAdjacentHTML("beforeEnd", VarGlobal1);
    //la variable global se puede utilizar dentro de cualquier funcion

}
vTexto1= "Texto fuera de funcion"; //vTexto1 no es la variable de la funcion
console.log(vTexto1);
//console.log(varTemporal); // varTemporal no esta deifnido afuera de funcion


function FCambioClase1(){
let vTexto2=document.getElementsByClassName("classDOM1");
vTexto2[1].innerText="Elemento [1] del arreglo \n de clase classDOM1";
vTexto2[1].style.color="white";
console.log("Tamaño del array=",vTexto2.length);
console.log("Tipo de variable vTexto2",typeof vTexto2[1]);
//indice 1 es el 2do elemento
}

function FCambioTag1() {
    let vTexto3 =document.getElementsByTagName("h2");
    vTexto3[0].innerHTML="Elemento 1er h2 cambiado por TagDom1";
    vTexto3[13].innerHTML="Elemento ultimo h2 cambiado por TagDom1";
    vTexto3[13].style.color="magenta";
    //indice 10 es el 11vo elemento h2
}






























function FCapturarNombre(){

    const vTexto1 = document.getElementById("nombre");
    const vTexto2 = document.querySelectorAll("input.datosPersonales");
   
    vTexto1.style.color="red";
    
    var valor1 =vTexto1.value;
    var valor2 ="";

    document.getElementById('observacion').value = valor1;
   
    vTexto2.forEach(input => {
        valor2 =valor2 + `${input.name}: ${input.value}\n`;
      });

    document.getElementById('observacion').value = valor2;
    console.log('El valor del nombre es:', valor1);
}

