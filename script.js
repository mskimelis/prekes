"use strict";


var pristatymas = 2.9;
var taip = "Taip";
var ne = "Ne";

do {
  var kaina = prompt("Įveskite prekės kaina");
  var tikrinimas = Number(kaina);
  if(tikrinimas > 0){
  var siuntimas = prompt("Ar reikalingas pristatymas į namus? Taip/Ne");
  }
  if(siuntimas != taip){
    console.log("Prekės kaina: " + kaina + " €");
    console.log("Prekę galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a");
  }
} while(isNaN(tikrinimas))

if(siuntimas == taip){
 var miestas = prompt("Į kurį miestą reiks pristatyti");
 console.log("Prekės kaina: " + kaina + " €");
 console.log("Pristatymas: " + pristatymas + " €");
 console.log("Iš viso: " + (tikrinimas + 2.9) + " €");
 console.log("Prekę pristatysime į " + miestas + " per 1-3 dienas.");
}
