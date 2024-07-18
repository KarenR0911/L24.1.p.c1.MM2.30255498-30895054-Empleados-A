/*En una empresa se tiene personal obrero y personal administrativo. La empresa necesita 
determinar cuál es alguno de los nombres del personal que gana menos (si no se repite, sólo 
reportar 1, si se repite, reportar cualquiera) y también el monto promedio pagado sólo los 
administrativos. 
Al ser consultada por la forma como desean que se presente la salida, la empresa suministra 
el siguiente formato, informando que Juan (obrero) actualmente gana $100, Ana (obrero) gana 
$50, Lin (administrativo) gana $200, Mary (obrero) gana $50 y Carlos (administrativo) 
gana $150 */

import Personal from "./Personal.js";
import Empresa from "./Empresa.js";

let per1 = new Personal("Juan", "O", 100);
let per2 = new Personal("Ana", "O", 50);
let per3 = new Personal("Lin", "A", 200);
let per4 = new Personal("Mary", "O", 50);
let per5 = new Personal("Carlos", "A", 150);

let empresa = new Empresa();

empresa.procesarPersonal(per1);
empresa.procesarPersonal(per2);
empresa.procesarPersonal(per3);
empresa.procesarPersonal(per4);
empresa.procesarPersonal(per5);

let salida = document.getElementById("Salida");
salida.innerHTML = `A continuación se mostrarán los resultados:<br>`;
salida.innerHTML += `Uno de los que gana menos: ${empresa.devolverNombreMenor()}`;
salida.innerHTML += `<br>El promedio de los administrativos: ${empresa.calcPromAdmin()}$`;
