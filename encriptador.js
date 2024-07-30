function encriptar() {
   let cadena = document.querySelector('#leyenda').value;
   let newCadena=''; 

   for (let index = 0; index < cadena.length; index++) {
   let letra = cadena[index];

   if (letra === 'a') {
    newCadena += 'ai';
   }
   else if (letra === 'e'){
      newCadena += 'enter';
     }
   else if (letra === 'i'){
      newCadena += 'imes';
     }  
   else if (letra === 'o'){
      newCadena += 'ober';
     }
   else if (letra === 'u'){
      newCadena += 'ufat';
     }
   else {
    newCadena += letra;
   }
    
}
document.getElementById("output").value=newCadena;
}

function desencriptar() {
   let cadena = document.querySelector('#leyenda').value;
   let vocales=['a','e','i','o','u'];
   let secreto=['ai','enter','imes','ober','ufat'];
   let newCadena=cadena;

   for (let i = 0; i < vocales.length; i++) {
      newCadena = newCadena.replaceAll(secreto[i], vocales[i]);
   }
   document.getElementById("output").value=newCadena;
}

function copiarAlPortapapeles() {
   
   var texto = document.getElementById("output").value;
   navigator.clipboard.writeText(texto);
}

function limpiar() {
   var texto = document.getElementById("output").value='';
   var texto2 = document.getElementById("leyenda").value='';
}


//"fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!";

