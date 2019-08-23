
const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");

const a = parseInt(input1.value); 
const b = parseInt(input2.value);



function Additionne () {
      
      const calcul = a + b;
      console.log("Addition!");
      document.querySelector(".resultat").innerHTML += `Résultat : ${calcul} <br>`;
      return calcul;
     
}

function Soustract () {
      const calcul = a-b;
      console.log("Soustraction!");
      document.querySelector(".resultat").innerHTML += `Résultat : ${calcul}<br>`;
      return calcul;
      
}


function Divide () {
      const calcul = a / b;
      console.log("Division !");
      document.querySelector("resultat").innerHTML += `Résultat : ${calcul}<br>`;
      return calcul;
     
}

function Multiply() {
      const calcul = a * b;
      console.log("Multiplication !");
      document.querySelector(".resultat").innerHTML += `Résultat : ${calcul}<br>`;
      return calcul;
     
}