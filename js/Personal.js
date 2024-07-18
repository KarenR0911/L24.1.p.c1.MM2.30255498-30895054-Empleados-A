export default class Personal {
  constructor(nom, t, s) {
    this.nombre = nom;
    this.tipo = t;
    this.sueldo = s;
  }
  set nombre(nom) {
    this._nombre = nom;
  }
  set tipo(t) {
    this._tipo = t;
  }
  set sueldo(s) {
    this._sueldo = s;
  }
  get nombre() {
    return this._nombre;
  }
  get tipo() {
    return this._tipo;
  }
  get sueldo() {
    return this._sueldo;
  }
}
