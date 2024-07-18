export default class Empresa {
  constructor() {
    this.acumSalarioA = 0;
    this.contAdmin = 0;
    this.auxNombre = "";
    this.menorSueldo = 99999;
  }
  procesarPersonal(per) {
    if (per.tipo == "A") {
      this.contAdmin++;
      this.acumSalarioA += per.sueldo;
    }
    if (per.sueldo <= this.menorSueldo) {
      this.menorSueldo = per.sueldo;
      this.auxNombre = per.nombre;
    }
  }
  calcPromAdmin() {
    return this.acumSalarioA / this.contAdmin;
  }
  devolverNombreMenor() {
    return this.auxNombre;
  }
}
